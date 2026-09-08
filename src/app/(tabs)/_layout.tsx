import {  Tabs } from "expo-router"
import { HistoryIcon, Home, Scan, Settings, UserCircle2 } from "lucide-react-native"


export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="scanner"
        options={{
          title: "Scanner",
          tabBarIcon: ({ color }) => <Scan size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => <Settings size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <UserCircle2 size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="signal-history"
        options={{
          title: "Signal History",
          tabBarIcon: ({ color }) => <HistoryIcon size={28} color={color} />,
        }}
      />
    </Tabs>
  )
}
