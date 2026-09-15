import { describe, expect, it } from "vitest"
import { bottomTabRoutes } from "./home-bottom-tabs.utils"

describe("bottomTabRoutes", () => {
  it("keeps only world, pomodoro, and settings tabs", () => {
    expect(bottomTabRoutes).toEqual(["index", "scanner", "settings"])
  })
})
