import type { Language } from "@/store/use-global-store"
import { translations } from "@/i18n/translations"
import type { CityId } from "./home.data"

export function formatClockTime(date: Date, timeZone: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(date)
}

export function getTimeZoneLabel(cityId: CityId, language: Language): string {
  const city = translations[language].cities[cityId]

  return `${city.country} · ${city.timezone}`
}
