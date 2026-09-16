import { Link } from "expo-router"
import { Text, View } from "react-native"
import { useTranslation } from "@/i18n/use-translation"

export default function NotFoundScreen() {
  const { t } = useTranslation()
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text>{t("notFound")}</Text>
      <Link href="/">{t("goHome")}</Link>
    </View>
  )
}
