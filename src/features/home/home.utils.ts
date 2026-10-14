import type { namespaces } from "@/i18n/config"
import type { TFunction } from "i18next"
import type { CityId, WorldCity } from "./home.data"

export { formatClockTime } from "@/i18n/formatters"

export type WorldClockCardPalette = {
  card: string
  panel: string
  ink: string
  muted: string
}

export function getSelectedWorldCities(
  selectedCityIds: readonly CityId[],
  cities: readonly WorldCity[],
): WorldCity[] {
  return selectedCityIds
    .map((cityId) => cities.find((city) => city.id === cityId))
    .filter((city): city is WorldCity => city !== undefined)
}

export function getTimeZoneLabel(cityId: CityId, t: TFunction<typeof namespaces>): string {
  return `${t(`home:cities.${cityId}.country`)} · ${t(`home:cities.${cityId}.timezone`)}`
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
    panel: isNight ? "#B5C9B7" : "#E2EEE5",
    ink: "#17221A",
    muted: "#45564A",
  }
}
