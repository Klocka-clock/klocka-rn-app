import type { i18n as I18nInstance } from "i18next"
import { isLanguagePreference, type LanguagePreference } from "./config"
import { resolveLocale } from "./locale"
import { i18nOptions } from "./index"

export const LANGUAGE_STORAGE_KEY = "klocka-language-preference"
const LEGACY_STORAGE_KEY = "klocka-global-state"
type Storage = {
  getItem: (key: string) => Promise<string | null>
  setItem: (key: string, value: string) => Promise<unknown>
}

export function createLanguageService(
  instance: I18nInstance,
  storage: Storage,
  getDeviceTags: () => readonly string[],
) {
  let snapshot = { preference: "system" as LanguagePreference, ...resolveLocale("system", []) }
  const listeners = new Set<() => void>()
  let initialization: Promise<void> | undefined
  let queue: Promise<void> = Promise.resolve()
  const publish = (preference: LanguagePreference, resolved: ReturnType<typeof resolveLocale>) => {
    snapshot = { preference, ...resolved }
    listeners.forEach((listener) => listener())
  }
  const enqueue = (operation: () => Promise<void>) => {
    const next = queue.then(operation)
    queue = next.catch(() => undefined)
    return next
  }
  const initialize = () => {
    initialization ??= (async () => {
      let preference: LanguagePreference = "system"
      try {
        const saved = await storage.getItem(LANGUAGE_STORAGE_KEY)
        if (isLanguagePreference(saved)) preference = saved
        else if (saved === null) {
          const legacy = JSON.parse((await storage.getItem(LEGACY_STORAGE_KEY)) ?? "null")
          if (isLanguagePreference(legacy?.state?.language)) {
            preference = legacy.state.language
            await storage.setItem(LANGUAGE_STORAGE_KEY, preference)
          }
        }
      } catch (error) {
        console.warn("Could not restore language preference", error)
      }
      const resolved = resolveLocale(preference, getDeviceTags())
      await instance.init({ ...i18nOptions, lng: resolved.language })
      publish(preference, resolved)
    })()
    return initialization
  }
  return {
    initialize,
    getSnapshot: () => snapshot,
    subscribe: (listener: () => void) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    setPreference: (preference: LanguagePreference) =>
      enqueue(async () => {
        await initialize()
        if (!isLanguagePreference(preference)) throw new Error("Unsupported language preference")
        const resolved = resolveLocale(preference, getDeviceTags())
        // Persist first: if storage fails, keep the current selection and let the UI report it.
        await storage.setItem(LANGUAGE_STORAGE_KEY, preference)
        await instance.changeLanguage(resolved.language)
        publish(preference, resolved)
      }),
    refreshDeviceLocale: () =>
      enqueue(async () => {
        await initialize()
        const resolved = resolveLocale(snapshot.preference, getDeviceTags())
        if (resolved.language === snapshot.language && resolved.locale === snapshot.locale) return
        await instance.changeLanguage(resolved.language)
        publish(snapshot.preference, resolved)
      }),
  }
}
