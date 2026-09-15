import type { PrimaryCityId } from "@/store/use-global-store"

export type CityId = PrimaryCityId

export type WorldCity = {
  id: CityId
  name: string
  timeZone: string
  timezoneCode: string
}

export const defaultWorldCities: readonly WorldCity[] = [
  {
    id: "hoChiMinh",
    name: "Hồ Chí Minh",
    timeZone: "Asia/Ho_Chi_Minh",
    timezoneCode: "ICT",
  },
  {
    id: "tokyo",
    name: "Tokyo",
    timeZone: "Asia/Tokyo",
    timezoneCode: "JST",
  },
  {
    id: "shanghai",
    name: "Thượng Hải",
    timeZone: "Asia/Shanghai",
    timezoneCode: "CST",
  },
]

export const worldCities: readonly WorldCity[] = [
  ...defaultWorldCities,
  {
    id: "stockholm",
    name: "Stockholm",
    timeZone: "Europe/Stockholm",
    timezoneCode: "CET",
  },
  {
    id: "newYork",
    name: "New York",
    timeZone: "America/New_York",
    timezoneCode: "EST",
  },
  {
    id: "london",
    name: "London",
    timeZone: "Europe/London",
    timezoneCode: "GMT",
  },
  {
    id: "paris",
    name: "Paris",
    timeZone: "Europe/Paris",
    timezoneCode: "CET",
  },
  {
    id: "sydney",
    name: "Sydney",
    timeZone: "Australia/Sydney",
    timezoneCode: "AEST",
  },
]
