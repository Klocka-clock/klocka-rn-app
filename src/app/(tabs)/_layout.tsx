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
          title: t("tabs.world"),
        }}
      />
      <Tabs.Screen
        name="scanner"
        options={{
          title: t("tabs.pomodoro"),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t("tabs.setting"),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="signal-history"
        options={{
          href: null,
        }}
      />
    </Tabs>
  )
}
