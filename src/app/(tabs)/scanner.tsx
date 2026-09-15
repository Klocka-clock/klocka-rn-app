import { useTranslation } from "@/i18n/use-translation"
import { useGlobalStore } from "@/store/use-global-store"
import { themeTokens } from "@/theme/tokens"
import { StatusBar } from "expo-status-bar"
import { CirclePlay, Coffee, Waves } from "lucide-react-native"
import { Text, View } from "react-native"

export default function PomodoroScreen() {
  const { t } = useTranslation()
  const theme = useGlobalStore((state) => state.theme)
  const colors = themeTokens[theme]

  return (
    <View className="flex-1 px-5" style={{ backgroundColor: colors.background }}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <View className="flex-1 items-center justify-center">
        <View className="h-24 w-24 items-center justify-center rounded-[32px] bg-[#E2EBD8] shadow-floating dark:bg-[#344235]">
          <Coffee color={colors.primary} size={38} strokeWidth={1.5} />
        </View>
        <Text
          className="mt-7 text-center text-[30px] font-normal"
          style={{ color: colors.onSurface }}
        >
          {t("screens.scannerTitle")}
        </Text>
        <Text
          className="mt-2 max-w-[280px] text-center text-[14px] leading-6"
          style={{ color: colors.onSurfaceVariant }}
        >
          {t("screens.scannerDescription")}
        </Text>
        <View className="mt-8 flex-row items-center gap-3 rounded-full bg-white px-5 py-3 shadow-pillowy dark:bg-[#1B2430]">
          <CirclePlay color={colors.primary} size={18} />
          <Text className="text-[13px] font-semibold" style={{ color: colors.primary }}>
            {t("home.now")}
          </Text>
          <Waves color={colors.tertiary} size={17} />
        </View>
      </View>
    </View>
  )
}
