import { createInstance } from "i18next"
import { initReactI18next } from "react-i18next"
import { fallbackLanguage, supportedLanguages, namespaces } from "./config"
import { resources } from "./resources"

export const i18nOptions = {
  resources,
  supportedLngs: [...supportedLanguages],
  fallbackLng: fallbackLanguage,
  defaultNS: "common",
  ns: [...namespaces],
  interpolation: { escapeValue: false },
  returnNull: false,
  returnEmptyString: false,
  react: { useSuspense: false },
} as const

export const i18n = createInstance().use(initReactI18next)
