import { beforeEach, describe, expect, it, vi } from "vitest"

import { getPersistedGlobalState, useGlobalStore, type GlobalState } from "@/store/use-global-store"

vi.mock("@react-native-async-storage/async-storage", () => ({
  default: {
    getItem: vi.fn(async () => null),
    setItem: vi.fn(async () => undefined),
    removeItem: vi.fn(async () => undefined),
  },
}))

describe("useGlobalStore", () => {
  beforeEach(() => {
    useGlobalStore.setState({
      theme: "light",
      hasSeenOnboarding: false,
      mode: "world",
      soundscape: "rain",
      language: "vi",
      backgroundMode: "default",
      selectedWorldCityIds: ["hoChiMinh"],
    })
  })

  it("starts with the Vietnamese Nordic world-clock defaults", () => {
    const state = useGlobalStore.getState()

    expect(state.theme).toBe("light")
    expect(state.mode).toBe("world")
    expect(state.soundscape).toBe("rain")
    expect(state.language).toBe("vi")
    expect(state.backgroundMode).toBe("default")
    expect(state.selectedWorldCityIds).toEqual(["hoChiMinh"])
  })

  it("updates each persisted preference through its dedicated action", () => {
    const state = useGlobalStore.getState()

    state.setTheme("dark")
    state.setMode("pomodoro")
    state.setSoundscape("stream")
    state.setLanguage("en")
    state.setBackgroundMode("ai")
    state.addWorldCity("tokyo")
    state.addWorldCity("tokyo")

    expect(useGlobalStore.getState()).toMatchObject({
      theme: "dark",
      mode: "pomodoro",
      soundscape: "stream",
      language: "en",
      backgroundMode: "ai",
      selectedWorldCityIds: ["hoChiMinh", "tokyo"],
    })
  })

  it("projects only serializable preferences for persistence", () => {
    const state = useGlobalStore.getState()
    const persisted = getPersistedGlobalState(state as GlobalState)

    expect(persisted).toEqual({
      theme: "light",
      hasSeenOnboarding: false,
      mode: "world",
      soundscape: "rain",
      language: "vi",
      backgroundMode: "default",
      selectedWorldCityIds: ["hoChiMinh"],
    })
    expect(persisted).not.toHaveProperty("setTheme")
  })
})
