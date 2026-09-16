import { Animated, Modal, Pressable, Text, View } from "react-native"
import type { ThemeTokens } from "@/theme/tokens"
import type { Routine } from "../../pomodoro.data"
import { LocalizedText } from "../atoms/localized-text"
import { RoutineCard } from "../molecules/routine-card"

export function RoutinesModal({
  visible,
  sheetY,
  insetsBottom,
  colors,
  title,
  closeLabel,
  routines,
  getLabel,
  onClose,
  onSelect,
}: {
  visible: boolean
  sheetY: Animated.Value
  insetsBottom: number
  colors: ThemeTokens
  title: string
  closeLabel: string
  routines: Routine[]
  getLabel: (label: Routine["label"]) => string
  onClose: () => void
  onSelect: (routine: Routine) => void
}) {
  return (
    <Modal animationType="none" transparent visible={visible} onRequestClose={onClose}>
      <Pressable className="flex-1 justify-end bg-black/25" onPress={onClose}>
        <Animated.View
          className="rounded-t-[34px] bg-[#FBF9F4] px-7 pt-7 dark:bg-[#0E141D]"
          onStartShouldSetResponder={() => true}
          style={[
            { paddingBottom: Math.max(insetsBottom, 24) },
            { transform: [{ translateY: sheetY }] },
          ]}
        >
          <View className="mb-5 flex-row items-center justify-between">
            <LocalizedText
              className="text-[25px] font-semibold"
              color={colors.onSurface}
              value={title}
            />
            <Pressable
              accessibilityLabel={closeLabel}
              accessibilityRole="button"
              className="h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-[#151D29]"
              onPress={onClose}
            >
              <Text className="text-[25px] font-light" style={{ color: colors.onSurface }}>
                ×
              </Text>
            </Pressable>
          </View>
          {routines.map((routine) => (
            <RoutineCard
              key={routine.label}
              colors={colors}
              label={getLabel(routine.label)}
              routine={routine}
              onPress={() => onSelect(routine)}
            />
          ))}
        </Animated.View>
      </Pressable>
    </Modal>
  )
}
