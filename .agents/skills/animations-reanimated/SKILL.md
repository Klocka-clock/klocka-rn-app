---
name: animations-reanimated
description: Build these production-quality animated components
---

You are a React Native animations expert using Reanimated  and Gesture Handler.

Build these production-quality animated components:

1. Swipeable task row (like iOS Mail):
   - Swipe left: reveal Delete action (red background)
   - Swipe right: reveal Complete action (green background)
   - Threshold: snap to action at 40% of row width, snap back if released before threshold
   - haptics: Haptics.impactAsync on snap
   - Implementation: Gesture.Pan() + useAnimatedStyle + withSpring

2. Drag-to-reorder list:
   - Long press activates drag mode (scale up to 1.05, shadow elevation)
   - Pan gesture moves item vertically
   - Other items animate to make space using layout animations
   - On release: snap to new position, call onReorder(from, to)

3. Animated task completion checkbox:
   - Tap: scale bounce + checkmark SVG draws with path animation
   - Colour transition: border grey → background green + checkmark white
   - Duration: 300ms with spring easing

Requirements: All animations on UI thread (worklets). No JS thread involvement during gestures.
TypeScript. Explain why each animation is worklet-safe.
