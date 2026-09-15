import { nordicTokens } from "@/theme/tokens"
import { Pressable, Text, View } from "react-native"
import type { ThemeTokens } from "@/theme/tokens"
import type { Routine } from "../../pomodoro.data"
import { formatDuration } from "../../pomodoro.utils"
import { BilingualText } from "../atoms/bilingual-text"

export function RoutineCard({
  routine,
  colors,
  label,
  onPress,
}: {
  routine: Routine
  colors: ThemeTokens
  label: string
  onPress: () => void
}) {
  const Icon = routine.icon

  return (
    <Pressable
      accessibilityRole="button"
      className="mb-4 flex-row items-center rounded-[28px] bg-white px-5 py-4 active:opacity-75 dark:bg-[#151D29]"
      style={nordicTokens.shadows.pillowy}
      onPress={onPress}
    >
      <View className="h-14 w-14 items-center justify-center rounded-[20px] bg-[#F0EEE9] dark:bg-[#25303D]">
        <Icon color={colors.primary} size={25} strokeWidth={1.8} />
      </View>
      <BilingualText
        className="ml-4 flex-1 text-[18px] font-medium"
        color={colors.onSurface}
        value={label}
      />
      <Text className="text-[17px] font-semibold" style={{ color: colors.onSurface }}>
        {formatDuration(routine.duration).slice(3)}
      </Text>
    </Pressable>
  )
}
