import { StatusBar } from "expo-status-bar"
import { useEffect, useMemo, useState } from "react"
import { Modal, Pressable, ScrollView, Text, View } from "react-native"
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
  const primaryCityId = useGlobalStore((state) => state.primaryCityId)
  const setPrimaryCityId = useGlobalStore((state) => state.setPrimaryCityId)
  const [now, setNow] = useState(() => new Date())
  const [isCountryPickerVisible, setCountryPickerVisible] = useState(false)
  const colors = themeTokens[theme]
  const currentCity = useMemo(
    () => worldCities.find((city) => city.id === primaryCityId) ?? worldCities[0],
    [primaryCityId],
  )
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
          <Pressable
            accessibilityRole="button"
            className="mx-4 mt-3 items-center rounded-full border border-[#C5C6CC] bg-white py-3 active:opacity-70 dark:border-[#454F5D] dark:bg-[#1B2430]"
            onPress={() => setCountryPickerVisible(true)}
          >
            <Text className="text-[13px] font-semibold" style={{ color: colors.primary }}>
              + {t("home.addCountry")}
            </Text>
          </Pressable>

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
      <Modal
        animationType="slide"
        transparent
        visible={isCountryPickerVisible}
        onRequestClose={() => setCountryPickerVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/30">
          <View
            className="rounded-t-[32px] px-5 pb-8 pt-6"
            style={{ backgroundColor: colors.surface }}
          >
            <View className="mb-5 flex-row items-center justify-between">
              <Text className="text-[20px] font-semibold" style={{ color: colors.onSurface }}>
                {t("home.chooseCountry")}
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={t("home.chooseCountry")}
                className="rounded-full bg-[#EAE8E3] px-3 py-2 dark:bg-[#303B49]"
                onPress={() => setCountryPickerVisible(false)}
              >
                <Text className="text-[12px]" style={{ color: colors.onSurfaceVariant }}>
                  ×
                </Text>
              </Pressable>
            </View>
            {worldCities.map((city) => {
              const selected = city.id === primaryCityId

              return (
                <Pressable
                  key={city.id}
                  accessibilityRole="radio"
                  accessibilityState={{ selected }}
                  className="mb-2 flex-row items-center justify-between rounded-2xl px-4 py-3 active:opacity-70"
                  style={{ backgroundColor: selected ? colors.waveGreen : colors.surfaceContainer }}
                  onPress={() => {
                    setPrimaryCityId(city.id)
                    setCountryPickerVisible(false)
                  }}
                >
                  <View>
                    <Text className="text-[15px] font-semibold" style={{ color: colors.onSurface }}>
                      {city.name}
                    </Text>
                    <Text className="mt-0.5 text-[11px]" style={{ color: colors.onSurfaceVariant }}>
                      {city.timezoneCode}
                    </Text>
                  </View>
                  {selected && <Text style={{ color: colors.primary }}>✓</Text>}
                </Pressable>
              )
            })}
          </View>
        </View>
      </Modal>
    </View>
  )
}
