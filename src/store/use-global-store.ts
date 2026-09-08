import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

type GlobalState = {
  theme: "light" | "dark"
  hasSeenOnboarding: boolean
  setTheme: (theme: GlobalState["theme"]) => void
  setHasSeenOnboarding: (value: boolean) => void
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      theme: "light",
      hasSeenOnboarding: false,
      setTheme: (theme) => set({ theme }),
      setHasSeenOnboarding: (hasSeenOnboarding) => set({ hasSeenOnboarding }),
    }),
    {
      name: "klocka-global-state",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        theme: state.theme,
        hasSeenOnboarding: state.hasSeenOnboarding,
      }),
    },
  ),
)
