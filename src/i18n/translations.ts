import type { Language } from "@/store/use-global-store"

export const translations = {
  vi: {
    brand: "KLOCKA",
    home: {
      worldTitle: "Thế giới",
      currentCity: "Stockholm",
      currentCityCountry: "Thụy Điển",
      weatherDetail: "Thời tiết hiện tại",
      degrees: "14°C",
      weather: "Sương mù quanh đảo",
      profile: "Hồ sơ",
      now: "Bây giờ",
      daylight: "Ban ngày",
      midnight: "Nửa đêm",
    },
    modes: {
      world: "Thế giới",
      timer: "Hẹn giờ",
      pomodoro: "Pomodoro",
    },
    soundscapes: {
      rain: "Tiếng mưa rừng",
      stream: "Tiếng suối",
    },
    themes: {
      light: "Sáng",
      dark: "Tối",
    },
    tabs: {
      world: "Thế giới",
      pomodoro: "Pomodoro",
      timer: "Hẹn giờ",
      alarm: "Báo thức",
      recent: "Mới gần đây",
    },
    settings: {
      title: "Cài đặt",
      language: "Ngôn ngữ",
      soundscape: "Âm thanh nền",
      background: "Nền giao diện",
      defaultBackground: "Mặc định",
      aiBackground: "AI tạo nền",
    },
    cities: {
      hoChiMinh: { country: "Việt Nam", timezone: "ICT" },
      stockholm: { country: "Thụy Điển", timezone: "CET" },
      tokyo: { country: "Nhật Bản", timezone: "JST" },
      shanghai: { country: "Trung Quốc", timezone: "CST" },
      newYork: { country: "Hoa Kỳ", timezone: "EST" },
      london: { country: "Vương quốc Anh", timezone: "GMT" },
      paris: { country: "Pháp", timezone: "CET" },
      sydney: { country: "Úc", timezone: "AEST" },
    },
  },
  en: {
    brand: "KLOCKA",
    home: {
      worldTitle: "World",
      currentCity: "Stockholm",
      currentCityCountry: "Sweden",
      degrees: "14°C",
      weather: "Island mist",
      profile: "Profile",
      now: "Now",
      daylight: "Daylight",
      midnight: "Midnight",
    },
    modes: {
      world: "World",
      timer: "Timer",
      pomodoro: "Pomodoro",
    },
    soundscapes: {
      rain: "Forest rain",
      stream: "Running stream",
    },
    themes: {
      light: "Light",
      dark: "Dark",
    },
    tabs: {
      world: "World",
      pomodoro: "Pomodoro",
      timer: "Timer",
      alarm: "Alarm",
      recent: "Recent",
    },
    settings: {
      title: "Settings",
      language: "Language",
      soundscape: "Soundscape",
      background: "Background",
      defaultBackground: "Default",
      aiBackground: "AI generated",
    },
    cities: {
      hoChiMinh: { country: "Vietnam", timezone: "ICT" },
      stockholm: { country: "Sweden", timezone: "CET" },
      tokyo: { country: "Japan", timezone: "JST" },
      shanghai: { country: "China", timezone: "CST" },
      newYork: { country: "United States", timezone: "EST" },
      london: { country: "United Kingdom", timezone: "GMT" },
      paris: { country: "France", timezone: "CET" },
      sydney: { country: "Australia", timezone: "AEST" },
    },
  },
} as const

export type TranslationKey =
  | "brand"
  | "home.worldTitle"
  | "home.currentCity"
  | "home.currentCityCountry"
  | "home.weatherDetail"
  | "home.degrees"
  | "home.weather"
  | "home.profile"
  | "home.now"
  | "home.daylight"
  | "home.midnight"
  | "modes.world"
  | "modes.timer"
  | "modes.pomodoro"
  | "soundscapes.rain"
  | "soundscapes.stream"
  | "themes.light"
  | "themes.dark"
  | "tabs.world"
  | "tabs.pomodoro"
  | "tabs.timer"
  | "tabs.alarm"
  | "tabs.recent"
  | "settings.language"
  | "settings.title"
  | "settings.soundscape"
  | "settings.background"
  | "settings.defaultBackground"
  | "settings.aiBackground"

function readTranslation(language: Language, key: TranslationKey): string | undefined {
  const [section, value] = key.split(".")

  if (!value) {
    return translations[language][section as "brand"]
  }

  const entry = translations[language][section as "home"]
  return typeof entry === "object" && value in entry
    ? String(entry[value as keyof typeof entry])
    : undefined
}

export function getTranslation(language: Language, key: TranslationKey): string {
  return readTranslation(language, key) ?? readTranslation("vi", key) ?? key
}
