import { Text } from "react-native"

export function LocalizedText({
  value,
  className = "",
  color,
}: {
  value: string
  className?: string
  color?: string
}) {
  return (
    <Text className={className} style={color ? { color } : undefined}>
      {value}
    </Text>
  )
}
