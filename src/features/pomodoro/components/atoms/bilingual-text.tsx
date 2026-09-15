import { Text, View } from "react-native"

export function BilingualText({
  value,
  className = "",
  color,
}: {
  value: string
  className?: string
  color?: string
}) {
  const [primary, secondary = ""] = value.split("\n")
  const textStyle = color ? { color } : undefined

  return (
    <View className={className}>
      <Text className="text-center" style={textStyle}>
        {primary}
      </Text>
      {secondary ? (
        <Text className="mt-0.5 text-center text-[11px] opacity-65" style={textStyle}>
          {secondary}
        </Text>
      ) : null}
    </View>
  )
}
