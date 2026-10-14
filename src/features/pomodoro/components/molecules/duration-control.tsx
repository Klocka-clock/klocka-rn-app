import { useTranslation } from "@/i18n/use-translation"
import { ChevronDown, ChevronUp } from "lucide-react-native"
import { Pressable, Text, View } from "react-native"
import type { ThemeTokens } from "@/theme/tokens"
import type { DurationUnit } from "../../pomodoro.utils"
import { LocalizedText } from "../atoms/localized-text"

export function DurationControl({
  value,
  label,
  colors,
  onChange,
}: {
  value: number
  label: string
  unit: DurationUnit
  colors: ThemeTokens
  onChange: (amount: number) => void
}) {
  const { t } = useTranslation()
  return (
    <View className="flex-1 rounded-[24px] bg-klocka-surface-container px-2 py-3 dark:bg-[#1B2430]">
      <Pressable
        accessibilityLabel={t("pomodoro:increase", { unit: label })}
        accessibilityRole="button"
        className="h-11 items-center justify-center rounded-full bg-white active:opacity-70 dark:bg-[#25303D]"
        onPress={() => onChange(1)}
      >
        <ChevronUp color={colors.onSurface} size={21} />
      </Pressable>
      <Text className="mt-4 text-center text-[28px]" style={{ color: colors.onSurface }}>
        {String(value).padStart(2, "0")}
      </Text>
      <LocalizedText
        className="mt-1 text-center text-[11px]"
        color={colors.onSurfaceVariant}
        value={label}
      />
      <Pressable
        accessibilityLabel={t("pomodoro:decrease", { unit: label })}
        accessibilityRole="button"
        className="mt-4 h-11 items-center justify-center rounded-full bg-white active:opacity-70 dark:bg-[#25303D]"
        onPress={() => onChange(-1)}
      >
        <ChevronDown color={colors.onSurface} size={21} />
      </Pressable>
    </View>
  )
}
