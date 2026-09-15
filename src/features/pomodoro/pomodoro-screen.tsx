import * as ScreenOrientation from "expo-screen-orientation"
import { StatusBar } from "expo-status-bar"
import { Pause, Play, RotateCw, RotateCcw, Palette } from "lucide-react-native"
import { useEffect, useMemo, useState } from "react"
import { Modal, Pressable, Text, View, useWindowDimensions } from "react-native"
import { useTranslation } from "@/i18n/use-translation"
import { useGlobalStore, type PomodoroBackground } from "@/store/use-global-store"
import { themeTokens } from "@/theme/tokens"
import { HomeHeader } from "@/features/home/components/home-header"

const BACKGROUNDS: Record<PomodoroBackground, { base: string; wave: string; accent: string }> = {
  aurora: { base: "#FBF9F4", wave: "#E2EBD8", accent: "#CDE4EF" },
  mist: { base: "#F2F5F7", wave: "#DDE5EC", accent: "#C9D5E2" },
  linen: { base: "#F9F1E8", wave: "#EADBCB", accent: "#E7C3B1" },
}

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainder = seconds % 60
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`
}

export function PomodoroScreen() {
  const { t } = useTranslation()
  const theme = useGlobalStore((state) => state.theme)
  const orientation = useGlobalStore((state) => state.pomodoroOrientation)
  const background = useGlobalStore((state) => state.pomodoroBackground)
  const setOrientation = useGlobalStore((state) => state.setPomodoroOrientation)
  const setBackground = useGlobalStore((state) => state.setPomodoroBackground)
  const [remaining, setRemaining] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [isBackgroundModalVisible, setBackgroundModalVisible] = useState(false)
  const { width } = useWindowDimensions()
  const colors = themeTokens[theme]
  const palette = BACKGROUNDS[background]
  const isLandscape = orientation === "landscape" || width > 700

  useEffect(() => {
    if (!isRunning) return
    const timer = setInterval(() => {
      setRemaining((value) => {
        if (value <= 1) {
          setIsRunning(false)
          return 0
        }
        return value - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [isRunning])

  const lockOrientation = async () => {
    const next = isLandscape ? "portrait" : "landscape"
    await ScreenOrientation.lockAsync(
      next === "landscape"
        ? ScreenOrientation.OrientationLock.LANDSCAPE
        : ScreenOrientation.OrientationLock.PORTRAIT,
    )
    setOrientation(next)
  }

  const content = useMemo(
    () => (
      <View className={isLandscape ? "flex-1 flex-row items-center gap-8 px-8" : "flex-1"}>
        <View className={isLandscape ? "flex-1 items-center" : "items-center"}>
          <View className="mb-6 flex-row items-center rounded-full bg-white/70 px-4 py-2 dark:bg-[#1B2430]/80">
            <View className="mr-2 h-3 w-3 rounded-full bg-[#FF918A]" />
            <Text
              className="text-[12px] font-semibold tracking-widest"
              style={{ color: colors.onSurfaceVariant }}
            >
              {t("pomodoro.focusRhythm")}
            </Text>
          </View>
          <View className="w-full max-w-[680px] items-center rounded-[34px] bg-white/80 px-5 py-8 shadow-pillowy dark:bg-[#1B2430]/90">
            <View className="w-full flex-row items-center justify-between px-2">
              <Text
                className="text-[16px] font-semibold uppercase tracking-widest"
                style={{ color: colors.onSurfaceVariant }}
              >
                {t("pomodoro.focusTimer")}
              </Text>
              <Pressable
                className="rounded-full bg-[#F1EFEA] px-4 py-2 dark:bg-[#303B49]"
                onPress={() => setBackgroundModalVisible(true)}
              >
                <View className="flex-row items-center gap-2">
                  <Palette color={colors.onSurfaceVariant} size={15} />
                  <Text
                    className="text-[12px] font-semibold"
                    style={{ color: colors.onSurfaceVariant }}
                  >
                    {t("pomodoro.background")}
                  </Text>
                </View>
              </Pressable>
            </View>
            <Text
              className={
                isLandscape
                  ? "my-4 text-[86px] font-light tracking-tight"
                  : "my-8 text-[76px] font-light tracking-tight"
              }
              style={{ color: colors.onSurface }}
            >
              {formatDuration(remaining)}
            </Text>
            <View className="h-2 w-full overflow-hidden rounded-full bg-[#E7E5E0] dark:bg-[#303B49]">
              <View
                className="h-full rounded-full bg-[#C6D9C2]"
                style={{ width: `${((25 * 60 - remaining) / (25 * 60)) * 100}%` }}
              />
            </View>
            <View className="mt-8 flex-row items-center gap-3">
              <Pressable
                className="h-14 flex-row items-center justify-center rounded-full bg-[#172233] px-8 active:opacity-70"
                onPress={() => setIsRunning((value) => !value)}
              >
                {isRunning ? (
                  <Pause color="#FFFFFF" size={20} />
                ) : (
                  <Play color="#FFFFFF" size={20} />
                )}
                <Text className="ml-2 text-[15px] font-semibold" style={{ color: "#FFFFFF" }}>
                  {isRunning ? t("pomodoro.pause") : t("pomodoro.start")}
                </Text>
              </Pressable>
              <Pressable
                accessibilityLabel={t("pomodoro.reset")}
                className="h-14 w-14 items-center justify-center rounded-full bg-white shadow-pillowy dark:bg-[#25303D]"
                onPress={() => {
                  setIsRunning(false)
                  setRemaining(25 * 60)
                }}
              >
                <RotateCcw color={colors.onSurfaceVariant} size={20} />
              </Pressable>
            </View>
          </View>
        </View>
        {!isLandscape && (
          <View className="mt-8 px-1">
            <Text className="mb-3 text-[22px] font-semibold" style={{ color: colors.onSurface }}>
              {t("pomodoro.presets")}
            </Text>
            {["rest", "coffee", "meditate"].map((key) => (
              <View
                key={key}
                className="mb-3 rounded-[22px] bg-white/85 px-4 py-4 dark:bg-[#1B2430]"
              >
                <Text className="text-[15px] font-semibold" style={{ color: colors.onSurface }}>
                  {t(
                    `pomodoro.${key}` as "pomodoro.rest" | "pomodoro.coffee" | "pomodoro.meditate",
                  )}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
    ),
    [colors, isLandscape, isRunning, remaining, t],
  )

  return (
    <View
      className="flex-1 overflow-hidden px-5"
      style={{ backgroundColor: theme === "dark" ? colors.background : palette.base }}
    >
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <View
        className="absolute -right-20 top-20 h-72 w-72 rounded-full opacity-60"
        style={{ backgroundColor: palette.accent }}
      />
      <View
        className="absolute -left-24 bottom-20 h-80 w-80 rounded-full opacity-50"
        style={{ backgroundColor: palette.wave }}
      />
      <HomeHeader
        accessory={
          <Pressable
            accessibilityLabel={t("pomodoro.rotate")}
            className="h-10 w-10 items-center justify-center rounded-full bg-white shadow-pillowy dark:bg-[#1B2430]"
            onPress={lockOrientation}
          >
            <RotateCw color={theme === "dark" ? "#F2F1EC" : "#192231"} size={17} />
          </Pressable>
        }
      />
      <View className="flex-1">{content}</View>
      <Modal
        transparent
        visible={isBackgroundModalVisible}
        animationType="slide"
        onRequestClose={() => setBackgroundModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/30">
          <View
            className="rounded-t-[30px] px-5 pb-8 pt-6"
            style={{ backgroundColor: colors.surface }}
          >
            <Text className="mb-4 text-[20px] font-semibold" style={{ color: colors.onSurface }}>
              {t("pomodoro.chooseBackground")}
            </Text>
            {(Object.keys(BACKGROUNDS) as PomodoroBackground[]).map((item) => (
              <Pressable
                key={item}
                className="mb-2 flex-row items-center rounded-2xl px-4 py-4"
                style={{
                  backgroundColor: item === background ? colors.waveGreen : colors.surfaceContainer,
                }}
                onPress={() => {
                  setBackground(item)
                  setBackgroundModalVisible(false)
                }}
              >
                <View
                  className="mr-3 h-8 w-8 rounded-full"
                  style={{ backgroundColor: BACKGROUNDS[item].accent }}
                />
                <Text className="text-[15px] font-semibold" style={{ color: colors.onSurface }}>
                  {t(
                    `pomodoro.backgrounds.${item}` as
                      | "pomodoro.backgrounds.aurora"
                      | "pomodoro.backgrounds.mist"
                      | "pomodoro.backgrounds.linen",
                  )}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  )
}
