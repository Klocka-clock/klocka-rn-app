import { Slot } from "expo-router"
import { View } from "react-native"

function AuthLayout() {
  return (
    <View className="w-full flex-1 items-center justify-center bg-red-500 ">
      <Slot />
    </View>
  )
}

export default AuthLayout
