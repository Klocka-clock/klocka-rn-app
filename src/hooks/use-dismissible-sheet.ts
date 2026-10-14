import { useCallback, useEffect, useMemo } from "react"
import { Gesture } from "react-native-gesture-handler"
import * as Haptics from "expo-haptics"
import {
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"
import { useWindowDimensions } from "react-native"

const springConfig = {
  damping: 24,
  stiffness: 260,
  mass: 0.8,
} as const

export function useDismissibleSheet(visible: boolean, onDismiss: () => void) {
  const { height } = useWindowDimensions()
  const translateY = useSharedValue(height)
  const isVisible = useSharedValue(visible)

  useEffect(() => {
    isVisible.value = visible
  }, [isVisible, visible])

  useAnimatedReaction(
    () => isVisible.value,
    (nextVisible) => {
      translateY.value = withSpring(nextVisible ? 0 : height, springConfig)
    },
    [height],
  )

  const dismiss = useCallback(() => {
    // Shared value writes are intentional here; Reanimated schedules the spring on the UI thread.
    // eslint-disable-next-line react-hooks/immutability
    translateY.value = withSpring(height, springConfig, (finished) => {
      if (finished) runOnJS(onDismiss)()
    })
  }, [height, onDismiss, translateY])

  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .activeOffsetY(10)
        .failOffsetX([-16, 16])
        .onUpdate((event) => {
          // eslint-disable-next-line react-hooks/immutability
          translateY.value = Math.max(0, event.translationY)
        })
        .onEnd((event) => {
          const shouldDismiss = translateY.value > height * 0.22 || event.velocityY > 850

          if (shouldDismiss) {
            runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Light)
            // eslint-disable-next-line react-hooks/immutability
            translateY.value = withSpring(height, springConfig, (finished) => {
              if (finished) runOnJS(onDismiss)()
            })
          } else {
            translateY.value = withSpring(0, springConfig)
          }
        }),
    [height, onDismiss, translateY],
  )

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }))

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateY.value, [0, height], [1, 0]),
  }))

  return { backdropStyle, dismiss, gesture, sheetStyle }
}
