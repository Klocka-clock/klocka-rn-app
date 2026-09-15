import { describe, expect, it } from "vitest"

import { defaultWorldCities } from "@/features/home/home.data"
import { formatClockTime, getTimeZoneLabel } from "@/features/home/home.utils"

describe("world clock helpers", () => {
  const instant = new Date("2026-01-15T12:00:00.000Z")

  it("formats Vietnam, Japan, and China using explicit time zones", () => {
    expect(formatClockTime(instant, "Asia/Ho_Chi_Minh", "vi-VN")).toBe("19:00")
    expect(formatClockTime(instant, "Asia/Tokyo", "vi-VN")).toBe("21:00")
    expect(formatClockTime(instant, "Asia/Shanghai", "vi-VN")).toBe("20:00")
  })

  it("keeps the world defaults in Vietnam, Japan, and China order", () => {
    expect(defaultWorldCities.map((city) => city.id)).toEqual(["hoChiMinh", "tokyo", "shanghai"])
  })

  it("localizes a city's country and timezone label", () => {
    expect(getTimeZoneLabel("tokyo", "vi")).toBe("Nhật Bản · JST")
    expect(getTimeZoneLabel("tokyo", "en")).toBe("Japan · JST")
  })
})
