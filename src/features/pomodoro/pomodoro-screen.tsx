import { useTranslation } from "@/i18n/use-translation"
import { useGlobalStore } from "@/store/use-global-store"
import { themeTokens } from "@/theme/tokens"
import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { ScrollView, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { routines, type Routine } from "./pomodoro.data"
import { PomodoroHeader } from "./components/organisms/pomodoro-header"
import { RoutinesModal } from "./components/organisms/routines-modal"
import { TimerActions } from "./components/organisms/timer-actions"
import { TimerCard } from "./components/organisms/timer-card"
import { adjustDuration, tickDuration, type DurationUnit } from "./pomodoro.utils"

export function PomodoroScreen() {
  const insets = useSafeAreaInsets()
  const { t } = useTranslation()
  const theme = useGlobalStore((state) => state.theme)
  const colors = themeTokens[theme]
  const [duration, setDuration] = useState(15 * 60)
  const [remaining, setRemaining] = useState(15 * 60)
  const [running, setRunning] = useState(false)
  const [showRoutines, setShowRoutines] = useState(false)

  useEffect(() => {
    if (!running || remaining <= 0) {
      if (remaining <= 0) setRunning(false)
      return
    }

    const interval = setInterval(() => setRemaining((value) => tickDuration(value)), 1000)
    return () => clearInterval(interval)
  }, [remaining, running])

  const updateDuration = (unit: DurationUnit, amount: number) => {
    setDuration((value) => {
      const next = adjustDuration(value, unit, amount)
      setRemaining(next)
      setRunning(false)
      return next
    })
  }

  const selectRoutine = (routine: Routine) => {
    setDuration(routine.duration)
    setRemaining(routine.duration)
    setRunning(false)
  }

  return (
    <View className="flex-1" style={{ backgroundColor: colors.background }}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: insets.bottom + 104 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-7" style={{ paddingTop: Math.max(insets.top, 20) }}>
          <PomodoroHeader />
          <TimerCard
            colors={colors}
            theme={theme}
            duration={duration}
            labels={{
              duration: t("pomodoro:duration"),
              ready: t("pomodoro:ready"),
              hours: t("pomodoro:hours"),
              minutes: t("pomodoro:minutes"),
              seconds: t("pomodoro:seconds"),
            }}
            remaining={remaining}
            onAdjust={updateDuration}
          />
          <TimerActions
            colors={colors}
            pauseLabel={t("pomodoro:pause")}
            resetLabel={t("pomodoro:reset")}
            routinesLabel={t("pomodoro:routines")}
            running={running}
            startLabel={t("pomodoro:start")}
            onReset={() => {
              setRemaining(duration)
              setRunning(false)
            }}
            onRoutines={() => setShowRoutines(true)}
            onToggle={() => setRunning((value) => !value)}
          />
        </View>
      </ScrollView>
      <RoutinesModal
        colors={colors}
        closeLabel={t("pomodoro:closeRoutines")}
        insetsBottom={insets.bottom}
        getLabel={t}
        routines={routines}
        title={t("pomodoro:routines")}
        visible={showRoutines}
        onClose={() => setShowRoutines(false)}
        onSelect={selectRoutine}
      />
    </View>
  )
}
