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
  selectedWorldCityIds: PrimaryCityId[]
  setTheme: (theme: GlobalState["theme"]) => void
  setHasSeenOnboarding: (value: boolean) => void
  setMode: (mode: AppMode) => void
  setSoundscape: (soundscape: Soundscape) => void
  setLanguage: (language: Language) => void
  setBackgroundMode: (backgroundMode: BackgroundMode) => void
  setSelectedWorldCityIds: (selectedWorldCityIds: PrimaryCityId[]) => void
  addWorldCity: (cityId: PrimaryCityId) => void
}

export type PersistedGlobalState = Pick<
  GlobalState,
  | "theme"
  | "hasSeenOnboarding"
  | "mode"
  | "soundscape"
  | "language"
  | "backgroundMode"
  | "selectedWorldCityIds"
>

export function getPersistedGlobalState(state: GlobalState): PersistedGlobalState {
  return {
    theme: state.theme,
    hasSeenOnboarding: state.hasSeenOnboarding,
    mode: state.mode,
    soundscape: state.soundscape,
    language: state.language,
    backgroundMode: state.backgroundMode,
    selectedWorldCityIds: state.selectedWorldCityIds,
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
      selectedWorldCityIds: ["hoChiMinh"],
      setTheme: (theme) => set({ theme }),
      setHasSeenOnboarding: (hasSeenOnboarding) => set({ hasSeenOnboarding }),
      setMode: (mode) => set({ mode }),
      setSoundscape: (soundscape) => set({ soundscape }),
      setLanguage: (language) => set({ language }),
      setBackgroundMode: (backgroundMode) => set({ backgroundMode }),
      setSelectedWorldCityIds: (selectedWorldCityIds) => set({ selectedWorldCityIds }),
      addWorldCity: (cityId) =>
        set((state) =>
          state.selectedWorldCityIds.includes(cityId)
            ? state
            : { selectedWorldCityIds: [...state.selectedWorldCityIds, cityId] },
        ),
    }),
    {
      name: "klocka-global-state",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: getPersistedGlobalState,
    },
  ),
)
