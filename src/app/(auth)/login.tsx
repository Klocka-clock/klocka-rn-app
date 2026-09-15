import { Button, ButtonText } from "@/components/ui/button"
import { Input, InputField } from "@/components/ui/input"
import { useTranslation } from "@/i18n/use-translation"
import { useGlobalStore } from "@/store/use-global-store"
import { themeTokens } from "@/theme/tokens"
import { useRouter } from "expo-router"
import { Clock3 } from "lucide-react-native"
import { useState } from "react"
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native"

export default function LoginScreen() {
  const router = useRouter()
  const { t } = useTranslation()
  const theme = useGlobalStore((state) => state.theme)
  const colors = themeTokens[theme]
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ScrollView
        contentContainerClassName="flex-grow justify-center"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center px-6 py-10">
          <View className="items-center">
            <View className="h-24 w-24 items-center justify-center rounded-[32px] bg-[#192231] shadow-floating">
              <Clock3 color="#E69A58" size={42} strokeWidth={1.5} />
            </View>
            <Text
              className="mt-6 text-center text-[32px] font-normal"
              style={{ color: colors.onSurface }}
            >
              {t("screens.welcome")}
            </Text>
            <Text
              className="mt-2 max-w-[290px] text-center text-[14px] leading-6"
              style={{ color: colors.onSurfaceVariant }}
            >
              {t("screens.signInDescription")}
            </Text>
          </View>

          <View className="mt-8 rounded-[32px] bg-white p-6 shadow-floating dark:bg-[#1B2430]">
            <View className="gap-5">
              <View className="gap-2">
                <Text className="text-[13px] font-semibold" style={{ color: colors.onSurface }}>
                  {t("screens.email")}
                </Text>
                <Input>
                  <InputField
                    autoCapitalize="none"
                    autoComplete="email"
                    keyboardType="email-address"
                    placeholder={t("screens.emailPlaceholder")}
                    value={emailAddress}
                    onChangeText={setEmailAddress}
                  />
                </Input>
              </View>

              <View className="gap-2">
                <Text className="text-[13px] font-semibold" style={{ color: colors.onSurface }}>
                  {t("screens.password")}
                </Text>
                <Input>
                  <InputField
                    placeholder={t("screens.passwordPlaceholder")}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                  />
                </Input>
              </View>

              <Button className="mt-2 rounded-full" onPress={() => router.replace("/(tabs)")}>
                <ButtonText>{t("screens.signIn")}</ButtonText>
              </Button>

              <Button action="secondary" className="rounded-full" variant="outline">
                <ButtonText>{t("screens.continueGoogle")}</ButtonText>
              </Button>
            </View>
          </View>

          <View className="mt-6 flex-row items-center justify-center gap-1">
            <Text className="text-[13px]" style={{ color: colors.onSurfaceVariant }}>
              {t("screens.newToKlocka")}
            </Text>
            <Button action="primary" className="px-1" size="sm" variant="link">
              <ButtonText>{t("screens.createAccount")}</ButtonText>
            </Button>
          </View>
          <Text
            className="mt-5 text-center text-[11px] leading-4"
            style={{ color: colors.outline }}
          >
            {t("screens.terms")}
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
