import { createInstance } from "i18next"
import { describe, expect, it, vi } from "vitest"
import { createLanguageService, LANGUAGE_STORAGE_KEY } from "./language-service"
import { resolveLocale } from "./locale"

function setup(initial: Record<string, string> = {}, tags = ["en-GB"]) {
  const data = new Map(Object.entries(initial))
  const storage = {
    getItem: vi.fn(async (key: string) => data.get(key) ?? null),
    setItem: vi.fn(async (key: string, value: string) => {
      data.set(key, value)
    }),
  }
  const instance = createInstance()
  const getTags = vi.fn(() => tags)
  const service = createLanguageService(instance, storage, getTags)
  return { service, instance, storage, data, getTags }
}

describe("language lifecycle", () => {
  it("uses the first supported device language and preserves its region", async () => {
    const { service, instance } = setup({}, ["fr-FR", "en-GB", "vi-VN"])
    await service.initialize()
    expect(service.getSnapshot()).toEqual({ preference: "system", language: "en", locale: "en-GB" })
    expect(instance.t("settings:title")).toBe("Settings")
  })

  it("falls back safely for unsupported or malformed locales", () => {
    expect(resolveLocale("system", ["fr-FR", "en-!"])).toEqual({ language: "vi", locale: "vi-VN" })
    expect(resolveLocale("en", ["vi-VN"])).toEqual({ language: "en", locale: "en-US" })
    expect(resolveLocale("system", ["vi_VN"])).toEqual({ language: "vi", locale: "vi-VN" })
  })

  it("migrates the existing user's explicit choice without changing other stored settings", async () => {
    const legacy = JSON.stringify({ state: { language: "vi", theme: "dark" }, version: 0 })
    const { service, data } = setup({ "klocka-global-state": legacy })
    await service.initialize()
    expect(service.getSnapshot().preference).toBe("vi")
    expect(data.get(LANGUAGE_STORAGE_KEY)).toBe("vi")
    expect(data.get("klocka-global-state")).toBe(legacy)
  })

  it("restores an explicit choice after restarting and gives new storage priority over legacy", async () => {
    const first = setup()
    await first.service.initialize()
    await first.service.setPreference("vi")
    const restarted = setup(Object.fromEntries(first.data))
    await restarted.service.initialize()
    expect(restarted.service.getSnapshot().language).toBe("vi")
    const migrated = setup({
      [LANGUAGE_STORAGE_KEY]: "en",
      "klocka-global-state": JSON.stringify({ state: { language: "vi" } }),
    })
    await migrated.service.initialize()
    expect(migrated.service.getSnapshot().language).toBe("en")
  })

  it("follows device changes only when the user selected system", async () => {
    const { service, getTags } = setup()
    await service.initialize()
    getTags.mockReturnValue(["vi-VN"])
    await service.refreshDeviceLocale()
    expect(service.getSnapshot().language).toBe("vi")
    await service.setPreference("en")
    await service.refreshDeviceLocale()
    expect(service.getSnapshot().language).toBe("en")
    await service.setPreference("system")
    expect(service.getSnapshot().language).toBe("vi")
  })

  it("serializes rapid changes so the final choice is also the persisted one", async () => {
    const { service, data, instance } = setup()
    const listener = vi.fn()
    const unsubscribe = service.subscribe(listener)
    await Promise.all([service.initialize(), service.initialize()])
    await Promise.all([
      service.setPreference("vi"),
      service.setPreference("en"),
      service.setPreference("vi"),
    ])
    expect(instance.resolvedLanguage).toBe("vi")
    expect(service.getSnapshot().preference).toBe("vi")
    expect(data.get(LANGUAGE_STORAGE_KEY)).toBe("vi")
    expect(listener).toHaveBeenCalled()
    unsubscribe()
  })

  it("keeps the previous choice on write failure and accepts a later retry", async () => {
    const { service, storage, instance } = setup()
    await service.initialize()
    storage.setItem.mockRejectedValueOnce(new Error("disk full"))
    await expect(service.setPreference("vi")).rejects.toThrow("disk full")
    expect(service.getSnapshot().preference).toBe("system")
    expect(instance.resolvedLanguage).toBe("en")
    await service.setPreference("vi")
    expect(service.getSnapshot().preference).toBe("vi")
  })

  it("still starts with system language if persisted data is corrupt or unreadable", async () => {
    const warning = vi.spyOn(console, "warn").mockImplementation(() => undefined)
    try {
      const corrupt = setup({ "klocka-global-state": "bad json" })
      await corrupt.service.initialize()
      expect(corrupt.service.getSnapshot().language).toBe("en")
      const unreadable = setup()
      unreadable.storage.getItem.mockRejectedValueOnce(new Error("unavailable"))
      await unreadable.service.initialize()
      expect(unreadable.service.getSnapshot().language).toBe("en")
    } finally {
      warning.mockRestore()
    }
  })
})
