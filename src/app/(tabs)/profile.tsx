import { useTranslation } from "@/i18n/use-translation"
import { useGlobalStore } from "@/store/use-global-store"
import { themeTokens } from "@/theme/tokens"
import { StatusBar } from "expo-status-bar"
import { UserRound } from "lucide-react-native"
import { Pressable, ScrollView, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function ProfileScreen() {
  const insets = useSafeAreaInsets()
  const { t } = useTranslation()
  const theme = useGlobalStore((state) => state.theme)
  const colors = themeTokens[theme]

  return (
    <View className="flex-1" style={{ backgroundColor: colors.background }}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}>
        <View className="px-5" style={{ paddingTop: Math.max(insets.top, 20) }}>
          <View
            className="items-center rounded-[32px] px-6 py-9 shadow-floating"
            style={{ backgroundColor: theme === "dark" ? "#192231" : colors.secondary }}
          >
            <View
              className="h-20 w-20 items-center justify-center rounded-full"
              style={{ backgroundColor: theme === "dark" ? "#E2EBD8" : colors.tertiary }}
            >
              <UserRound
                color={theme === "dark" ? "#192231" : colors.onSurface}
                size={34}
                strokeWidth={1.5}
              />
            </View>
            <Text className="mt-4 text-[20px] font-semibold text-white">KLOCKA User</Text>
            <Text
              className="mt-1 text-[13px]"
              style={{ color: theme === "dark" ? "#BEC7DB" : "#FFFFFF" }}
            >
              user@example.com
            </Text>
          </View>

          <View className="mt-3 flex-row justify-around rounded-[28px] bg-white py-5 shadow-pillowy dark:bg-[#1B2430]">
            <ProfileStat
              label={t("profile:posts")}
              value="17"
              color={colors.onSurface}
              muted={theme === "dark" ? "#75777D" : colors.outline}
            />
            <ProfileStat
              label={t("profile:likes")}
              value="55"
              color={colors.onSurface}
              muted={theme === "dark" ? "#75777D" : colors.outline}
            />
            <ProfileStat
              label={t("profile:followers")}
              value="2.5k"
              color={colors.onSurface}
              muted={theme === "dark" ? "#75777D" : colors.outline}
            />
          </View>

          <View className="mt-3 rounded-[28px] bg-white p-5 shadow-pillowy dark:bg-[#1B2430]">
            <Text className="text-[18px] font-semibold" style={{ color: colors.onSurface }}>
              {t("profile:about")}
            </Text>
            <Text className="mt-2 text-[13px] leading-5" style={{ color: colors.onSurfaceVariant }}>
              {t("profile:profileDescription")}
            </Text>
          </View>

          <Pressable className="mt-4 items-center rounded-full bg-[#FDEEEB] py-3 active:opacity-70">
            <Text className="text-[13px] font-semibold text-[#A73832]">{t("profile:signOut")}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

function ProfileStat({
  label,
  value,
  color,
  muted,
}: {
  label: string
  value: string
  color: string
  muted: string
}) {
  return (
    <View className="items-center">
      <Text className="text-[16px] font-semibold" style={{ color }}>
        {value}
      </Text>
      <Text className="mt-1 text-[10px] uppercase tracking-[1px]" style={{ color: muted }}>
        {label}
      </Text>
    </View>
  )
}
