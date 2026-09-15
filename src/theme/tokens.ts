import type { ViewStyle } from "react-native"

export type ThemeName = "light" | "dark"

export type ThemeTokens = {
  background: string
  surface: string
  surfaceDim: string
  surfaceContainer: string
  surfaceContainerHigh: string
  surfaceContainerHighest: string
  onSurface: string
  onSurfaceVariant: string
  primary: string
  onPrimary: string
  secondary: string
  tertiary: string
  outline: string
  outlineVariant: string
  waveBlue: string
  waveGreen: string
  abyssalFjord: string
}

const lightTheme: ThemeTokens = {
  background: "#FBF9F4",
  surface: "#FBF9F4",
  surfaceDim: "#DBDAD5",
  surfaceContainer: "#F0EEE9",
  surfaceContainerHigh: "#EAE8E3",
  surfaceContainerHighest: "#E4E2DD",
  onSurface: "#1B1C19",
  onSurfaceVariant: "#45474C",
  primary: "#192231",
  onPrimary: "#FFFFFF",
  secondary: "#A73832",
  tertiary: "#E69A58",
  outline: "#75777D",
  outlineVariant: "#C5C6CC",
  waveBlue: "#EBF2FA",
  waveGreen: "#E2EBD8",
  abyssalFjord: "#0E141D",
}

const darkTheme: ThemeTokens = {
  ...lightTheme,
  background: "#0E141D",
  surface: "#151D29",
  surfaceDim: "#242C37",
  surfaceContainer: "#1B2430",
  surfaceContainerHigh: "#25303D",
  surfaceContainerHighest: "#303B49",
  onSurface: "#F2F1EC",
  onSurfaceVariant: "#C5C6CC",
  primary: "#BEC7DB",
  onPrimary: "#131C2B",
  outline: "#89909C",
  outlineVariant: "#454F5D",
  waveBlue: "#26384D",
  waveGreen: "#344235",
}

export const themeTokens: Record<ThemeName, ThemeTokens> = {
  light: lightTheme,
  dark: darkTheme,
}

export const nordicTokens = {
  colors: {
    midnightNavy: "#192231",
    linen: "#F7F5F0",
    snöWhite: "#FFFFFF",
    dimmaBlue: "#EBF2FA",
    lavGreen: "#E2EBD8",
    lingonberry: "#D95D54",
    gryningAmber: "#E69A58",
    abyssalFjord: "#0E141D",
  },
  typography: {
    fontFamily: "Plus Jakarta Sans",
    displayHeroMobile: {
      fontSize: 64,
      fontWeight: "300" as const,
      lineHeight: 68,
      letterSpacing: -1.92,
    },
    headlineMobile: {
      fontSize: 32,
      fontWeight: "400" as const,
      lineHeight: 38,
      letterSpacing: -0.64,
    },
    body: {
      fontSize: 15,
      fontWeight: "400" as const,
      lineHeight: 22,
    },
    label: {
      fontSize: 12,
      fontWeight: "500" as const,
      lineHeight: 16,
      letterSpacing: 0.72,
    },
  },
  spacing: {
    gutterMobile: 16,
    gutterDesktop: 32,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  radii: {
    sm: 8,
    DEFAULT: 16,
    md: 24,
    card: 32,
    lg: 32,
    xl: 48,
    pill: 9999,
  },
  shadows: {
    pillowy: {
      shadowColor: "#192231",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.04,
      shadowRadius: 12,
      elevation: 2,
    } satisfies ViewStyle,
    floating: {
      shadowColor: "#192231",
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.06,
      shadowRadius: 32,
      elevation: 4,
    } satisfies ViewStyle,
    pressed: {
      shadowColor: "#192231",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.08,
      shadowRadius: 6,
      elevation: 1,
    } satisfies ViewStyle,
  },
} as const
