import { useTranslation } from "@/i18n/use-translation"
import { Link } from "expo-router"
import { Text, View } from "react-native"

export default function ModalScreen() {
  const { t } = useTranslation()
  return (
    <View>
      <Text>{t("modalTitle")}</Text>
      <Link href="/" dismissTo>
        <Text>{t("goHome")}</Text>
      </Link>
    </View>
  )
}
