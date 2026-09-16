import AsyncStorage from "@react-native-async-storage/async-storage"
import { getLocales } from "expo-localization"
import { i18n } from "./index"
import { createLanguageService } from "./language-service"

export const languageService = createLanguageService(i18n, AsyncStorage, () =>
  getLocales().map((locale) => locale.languageTag),
)
