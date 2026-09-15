import { useGlobalStore } from "@/store/use-global-store"
import { Moon, Sun, UserRound, Volume2, VolumeX } from "lucide-react-native"
import type { ReactNode } from "react"
import { Pressable, Text, View } from "react-native"
import { useTranslation } from "@/i18n/use-translation"

export function HomeHeader({ accessory }: { accessory?: ReactNode }) {
  const { t } = useTranslation()
  const theme = useGlobalStore((state) => state.theme)
  const soundscape = useGlobalStore((state) => state.soundscape)
  const setTheme = useGlobalStore((state) => state.setTheme)
  const setSoundscape = useGlobalStore((state) => state.setSoundscape)

  const isDark = theme === "dark"
  const isSoundOn = soundscape === "rain"
  const ink = isDark ? "#F2F1EC" : "#192231"

  return (
    <View className="flex-row items-center justify-between px-4 pb-3 pt-2">
      <Text
        className="text-[13px] font-bold tracking-[2.2px]"
        style={{ color: ink }}
        accessibilityRole="header"
      >
        {t("brand")}
      </Text>

      <View className="flex-row items-center gap-2">
        {accessory}
        <Pressable
          accessibilityLabel={isSoundOn ? t("soundscapes.rain") : t("soundscapes.stream")}
          accessibilityRole="button"
          className="h-10 w-10 items-center justify-center rounded-full bg-white shadow-pillowy active:opacity-70 dark:bg-[#1B2430]"
          onPress={() => setSoundscape(isSoundOn ? "stream" : "rain")}
        >
          {isSoundOn ? <Volume2 color={ink} size={17} /> : <VolumeX color={ink} size={17} />}
        </Pressable>
        <Pressable
          accessibilityLabel={isDark ? t("themes.light") : t("themes.dark")}
          accessibilityRole="button"
          className="h-10 w-10 items-center justify-center rounded-full bg-white shadow-pillowy active:opacity-70 dark:bg-[#1B2430]"
          onPress={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? <Sun color={ink} size={17} /> : <Moon color={ink} size={17} />}
        </Pressable>
        <Pressable
          accessibilityLabel={t("home.profile")}
          accessibilityRole="button"
          className="h-10 w-10 items-center justify-center rounded-full bg-[#192231] shadow-pillowy active:opacity-70"
        >
          <UserRound color="#FFFFFF" size={17} />
        </Pressable>
      </View>
    </View>
  )
}
