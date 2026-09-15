import { useSyncExternalStore } from "react"
import { useTranslation as useReactTranslation } from "react-i18next"
import { namespaces } from "./config"
import { languageService } from "./native"

// Small app adapter: translations stay fully typed by react-i18next resources.
export function useTranslation() {
  const translation = useReactTranslation(namespaces)
  const locale = useSyncExternalStore(
    languageService.subscribe,
    languageService.getSnapshot,
    languageService.getSnapshot,
  )
  return { ...translation, ...locale, setLanguagePreference: languageService.setPreference }
}
