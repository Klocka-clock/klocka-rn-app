import type { Language } from "@/store/use-global-store"
import { translations } from "@/i18n/translations"
import type { CityId } from "./home.data"

export type WorldClockCardPalette = {
  card: string
  panel: string
  ink: string
  muted: string
}

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

export function getUtcOffsetLabel(date: Date, timeZone: string): string {
  const offset = new Intl.DateTimeFormat("en", {
    timeZone,
    timeZoneName: "longOffset",
  })
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName")
    ?.value.replace("GMT", "")

  if (!offset || offset === "") return "+0h"

  const match = offset.match(/^([+-])(\d{2})(?::(\d{2}))?$/)
  if (!match) return offset

  const [, sign, hours, minutes = "00"] = match
  const decimalHours = Number(hours) + Number(minutes) / 60
  const normalizedHours = Number.isInteger(decimalHours)
    ? decimalHours.toString()
    : decimalHours.toFixed(1)

  return `${sign}${normalizedHours}h`
}

export function getWorldClockCardPalette(
  theme: "light" | "dark",
  isNight: boolean,
): WorldClockCardPalette {
  if (theme === "dark") {
    return {
      card: "#1B2430",
      panel: isNight ? "#25303D" : "#26384D",
      ink: "#F2F1EC",
      muted: "#C5C6CC",
    }
  }

  return {
    card: "#FFFFFF",
    panel: isNight ? "#E4E2DD" : "#EBF2FA",
    ink: "#192231",
    muted: "#75777D",
  }
}
