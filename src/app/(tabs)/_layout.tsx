import { HomeBottomTabs } from "@/features/home/components/home-bottom-tabs"
import { Tabs } from "expo-router"
import { useTranslation } from "@/i18n/use-translation"

export default function TabsLayout() {
  const { t } = useTranslation()

  return (
    <Tabs tabBar={(props) => <HomeBottomTabs {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: t("navigation:world"),
        }}
      />
      <Tabs.Screen
        name="scanner"
        options={{
          title: t("navigation:pomodoro"),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t("navigation:timer"),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t("navigation:alarm"),
        }}
      />
      <Tabs.Screen
        name="signal-history"
        options={{
          title: t("navigation:recent"),
        }}
      />
    </Tabs>
  )
}
