import type { ConfigContext, ExpoConfig } from "expo/config"

type AppVariant = "development" | "staging" | "production"

const variants: Record<
  AppVariant,
  {
    name: string
    scheme: string
    iosBundleIdentifier: string
    androidPackage: string
  }
> = {
  development: {
    name: "KlockaClock Dev",
    scheme: "klockaclock-dev",
    iosBundleIdentifier: "com.quindarts.klockaclock.dev",
    androidPackage: "com.quindarts.klockaclock.dev",
  },
  staging: {
    name: "KlockaClock Staging",
    scheme: "klockaclock-staging",
    iosBundleIdentifier: "com.quindarts.klockaclock.staging",
    androidPackage: "com.quindarts.klockaclock.staging",
  },
  production: {
    name: "KlockaClock",
    scheme: "klockaclock",
    iosBundleIdentifier: "com.quindarts.klockaclock",
    androidPackage: "com.quindarts.klockaclock",
  },
}

function getVariant(): AppVariant {
  const value = process.env.APP_VARIANT

  if (value === "development" || value === "staging" || value === "production") {
    return value
  }

  return "development"
}

export default ({ config }: ConfigContext): ExpoConfig => {
  const variant = getVariant()
  const current = variants[variant]

  return {
    ...config,

    name: current.name,
    slug: config.slug ?? "klocka-rn-app",
    scheme: current.scheme,

    ios: {
      ...config.ios,
      bundleIdentifier: current.iosBundleIdentifier,
    },

    android: {
      ...config.android,
      package: current.androidPackage,
    },

    extra: {
      ...config.extra,
      appVariant: variant,
    },
  }
}
