import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider"
import { Redirect, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import "../global.css"
import { QueryProvider } from "@/provider/query-provider"
import { POSTHOG_API_KEY, POSTHOG_HOST } from "@/config/analytics"
import { PostHogProvider } from "posthog-react-native"

if (__DEV__) {
  void import("@/lib/reactotron")
}

function RootLayoutNav() {
  // const { isSignedIn, isLoaded } = useAuth()
  // if (!isLoaded) return null
  // if (!isSignedIn) {
  //   return <Redirect href="/(auth)/login" />
  // }
  return <Redirect href="/(tabs)" />
}

export default function RootLayout() {
  const app = (
    <GluestackUIProvider mode="light">
      {/* <ClerkProvider
        tokenCache={tokenCache}
        publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
      > */}
      <QueryProvider>
        <Stack screenOptions={{ headerShown: false }}>
          {/* layout chính */}
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </QueryProvider>

      <RootLayoutNav />
      <StatusBar style="auto" />
      {/* </ClerkProvider> */}
    </GluestackUIProvider>
  )

  if (!POSTHOG_API_KEY) return app

  return (
    <PostHogProvider apiKey={POSTHOG_API_KEY} options={{ host: POSTHOG_HOST }} autocapture={false}>
      {app}
    </PostHogProvider>
  )
}
