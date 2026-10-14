import { languageNames, type LanguagePreference } from "@/i18n/config"
import { useTranslation } from "@/i18n/use-translation"
import { useGlobalStore } from "@/store/use-global-store"
import { themeTokens, type ThemeName, type ThemeTokens } from "@/theme/tokens"
import { StatusBar } from "expo-status-bar"
import { Check, ChevronRight, Moon, Palette, Sun, Volume2 } from "lucide-react-native"
import { Alert, Pressable, ScrollView, Switch, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

function SettingRow({
  icon,
  label,
  description,
  children,
  stacked = false,
}: {
  icon: React.ReactNode
  label: string
  description: string
  children: React.ReactNode
  stacked?: boolean
}) {
  return (
    <View className="border-b border-klocka-tertiary py-4 dark:border-[#303B49]">
      <View className="flex-row items-center gap-3">
        <View className="h-10 w-10 items-center justify-center rounded-2xl bg-klocka-surface-container dark:bg-[#26384D]">
          {icon}
        </View>
        <View className="flex-1">
          <Text className="text-[15px] font-semibold text-typography-900 dark:text-[#F2F1EC]">
            {label}
          </Text>
          <Text className="mt-0.5 text-[12px] text-typography-600 dark:text-[#C5C6CC]">
            {description}
          </Text>
        </View>
        {!stacked && children}
      </View>
      {stacked && <View className="mt-3">{children}</View>}
    </View>
  )
}

function ChoicePill({
  label,
  selected,
  theme,
  colors,
  onPress,
}: {
  label: string
  selected: boolean
  theme: ThemeName
  colors: ThemeTokens
  onPress: () => void
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      className="rounded-full px-3 py-2 active:opacity-70"
      style={{
        backgroundColor:
          theme === "dark"
            ? selected
              ? "#E2EBD8"
              : "#F0EEE9"
            : selected
              ? colors.tertiary
              : colors.surfaceContainer,
      }}
      onPress={onPress}
    >
      <Text
        className="text-[11px] font-semibold"
        style={{ color: theme === "dark" ? "#192231" : colors.onSurface }}
      >
        {label}
      </Text>
    </Pressable>
  )
}

export default function SettingsScreen() {
  const insets = useSafeAreaInsets()
  const { language, preference, setLanguagePreference, t } = useTranslation()
  const theme = useGlobalStore((state) => state.theme)
  const soundscape = useGlobalStore((state) => state.soundscape)
  const backgroundMode = useGlobalStore((state) => state.backgroundMode)
  const setTheme = useGlobalStore((state) => state.setTheme)
  const setSoundscape = useGlobalStore((state) => state.setSoundscape)
  const setBackgroundMode = useGlobalStore((state) => state.setBackgroundMode)
  const colors = themeTokens[theme]
  const changeLanguage = (value: LanguagePreference) => {
    void setLanguagePreference(value).catch(() => Alert.alert(t("error"), t("settings:saveError")))
  }

  return (
    <View className="flex-1" style={{ backgroundColor: colors.background }}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-5" style={{ paddingTop: Math.max(insets.top, 20) }}>
          <Text className="text-[30px] font-normal" style={{ color: colors.onSurface }}>
            {t("settings:title")}
          </Text>
          <Text className="mt-1 text-[13px]" style={{ color: colors.onSurfaceVariant }}>
            {t("settings:languageSummary", { language: languageNames[language] })}
          </Text>

          <View className="mt-7 rounded-[30px] bg-white px-4 shadow-floating dark:bg-[#1B2430]">
            <SettingRow
              stacked
              description={languageNames[language]}
              icon={<Palette color={colors.primary} size={18} />}
              label={t("settings:language")}
            >
              <View className="flex-row flex-wrap justify-end gap-1">
                <ChoicePill
                  label={t("settings:system")}
                  selected={preference === "system"}
                  theme={theme}
                  colors={colors}
                  onPress={() => changeLanguage("system")}
                />
                <ChoicePill
                  label={languageNames.vi}
                  selected={preference === "vi"}
                  theme={theme}
                  colors={colors}
                  onPress={() => changeLanguage("vi")}
                />
                <ChoicePill
                  label={languageNames.en}
                  selected={preference === "en"}
                  theme={theme}
                  colors={colors}
                  onPress={() => changeLanguage("en")}
                />
              </View>
            </SettingRow>

            <SettingRow
              description={theme === "dark" ? t("themes.dark") : t("themes.light")}
              icon={
                theme === "dark" ? (
                  <Moon color={colors.primary} size={18} />
                ) : (
                  <Sun color={colors.primary} size={18} />
                )
              }
              label={t("themes.light") + " / " + t("themes.dark")}
            >
              <Switch
                accessibilityLabel={t("themes.dark")}
                thumbColor="#FFFFFF"
                trackColor={{
                  false: theme === "dark" ? "#DBDAD5" : colors.surfaceContainerHigh,
                  true: theme === "dark" ? "#9AB8A2" : colors.primary,
                }}
                value={theme === "dark"}
                onValueChange={(value) => setTheme(value ? "dark" : "light")}
              />
            </SettingRow>

            <SettingRow
              description={soundscape === "rain" ? t("soundscapes.rain") : t("soundscapes.stream")}
              icon={<Volume2 color={colors.primary} size={18} />}
              label={t("settings:soundscape")}
            >
              <View className="flex-row gap-1">
                <ChoicePill
                  label="☔"
                  selected={soundscape === "rain"}
                  theme={theme}
                  colors={colors}
                  onPress={() => setSoundscape("rain")}
                />
                <ChoicePill
                  label="〰"
                  selected={soundscape === "stream"}
                  theme={theme}
                  colors={colors}
                  onPress={() => setSoundscape("stream")}
                />
              </View>
            </SettingRow>

            <SettingRow
              description={
                backgroundMode === "ai"
                  ? t("settings:aiBackground")
                  : t("settings:defaultBackground")
              }
              icon={<Palette color={colors.primary} size={18} />}
              label={t("settings:background")}
            >
              <Pressable
                accessibilityRole="button"
                accessibilityState={{ selected: backgroundMode === "ai" }}
                className="flex-row items-center gap-1 rounded-full bg-klocka-surface-container px-3 py-2 active:opacity-70 dark:bg-[#303B49]"
                onPress={() => setBackgroundMode(backgroundMode === "default" ? "ai" : "default")}
              >
                {backgroundMode === "ai" && <Check color={colors.primary} size={13} />}
                <Text
                  className="text-[11px] font-semibold"
                  style={{ color: theme === "dark" ? colors.primary : "#136C37" }}
                >
                  {backgroundMode === "ai" ? "AI" : t("settings:defaultBackground")}
                </Text>
                <ChevronRight color={colors.onSurfaceVariant} size={13} />
              </Pressable>
            </SettingRow>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
