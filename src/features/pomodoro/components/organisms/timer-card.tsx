import { nordicTokens, type ThemeTokens } from "@/theme/tokens"
import { Coffee } from "lucide-react-native"
import { Text, View } from "react-native"
import { formatDuration, type DurationUnit } from "../../pomodoro.utils"
import { BilingualText } from "../atoms/bilingual-text"
import { Waveform } from "../atoms/waveform"
import { DurationControl } from "../molecules/duration-control"

export function TimerCard({
  duration,
  remaining,
  colors,
  labels,
  onAdjust,
}: {
  duration: number
  remaining: number
  colors: ThemeTokens
  labels: { duration: string; ready: string; hours: string; minutes: string; seconds: string }
  onAdjust: (unit: DurationUnit, amount: number) => void
}) {
  return (
    <View
      className="mt-14 rounded-[34px] bg-white px-7 pb-7 pt-8 dark:bg-[#151D29]"
      style={nordicTokens.shadows.floating}
    >
      <View className="flex-row items-start justify-between">
        <BilingualText
          className="text-[16px] font-semibold tracking-[0.6px]"
          color={colors.onSurface}
          value={labels.duration}
        />
        <View className="flex-row items-center rounded-full bg-[#F0EEE9] px-3 py-2 dark:bg-[#25303D]">
          <Coffee color={colors.onSurfaceVariant} size={16} />
          <BilingualText
            className="ml-2 text-[12px] font-semibold"
            color={colors.onSurfaceVariant}
            value={labels.ready}
          />
        </View>
      </View>
      <Text
        className="mt-12 text-center text-[66px] font-light tracking-[-2px]"
        style={{ color: colors.onSurface }}
      >
        {formatDuration(remaining)}
      </Text>
      <View className="my-12">
        <Waveform color={nordicTokens.colors.dimmaBlue} />
      </View>
      <View className="flex-row gap-4">
        <DurationControl
          colors={colors}
          label={labels.hours}
          unit="hours"
          value={Math.floor(duration / 3600)}
          onChange={(amount) => onAdjust("hours", amount)}
        />
        <DurationControl
          colors={colors}
          label={labels.minutes}
          unit="minutes"
          value={Math.floor((duration % 3600) / 60)}
          onChange={(amount) => onAdjust("minutes", amount)}
        />
        <DurationControl
          colors={colors}
          label={labels.seconds}
          unit="seconds"
          value={duration % 60}
          onChange={(amount) => onAdjust("seconds", amount)}
        />
      </View>
    </View>
  )
}
