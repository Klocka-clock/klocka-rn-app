import { useSignIn } from "@clerk/clerk-expo"
import { useRouter } from "expo-router"
import { useState } from "react"
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from "react-native"
import { Button, ButtonText } from "@/components/ui/button"
import { Input, InputField } from "@/components/ui/input"

function LoginScreen() {
  const router = useRouter()
  const { signIn, isLoaded, setActive } = useSignIn()
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const onSignInPress = async () => {
    // if (!isLoaded || !setActive) return
    // setIsLoading(true)
    // try {
    //   const signInAttempt = await signIn.create({
    //     identifier: emailAddress,
    //     password,
    //   })
    //   if (signInAttempt.status === "complete") {
    //     await setActive({
    //       session: signInAttempt.createdSessionId,
    //     })
        router.replace("/(tabs)")
    //   } else {
    //     console.error(JSON.stringify(signInAttempt, null, 2))
    //   }
    // } catch (err: any) {
    //   console.error(JSON.stringify(err, null, 2))
    // } finally {
    //   setIsLoading(false)
    // }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ScrollView
        contentContainerClassName="flex-grow justify-center"
        showsVerticalScrollIndicator={false}
        className="bg-background-50 dark:bg-background-950"
      >
        <View className="flex-1 min-h-screen justify-center p-6">
          <View className="gap-8 w-full">
            <View className="items-center gap-4">
              <View className="w-24 h-24 bg-primary-500 rounded-full items-center justify-center shadow-lg">
                <Text className="text-6xl">📡</Text>
              </View>
              <View className="gap-2">
                <Text className="text-4xl font-bold text-center text-typography-900 dark:text-typography-0">
                  Welcome Back
                </Text>
                <Text className="text-xl font-bold text-center text-primary-600">
                  Beacon DevTools
                </Text>
              </View>
              <Text className="text-base text-center text-typography-600 dark:text-typography-400 max-w-md">
                Sign in to access your indoor positioning monitoring platform
              </Text>
            </View>

            {/* Login Form Card */}
            <View className="rounded-3xl bg-background-0 dark:bg-background-900 shadow-xl p-6 border border-outline-200 dark:border-outline-800">
              <View className="gap-6">
                {/* Email Input */}
                <View className="gap-2">
                  <Text className="text-sm font-semibold text-typography-700 dark:text-typography-300">
                    Email Address
                  </Text>
                  <Input>
                    <InputField
                      placeholder="Enter your email"
                      value={emailAddress}
                      onChangeText={setEmailAddress}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoComplete="email"
                    />
                  </Input>
                </View>

                {/* Password Input */}
                <View className="gap-2">
                  <Text className="text-sm font-semibold text-typography-700 dark:text-typography-300">
                    Password
                  </Text>
                  <Input>
                    <InputField
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                    />
                  </Input>
                </View>

                {/* Sign In Button */}
                <Button size="lg" onPress={onSignInPress} isDisabled={isLoading} className="mt-4">
                  {isLoading ? (
                    <View className="flex-row items-center justify-center gap-2">
                      <ActivityIndicator color="white" size="small" />
                      <ButtonText>Signing in...</ButtonText>
                    </View>
                  ) : (
                    <ButtonText>Sign In</ButtonText>
                  )}
                </Button>

                {/* Divider */}
                <View className="flex-row items-center gap-3 my-2">
                  <View className="flex-1 h-px bg-outline-200 dark:bg-outline-800" />
                  <Text className="text-xs text-typography-500 px-2">OR</Text>
                  <View className="flex-1 h-px bg-outline-200 dark:bg-outline-800" />
                </View>

                {/* Google Sign In */}
                <Button variant="outline" action="secondary" size="lg">
                  <ButtonText>Continue with Google</ButtonText>
                </Button>
              </View>
            </View>

            {/* Footer */}
            <View className="flex-row items-center justify-center gap-2">
              <Text className="text-sm text-typography-500">New to Beacon DevTools?</Text>
              <Button variant="link" action="primary" size="sm">
                <ButtonText>Create an account</ButtonText>
              </Button>
            </View>

            <Text className="text-center text-xs text-typography-400 px-8">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen
