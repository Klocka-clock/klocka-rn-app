import { Flower2, Globe2, Settings } from "lucide-react-native"
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { Pressable, Text, View } from "react-native"
import { useTranslation } from "@/i18n/use-translation"
import { useGlobalStore } from "@/store/use-global-store"
import { bottomTabRoutes } from "./home-bottom-tabs.utils"

const iconByRoute = {
  index: Globe2,
  scanner: Flower2,
  settings: Settings,
} as const

export function HomeBottomTabs({ state, descriptors, navigation }: BottomTabBarProps) {
  const { t } = useTranslation()
  const theme = useGlobalStore((state) => state.theme)
  const labels = [
    t("navigation:world"),
    t("navigation:pomodoro"),
    t("navigation:timer"),
    t("navigation:alarm"),
    t("navigation:recent"),
  ]

  return (
    <View className="border-t border-[#EAE8E3] bg-[#FBF9F4] px-2 pb-2 pt-2 dark:border-[#303B49] dark:bg-[#0E141D]">
      <View className="flex-row items-end justify-around">
        {state.routes
          .filter((route) =>
            bottomTabRoutes.includes(route.name as (typeof bottomTabRoutes)[number]),
          )
          .map((route) => {
            const routeIndex = state.routes.findIndex((item) => item.key === route.key)
            const isFocused = state.index === routeIndex
            const Icon = iconByRoute[route.name as keyof typeof iconByRoute] ?? Globe2
            const color = isFocused
              ? theme === "dark"
                ? "#BEC7DB"
                : "#192231"
              : theme === "dark"
                ? "#89909C"
                : "#9A9CA0"

            return (
              <Pressable
                key={route.key}
                accessibilityLabel={labels[route.name as keyof typeof labels]}
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
                  {labels[route.name as keyof typeof labels]}
                </Text>
              </Pressable>
            )
          })}
      </View>
    </View>
  )
}
