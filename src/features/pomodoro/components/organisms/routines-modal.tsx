import { Modal, Pressable, Text, View } from "react-native"
import { GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler"
import Animated from "react-native-reanimated"
import { useDismissibleSheet } from "@/hooks/use-dismissible-sheet"
import type { ThemeTokens } from "@/theme/tokens"
import type { Routine } from "../../pomodoro.data"
import { LocalizedText } from "../atoms/localized-text"
import { RoutineCard } from "../molecules/routine-card"

export function RoutinesModal({
  visible,
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
  insetsBottom: number
  colors: ThemeTokens
  title: string
  closeLabel: string
  routines: Routine[]
  getLabel: (label: Routine["label"]) => string
  onClose: () => void
  onSelect: (routine: Routine) => void
}) {
  const { backdropStyle, dismiss, gesture, sheetStyle } = useDismissibleSheet(visible, onClose)

  return (
    <Modal animationType="none" transparent visible={visible} onRequestClose={dismiss}>
      <GestureHandlerRootView className="flex-1">
        <View className="flex-1 justify-end">
          <Pressable className="absolute inset-0" onPress={dismiss}>
            <Animated.View className="flex-1 bg-black/25" style={backdropStyle} />
          </Pressable>
          <GestureDetector gesture={gesture}>
            <Animated.View
              className="rounded-t-[34px] bg-klocka-neutral px-7 pt-7 dark:bg-[#0E141D]"
              onStartShouldSetResponder={() => true}
              style={[{ paddingBottom: Math.max(insetsBottom, 24) }, sheetStyle]}
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
                  onPress={dismiss}
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
                  onPress={() => {
                    onSelect(routine)
                    dismiss()
                  }}
                />
              ))}
            </Animated.View>
          </GestureDetector>
        </View>
      </GestureHandlerRootView>
    </Modal>
  )
}
