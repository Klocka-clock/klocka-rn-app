import { StatusBar } from "expo-status-bar"
import { useEffect, useMemo, useState } from "react"
import { Modal, Pressable, ScrollView, Text, View } from "react-native"
import { GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler"
import Animated from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useGlobalStore } from "@/store/use-global-store"
import { themeTokens } from "@/theme/tokens"
import { useTranslation } from "@/i18n/use-translation"
import { useDismissibleSheet } from "@/hooks/use-dismissible-sheet"
import { worldCities } from "./home.data"
import { getSelectedWorldCities } from "./home.utils"
import { CurrentTimeCard } from "./components/current-time-card"
import { HomeHeader } from "./components/home-header"
import { WorldClockCard } from "./components/world-clock-card"

export function HomeScreen() {
  const insets = useSafeAreaInsets()
  const { t } = useTranslation()
  const theme = useGlobalStore((state) => state.theme)
  const mode = useGlobalStore((state) => state.mode)
  const selectedWorldCityIds = useGlobalStore((state) => state.selectedWorldCityIds)
  const addWorldCity = useGlobalStore((state) => state.addWorldCity)
  const [now, setNow] = useState(() => new Date())
  const [isCountryPickerVisible, setCountryPickerVisible] = useState(false)
  const colors = themeTokens[theme]
  const currentCity = worldCities[0]
  const cityCards = useMemo(
    () => getSelectedWorldCities(selectedWorldCityIds, worldCities),
    [selectedWorldCityIds],
  )

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)

    return () => clearInterval(timer)
  }, [])

  const { backdropStyle, dismiss, gesture, sheetStyle } = useDismissibleSheet(
    isCountryPickerVisible,
    () => setCountryPickerVisible(false),
  )

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
            className="mx-4 mt-3 items-center rounded-full border border-klocka-tertiary bg-white py-3 active:opacity-70 dark:border-[#454F5D] dark:bg-[#1B2430]"
            onPress={() => setCountryPickerVisible(true)}
          >
            <Text
              className="text-[13px] font-semibold"
              style={{ color: theme === "dark" ? colors.primary : colors.secondary }}
            >
              + {t("home:addCountry")}
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
                {t(`modes.${mode}`)}
              </Text>
              <Text
                className="mt-2 text-center text-[13px]"
                style={{ color: colors.onSurfaceVariant }}
              >
                {t("home:now")}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <Modal
        animationType="none"
        transparent
        visible={isCountryPickerVisible}
        onRequestClose={dismiss}
      >
        <GestureHandlerRootView className="flex-1">
          <View className="flex-1 justify-end">
            <Pressable className="absolute inset-0" onPress={dismiss}>
              <Animated.View className="flex-1 bg-black/30" style={backdropStyle} />
            </Pressable>
            <GestureDetector gesture={gesture}>
              <Animated.View
                className="rounded-t-[32px] px-5 pb-8 pt-6"
                onStartShouldSetResponder={() => true}
                style={[{ backgroundColor: colors.surface }, sheetStyle]}
              >
                <View className="mb-5 flex-row items-center justify-between">
                  <Text className="text-[20px] font-semibold" style={{ color: colors.onSurface }}>
                    {t("home:chooseCountry")}
                  </Text>
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={t("close")}
                    className="rounded-full bg-klocka-surface-container px-3 py-2 dark:bg-[#303B49]"
                    onPress={dismiss}
                  >
                    <Text className="text-[12px]" style={{ color: colors.onSurfaceVariant }}>
                      ×
                    </Text>
                  </Pressable>
                </View>
                {worldCities.map((city) => {
                  const selected = selectedWorldCityIds.includes(city.id)

                  return (
                    <Pressable
                      key={city.id}
                      accessibilityRole="radio"
                      accessibilityState={{ selected }}
                      className="mb-2 flex-row items-center justify-between rounded-2xl px-4 py-3 active:opacity-70"
                      style={{
                        backgroundColor: selected ? colors.waveGreen : colors.surfaceContainer,
                      }}
                      disabled={selected}
                      onPress={() => {
                        addWorldCity(city.id)
                        dismiss()
                      }}
                    >
                      <View>
                        <Text
                          className="text-[15px] font-semibold"
                          style={{ color: colors.onSurface }}
                        >
                          {t(`home:cities.${city.id}.name`)}
                        </Text>
                        <Text
                          className="mt-0.5 text-[11px]"
                          style={{ color: colors.onSurfaceVariant }}
                        >
                          {city.timezoneCode}
                        </Text>
                      </View>
                      {selected && (
                        <Text
                          style={{ color: theme === "dark" ? colors.primary : colors.onSurface }}
                        >
                          ✓
                        </Text>
                      )}
                    </Pressable>
                  )
                })}
              </Animated.View>
            </GestureDetector>
          </View>
        </GestureHandlerRootView>
      </Modal>
    </View>
  )
}
