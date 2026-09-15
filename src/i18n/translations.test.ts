import { describe, expect, it } from "vitest"

import { getTranslation, type TranslationKey } from "@/i18n/translations"

describe("translations", () => {
  it("returns Vietnamese copy for the default language", () => {
    expect(getTranslation("vi", "home.worldTitle")).toBe("Thế giới")
    expect(getTranslation("vi", "settings.language")).toBe("Ngôn ngữ")
  })

  it("returns English copy when the language is English", () => {
    expect(getTranslation("en", "home.worldTitle")).toBe("World")
    expect(getTranslation("en", "tabs.pomodoro")).toBe("Pomodoro")
  })

  it("falls back to Vietnamese when a translation is missing", () => {
    const missingKey = "home.weatherDetail" as TranslationKey

    expect(getTranslation("en", missingKey)).toBe("home.weatherDetail")
  })
})
