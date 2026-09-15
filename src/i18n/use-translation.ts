import { useGlobalStore } from "@/store/use-global-store"
import { getTranslation, type TranslationKey } from "./translations"

export function useTranslation() {
  const language = useGlobalStore((state) => state.language)

  return {
    language,
    t: (key: TranslationKey) => getTranslation(language, key),
  }
}
