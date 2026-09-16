import { createInstance } from "i18next"
import { describe, expect, it } from "vitest"
import { resources } from "./resources"
import { i18nOptions } from "./index"

function flatten(value: object, prefix = ""): Record<string, string> {
  return Object.fromEntries(
    Object.entries(value).flatMap(([key, entry]) => {
      const path = prefix ? `${prefix}.${key}` : key
      return typeof entry === "string" ? [[path, entry]] : Object.entries(flatten(entry, path))
    }),
  )
}
function variables(value: string) {
  return [...value.matchAll(/{{\s*([^}]+?)\s*}}/g)].map((match) => match[1]).sort()
}

describe("translation resources", () => {
  it("has matching nonempty keys and interpolation variables in VI and EN", () => {
    const vi = flatten(resources.vi)
    const en = flatten(resources.en)
    expect(Object.keys(en).sort()).toEqual(Object.keys(vi).sort())
    for (const [key, value] of Object.entries(vi)) {
      expect(value.trim(), key).not.toBe("")
      expect(en[key].trim(), key).not.toBe("")
      expect(variables(en[key]), key).toEqual(variables(value))
    }
  })

  it("resolves nested city keys and interpolates accessibility labels", async () => {
    const instance = createInstance()
    await instance.init({ ...i18nOptions, lng: "vi" })
    expect(instance.t("home:cities.shanghai.name")).toBe("Thượng Hải")
    expect(instance.t("pomodoro:duration")).toBe("THỜI GIAN HẸN GIỜ")
    expect(instance.t("pomodoro:increase", { unit: "GIỜ" })).toBe("Tăng GIỜ")
    await instance.changeLanguage("en")
    expect(instance.t("home:cities.shanghai.name")).toBe("Shanghai")
    expect(instance.t("pomodoro:increase", { unit: "HOURS" })).toBe("Increase HOURS")
  })

  it("falls back to Vietnamese when an English resource is actually missing", async () => {
    const instance = createInstance()
    const partial = structuredClone(resources)
    Reflect.deleteProperty(partial.en.settings, "title")
    await instance.init({ ...i18nOptions, resources: partial, lng: "en" })
    expect(instance.t("settings:title")).toBe("Cài đặt")
  })
})
