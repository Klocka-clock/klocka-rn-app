import type { WorldCity } from "@/features/home/home.data"
import {
  formatClockTime,
  getTimeZoneLabel,
  getUtcOffsetLabel,
  getWorldClockCardPalette,
} from "@/features/home/home.utils"
import { useGlobalStore } from "@/store/use-global-store"
import { Cloud, CloudSun, Moon, Sun } from "lucide-react-native"
import { Text, View } from "react-native"
import { useTranslation } from "@/i18n/use-translation"

type WorldClockCardProps = {
  city: WorldCity
  now: Date
}

export function WorldClockCard({ city, now }: WorldClockCardProps) {
  const { locale, t } = useTranslation()
  const theme = useGlobalStore((state) => state.theme)
  const hour = Number(formatClockTime(now, city.timeZone, "en-US").slice(0, 2))
  const isNight = hour < 7 || hour >= 19
  const palette = getWorldClockCardPalette(theme, isNight)
  const WeatherIcon = isNight
    ? Moon
    : city.id === "newYork"
      ? Sun
      : city.id === "tokyo"
        ? CloudSun
        : Cloud

  return (
    <View
      className="relative mx-4 mb-3 min-h-[96px] overflow-hidden rounded-[30px] px-5 py-4 shadow-pillowy"
      style={{ backgroundColor: palette.card }}
    >
      <View
        className="absolute bottom-0 right-0 top-0 rounded-l-[28px]"
        style={{
          backgroundColor: palette.panel,
          opacity: 0.72,
          width: "50%",
        }}
      />
      <View
        className="absolute -right-10 -top-12 h-40 w-40 rounded-full opacity-70"
        style={{ backgroundColor: palette.panel }}
      />
      <View className="z-10 flex-row items-center justify-between">
        <View className="flex-1">
          <View className="flex-row items-center gap-2">
            <Text className="text-[16px] font-semibold" style={{ color: palette.ink }}>
              {t(`home:cities.${city.id}.name`)}
            </Text>
            <View className="rounded-full bg-[#F0EEE9] px-2 py-0.5 dark:bg-[#303B49]">
              <Text className="text-[9px] font-semibold" style={{ color: palette.ink }}>
                {getUtcOffsetLabel(now, city.timeZone)}
              </Text>
            </View>
          </View>
          <Text className="mt-1 text-[11px]" style={{ color: palette.muted }}>
            {getTimeZoneLabel(city.id, t)}
          </Text>
        </View>
        <View className="items-end">
          <Text className="text-[30px] font-light tracking-[-1px]" style={{ color: palette.ink }}>
            {formatClockTime(now, city.timeZone, locale)}
          </Text>
          <Text className="text-[9px] uppercase" style={{ color: palette.muted }}>
            {city.timezoneCode}
          </Text>
          <View className="flex-row items-center gap-1">
            <WeatherIcon color={palette.muted} size={11} />
            <Text className="text-[9px] uppercase" style={{ color: palette.muted }}>
              {isNight ? t("home:midnight") : t("home:daylight")}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
