import viCommon from "./locales/vi/common.json"
import viNavigation from "./locales/vi/navigation.json"
import viHome from "./locales/vi/home.json"
import viPomodoro from "./locales/vi/pomodoro.json"
import viSettings from "./locales/vi/settings.json"
import viAuth from "./locales/vi/auth.json"
import viProfile from "./locales/vi/profile.json"
import viHistory from "./locales/vi/history.json"
import enCommon from "./locales/en/common.json"
import enNavigation from "./locales/en/navigation.json"
import enHome from "./locales/en/home.json"
import enPomodoro from "./locales/en/pomodoro.json"
import enSettings from "./locales/en/settings.json"
import enAuth from "./locales/en/auth.json"
import enProfile from "./locales/en/profile.json"
import enHistory from "./locales/en/history.json"

export const resources = {
  vi: {
    common: viCommon,
    navigation: viNavigation,
    home: viHome,
    pomodoro: viPomodoro,
    settings: viSettings,
    auth: viAuth,
    profile: viProfile,
    history: viHistory,
  },
  en: {
    common: enCommon,
    navigation: enNavigation,
    home: enHome,
    pomodoro: enPomodoro,
    settings: enSettings,
    auth: enAuth,
    profile: enProfile,
    history: enHistory,
  },
} as const
