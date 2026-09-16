import { nordicTokens, type ThemeTokens } from "@/theme/tokens"
import { ListChecks, Play, RotateCcw, Waves } from "lucide-react-native"
import { Pressable, View } from "react-native"
import { LocalizedText } from "../atoms/localized-text"

export function TimerActions({
  running,
  colors,
  startLabel,
  pauseLabel,
  routinesLabel,
  resetLabel,
  onToggle,
  onRoutines,
  onReset,
}: {
  running: boolean
  colors: ThemeTokens
  startLabel: string
  pauseLabel: string
  routinesLabel: string
  resetLabel: string
  onToggle: () => void
  onRoutines: () => void
  onReset: () => void
}) {
  return (
    <View className="mt-7 flex-row items-center gap-4">
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ busy: running }}
        className="h-[76px] flex-1 flex-row items-center justify-center rounded-full bg-[#192231] active:opacity-85"
        onPress={onToggle}
      >
        {running ? (
          <Waves color="#FFFFFF" size={22} />
        ) : (
          <Play color="#FFFFFF" fill="#FFFFFF" size={22} />
        )}
        <LocalizedText
          className="ml-4 text-[16px] font-semibold tracking-[0.3px]"
          color="#FFFFFF"
          value={running ? pauseLabel : startLabel}
        />
      </Pressable>
      <Pressable
        accessibilityLabel={routinesLabel}
        accessibilityRole="button"
        className="h-[76px] w-[76px] items-center justify-center rounded-full bg-white active:opacity-75 dark:bg-[#151D29]"
        style={nordicTokens.shadows.pillowy}
        onPress={onRoutines}
      >
        <ListChecks color={colors.onSurfaceVariant} size={27} />
      </Pressable>
      <Pressable
        accessibilityLabel={resetLabel}
        accessibilityRole="button"
        className="h-[76px] w-[76px] items-center justify-center rounded-full bg-white active:opacity-75 dark:bg-[#151D29]"
        style={nordicTokens.shadows.pillowy}
        onPress={onReset}
      >
        <RotateCcw color={colors.onSurfaceVariant} size={27} />
      </Pressable>
    </View>
  )
}
