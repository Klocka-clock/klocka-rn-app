import { nordicTokens } from "@/theme/tokens"
import { View } from "react-native"

export function Waveform({ color }: { color: string }) {
  return (
    <View className="h-3 flex-row items-center justify-center gap-1 opacity-70">
      {Array.from({ length: 36 }, (_, index) => (
        <View
          key={index}
          className="w-[3px] rounded-full"
          style={{
            backgroundColor: index % 3 === 0 ? nordicTokens.colors.lavGreen : color,
            height: index % 4 === 0 ? 4 : 2,
          }}
        />
      ))}
    </View>
  )
}
