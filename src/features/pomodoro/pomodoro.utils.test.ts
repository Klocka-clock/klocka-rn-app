import { describe, expect, it } from "vitest"
import { adjustDuration, formatDuration, tickDuration } from "./pomodoro.utils"

describe("pomodoro duration utilities", () => {
  it("formats a duration as zero-padded hours, minutes, and seconds", () => {
    expect(formatDuration(15 * 60)).toBe("00:15:00")
    expect(formatDuration(1 * 60 * 60 + 2 * 60 + 3)).toBe("01:02:03")
  })

  it("adjusts one duration unit without changing the others", () => {
    expect(adjustDuration(15 * 60, "minutes", 1)).toBe(16 * 60)
    expect(adjustDuration(15 * 60, "hours", 1)).toBe(60 * 60 + 15 * 60)
    expect(adjustDuration(15 * 60, "seconds", -1)).toBe(14 * 60 + 59)
  })

  it("clamps duration to zero and never ticks below zero", () => {
    expect(adjustDuration(0, "seconds", -1)).toBe(0)
    expect(tickDuration(1)).toBe(0)
    expect(tickDuration(0)).toBe(0)
  })
})
