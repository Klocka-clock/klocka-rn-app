import { History, Hourglass, House, Timer, Volume2 } from "lucide-react-native"
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { Pressable, Text, View } from "react-native"
import { useTranslation } from "@/i18n/use-translation"

const iconByRoute = {
  "index": House,
  "scanner": Volume2,
  "settings": Timer,
  "profile": Hourglass,
  "signal-history": History,
} as const

export function HomeBottomTabs({ state, descriptors, navigation }: BottomTabBarProps) {
  const { t } = useTranslation()
  const labels = [
    t("tabs.world"),
    t("tabs.pomodoro"),
    t("tabs.timer"),
    t("tabs.alarm"),
    t("tabs.recent"),
  ]

  return (
    <View className="border-t border-[#EAE8E3] bg-[#FBF9F4] px-2 pb-2 pt-2 dark:border-[#303B49] dark:bg-[#0E141D]">
      <View className="flex-row items-end justify-around">
        {state.routes.map((route, index) => {
          const isFocused = state.index === index
          const Icon = iconByRoute[route.name as keyof typeof iconByRoute] ?? House
          const color = isFocused ? "#192231" : "#9A9CA0"

          return (
            <Pressable
              key={route.key}
              accessibilityLabel={labels[index]}
              accessibilityRole="tab"
              accessibilityState={{ selected: isFocused }}
              className="min-w-[58px] items-center gap-1 rounded-2xl px-2 py-1 active:opacity-60"
              onPress={() => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                })

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params)
                }
              }}
              onLongPress={() => navigation.emit({ type: "tabLongPress", target: route.key })}
            >
              <Icon
                color={color}
                fill={isFocused ? color : "transparent"}
                size={19}
                strokeWidth={1.8}
              />
              <Text className="text-[9px] font-medium" style={{ color }}>
                {labels[index]}
              </Text>
            </Pressable>
          )
        })}
      </View>
    </View>
  )
}
