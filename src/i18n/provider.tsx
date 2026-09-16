import { useEffect, useState, type PropsWithChildren } from "react"
import { AppState } from "react-native"
import { I18nextProvider } from "react-i18next"
import * as SplashScreen from "expo-splash-screen"
import { i18n } from "./index"
import { languageService } from "./native"

void SplashScreen.preventAutoHideAsync().catch(() => undefined)

export function LocalizationProvider({ children }: PropsWithChildren) {
  const [ready, setReady] = useState(false)
  const [error, setError] = useState<unknown>()
  useEffect(() => {
    let active = true
    void languageService
      .initialize()
      .then(() => {
        if (active) setReady(true)
      })
      .catch((reason: unknown) => {
        if (active) setError(reason)
      })
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") void languageService.refreshDeviceLocale().catch(console.warn)
    })
    return () => {
      active = false
      subscription.remove()
    }
  }, [])
  useEffect(() => {
    if (ready || error) void SplashScreen.hideAsync().catch(() => undefined)
  }, [ready, error])
  if (error) throw error
  if (!ready) return null
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
