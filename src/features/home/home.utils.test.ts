import { createInstance } from "i18next"
import { i18nOptions } from "@/i18n"
import { namespaces } from "@/i18n/config"
import { beforeAll, describe, expect, it } from "vitest"

import { defaultWorldCities, worldCities } from "@/features/home/home.data"
import {
  formatClockTime,
  getTimeZoneLabel,
  getUtcOffsetLabel,
  getWorldClockCardPalette,
  getSelectedWorldCities,
} from "@/features/home/home.utils"

describe("world clock helpers", () => {
  const translator = createInstance()
  beforeAll(async () => {
    await translator.init({ ...i18nOptions, lng: "vi" })
  })
  const instant = new Date("2026-01-15T12:00:00.000Z")

  it("formats Vietnam, Japan, and China using explicit time zones", () => {
    expect(formatClockTime(instant, "Asia/Ho_Chi_Minh", "vi-VN")).toBe("19:00")
    expect(formatClockTime(instant, "Asia/Tokyo", "vi-VN")).toBe("21:00")
    expect(formatClockTime(instant, "Asia/Shanghai", "vi-VN")).toBe("20:00")
  })

  it("keeps the world defaults in Vietnam, Japan, and China order", () => {
    expect(defaultWorldCities.map((city) => city.id)).toEqual(["hoChiMinh", "tokyo", "shanghai"])
  })

  it("resolves selected city ids in their persisted order", () => {
    expect(
      getSelectedWorldCities(["hoChiMinh", "tokyo"], worldCities).map((city) => city.id),
    ).toEqual(["hoChiMinh", "tokyo"])
  })

  it("localizes a city's country and timezone label", () => {
    expect(getTimeZoneLabel("tokyo", translator.getFixedT("vi", namespaces))).toBe("Nhật Bản · JST")
    expect(getTimeZoneLabel("tokyo", translator.getFixedT("en", namespaces))).toBe("Japan · JST")
  })

  it("formats the city's UTC offset for the selected instant", () => {
    expect(getUtcOffsetLabel(instant, "Asia/Ho_Chi_Minh")).toBe("+7h")
    expect(getUtcOffsetLabel(instant, "Asia/Tokyo")).toBe("+9h")
    expect(getUtcOffsetLabel(instant, "America/New_York")).toBe("-5h")
  })

  it("keeps dark daytime cards dark enough for light text", () => {
    expect(getWorldClockCardPalette("dark", false)).toEqual({
      card: "#1B2430",
      panel: "#26384D",
      ink: "#F2F1EC",
      muted: "#C5C6CC",
    })
  })
})
