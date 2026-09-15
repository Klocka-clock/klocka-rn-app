import { StatusBar } from "expo-status-bar"
import { useEffect, useMemo, useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useGlobalStore } from "@/store/use-global-store"
import { themeTokens } from "@/theme/tokens"
import { useTranslation } from "@/i18n/use-translation"
import { worldCities } from "./home.data"
import { CurrentTimeCard } from "./components/current-time-card"
import { HomeHeader } from "./components/home-header"
import { WorldClockCard } from "./components/world-clock-card"

export function HomeScreen() {
  const insets = useSafeAreaInsets()
  const { t } = useTranslation()
  const theme = useGlobalStore((state) => state.theme)
  const mode = useGlobalStore((state) => state.mode)
  const [now, setNow] = useState(() => new Date())
  const colors = themeTokens[theme]
  const currentCity = useMemo(() => worldCities.find((city) => city.id === "stockholm")!, [])
  const cityCards = useMemo(
    () =>
      worldCities.filter((city) =>
        ["tokyo", "newYork", "london", "paris", "sydney"].includes(city.id),
      ),
    [],
  )

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <View className="flex-1" style={{ backgroundColor: colors.background }}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingTop: Math.max(insets.top, 8) }}>
          <HomeHeader />
          <CurrentTimeCard city={currentCity} now={now} />

          {mode === "world" ? (
            <View className="mt-4">
              {cityCards.map((city) => (
                <WorldClockCard key={city.id} city={city} now={now} />
              ))}
            </View>
          ) : (
            <View className="mx-4 mt-5 items-center rounded-[30px] bg-white px-6 py-12 shadow-pillowy dark:bg-[#1B2430]">
              <Text
                className="text-center text-[18px] font-medium"
                style={{ color: colors.onSurface }}
              >
                {t(`modes.${mode}` as "modes.timer" | "modes.pomodoro")}
              </Text>
              <Text
                className="mt-2 text-center text-[13px]"
                style={{ color: colors.onSurfaceVariant }}
              >
                {t("home.now")}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  )
}
