import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type AppMode = "world" | "timer" | "pomodoro"
export type Soundscape = "rain" | "stream"
export type Language = "vi" | "en"
export type BackgroundMode = "default" | "ai"
export type PrimaryCityId =
  | "hoChiMinh"
  | "tokyo"
  | "shanghai"
  | "stockholm"
  | "newYork"
  | "london"
  | "paris"
  | "sydney"

export type GlobalState = {
  theme: "light" | "dark"
  hasSeenOnboarding: boolean
  mode: AppMode
  soundscape: Soundscape
  language: Language
  backgroundMode: BackgroundMode
  primaryCityId: PrimaryCityId
  setTheme: (theme: GlobalState["theme"]) => void
  setHasSeenOnboarding: (value: boolean) => void
  setMode: (mode: AppMode) => void
  setSoundscape: (soundscape: Soundscape) => void
  setLanguage: (language: Language) => void
  setBackgroundMode: (backgroundMode: BackgroundMode) => void
  setPrimaryCityId: (primaryCityId: PrimaryCityId) => void
}

export type PersistedGlobalState = Pick<
  GlobalState,
  | "theme"
  | "hasSeenOnboarding"
  | "mode"
  | "soundscape"
  | "language"
  | "backgroundMode"
  | "primaryCityId"
>

export function getPersistedGlobalState(state: GlobalState): PersistedGlobalState {
  return {
    theme: state.theme,
    hasSeenOnboarding: state.hasSeenOnboarding,
    mode: state.mode,
    soundscape: state.soundscape,
    language: state.language,
    backgroundMode: state.backgroundMode,
    primaryCityId: state.primaryCityId,
  }
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      theme: "light",
      hasSeenOnboarding: false,
      mode: "world",
      soundscape: "rain",
      language: "vi",
      backgroundMode: "default",
      primaryCityId: "hoChiMinh",
      setTheme: (theme) => set({ theme }),
      setHasSeenOnboarding: (hasSeenOnboarding) => set({ hasSeenOnboarding }),
      setMode: (mode) => set({ mode }),
      setSoundscape: (soundscape) => set({ soundscape }),
      setLanguage: (language) => set({ language }),
      setBackgroundMode: (backgroundMode) => set({ backgroundMode }),
      setPrimaryCityId: (primaryCityId) => set({ primaryCityId }),
    }),
    {
      name: "klocka-global-state",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: getPersistedGlobalState,
    },
  ),
)
