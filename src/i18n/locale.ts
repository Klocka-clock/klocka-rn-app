import {
  defaultLocales,
  fallbackLanguage,
  supportedLanguages,
  type LanguagePreference,
} from "./config"

export function resolveLocale(preference: LanguagePreference, deviceTags: readonly string[]) {
  for (const tag of deviceTags) {
    const language = supportedLanguages.find(
      (value) => tag.toLowerCase().split(/[-_]/)[0] === value,
    )
    if (language && (preference === "system" || preference === language)) {
      try {
        const locale = Intl.getCanonicalLocales(tag.replaceAll("_", "-"))[0]
        return { language, locale }
      } catch {
        /* Ignore malformed OS locale values. */
      }
    }
  }
  const language = preference === "system" ? fallbackLanguage : preference
  return { language, locale: defaultLocales[language] }
}
