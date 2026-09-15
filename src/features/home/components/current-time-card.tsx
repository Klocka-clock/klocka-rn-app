import { getTimeZoneLabel, formatClockTime } from "@/features/home/home.utils"
import type { WorldCity } from "@/features/home/home.data"
import { useGlobalStore } from "@/store/use-global-store"
import { Text, View } from "react-native"
import { useTranslation } from "@/i18n/use-translation"

type CurrentTimeCardProps = {
  city: WorldCity
  now: Date
}

export function CurrentTimeCard({ city, now }: CurrentTimeCardProps) {
  const { language } = useTranslation()
  const theme = useGlobalStore((state) => state.theme)
  const isDark = theme === "dark"
  const ink = isDark ? "#F2F1EC" : "#192231"
  const muted = isDark ? "#C5C6CC" : "#75777D"

  return (
    <View
      className="relative mx-4 mt-1 min-h-[164px] overflow-hidden rounded-[32px] px-5 pb-4 pt-5 shadow-floating"
      style={{ backgroundColor: isDark ? "#151D29" : "#FFFFFF" }}
    >
      <View className="absolute -bottom-12 -left-6 h-28 w-[120%] rounded-[50%] bg-[#EBF2FA] opacity-80 dark:bg-[#26384D]" />
      <View className="absolute -bottom-16 -right-10 h-28 w-[115%] rounded-[50%] bg-[#E2EBD8] opacity-50 dark:bg-[#344235]" />

      <View className="z-10 flex-row items-start justify-between">
        <View>
          <Text className="text-[25px] font-normal" style={{ color: ink }}>
            {city.name}
          </Text>
          <Text className="mt-0.5 text-[12px]" style={{ color: muted }}>
            {getTimeZoneLabel(city.id, language)}
          </Text>
        </View>
        <Text className="mt-1 text-[11px]" style={{ color: muted }}>
          {city.timezoneCode}
        </Text>
      </View>

      <View className="z-10 mt-4 flex-row items-end">
        <Text
          className="text-[52px] font-light leading-[56px] tracking-[-2px]"
          style={{ color: ink }}
        >
          {formatClockTime(now, city.timeZone, language === "vi" ? "vi-VN" : "en-US")}
        </Text>
        <Text className="mb-1 ml-2 text-[10px] font-medium uppercase" style={{ color: muted }}>
          {city.timezoneCode}
        </Text>
      </View>
    </View>
  )
}
