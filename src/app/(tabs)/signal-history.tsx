import { useTranslation } from "@/i18n/use-translation"
import { useGlobalStore } from "@/store/use-global-store"
import { themeTokens } from "@/theme/tokens"
import { StatusBar } from "expo-status-bar"
import { History, Sparkles } from "lucide-react-native"
import { Text, View } from "react-native"

export default function RecentScreen() {
  const { t } = useTranslation()
  const theme = useGlobalStore((state) => state.theme)
  const colors = themeTokens[theme]

  return (
    <View className="flex-1 px-5" style={{ backgroundColor: colors.background }}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <View className="flex-1 items-center justify-center">
        <View className="h-24 w-24 items-center justify-center rounded-[32px] bg-[#EBF2FA] shadow-floating dark:bg-[#26384D]">
          <History color={colors.primary} size={38} strokeWidth={1.5} />
        </View>
        <Text
          className="mt-7 text-center text-[30px] font-normal"
          style={{ color: colors.onSurface }}
        >
          {t("screens.historyTitle")}
        </Text>
        <Text
          className="mt-2 max-w-[280px] text-center text-[14px] leading-6"
          style={{ color: colors.onSurfaceVariant }}
        >
          {t("screens.historyDescription")}
        </Text>
        <Sparkles className="mt-8" color={colors.tertiary} size={20} />
      </View>
    </View>
  )
}
