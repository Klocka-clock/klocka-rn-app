export const supportedLanguages = ["vi", "en"] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]
export type LanguagePreference = SupportedLanguage | "system"
export const fallbackLanguage: SupportedLanguage = "vi"
export const defaultLocales: Record<SupportedLanguage, string> = { vi: "vi-VN", en: "en-US" }
export const languageNames: Record<SupportedLanguage, string> = { vi: "Tiếng Việt", en: "English" }

export function isLanguagePreference(value: unknown): value is LanguagePreference {
  return value === "system" || value === "vi" || value === "en"
}

export const namespaces = [
  "common",
  "navigation",
  "home",
  "pomodoro",
  "settings",
  "auth",
  "profile",
  "history",
] as const
