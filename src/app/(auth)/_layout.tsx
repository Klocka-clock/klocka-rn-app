import { Slot } from "expo-router"
import { View } from "react-native"
import { useGlobalStore } from "@/store/use-global-store"
import { themeTokens } from "@/theme/tokens"

function AuthLayout() {
  const theme = useGlobalStore((state) => state.theme)

  return (
    <View
      className="w-full flex-1 items-center justify-center"
      style={{ backgroundColor: themeTokens[theme].background }}
    >
      <Slot />
    </View>
  )
}

export default AuthLayout
