export type CityId =
  | "hoChiMinh"
  | "tokyo"
  | "shanghai"
  | "stockholm"
  | "newYork"
  | "london"
  | "paris"
  | "sydney"

export type WorldCity = {
  id: CityId
  name: string
  timeZone: string
  timezoneCode: string
  weather: string
}

export const defaultWorldCities: readonly WorldCity[] = [
  {
    id: "hoChiMinh",
    name: "Hồ Chí Minh",
    timeZone: "Asia/Ho_Chi_Minh",
    timezoneCode: "ICT",
    weather: "Nắng nhẹ",
  },
  {
    id: "tokyo",
    name: "Tokyo",
    timeZone: "Asia/Tokyo",
    timezoneCode: "JST",
    weather: "Trời quang",
  },
  {
    id: "shanghai",
    name: "Thượng Hải",
    timeZone: "Asia/Shanghai",
    timezoneCode: "CST",
    weather: "Mây nhẹ",
  },
]

export const worldCities: readonly WorldCity[] = [
  ...defaultWorldCities,
  {
    id: "stockholm",
    name: "Stockholm",
    timeZone: "Europe/Stockholm",
    timezoneCode: "CET",
    weather: "Sương mù quanh đảo",
  },
  {
    id: "newYork",
    name: "New York",
    timeZone: "America/New_York",
    timezoneCode: "EST",
    weather: "Nắng thanh bình",
  },
  {
    id: "london",
    name: "London",
    timeZone: "Europe/London",
    timezoneCode: "GMT",
    weather: "Mây nhẹ",
  },
  {
    id: "paris",
    name: "Paris",
    timeZone: "Europe/Paris",
    timezoneCode: "CET",
    weather: "Nắng nhẹ",
  },
  {
    id: "sydney",
    name: "Sydney",
    timeZone: "Australia/Sydney",
    timezoneCode: "AEST",
    weather: "Nửa đêm yên tĩnh",
  },
]
