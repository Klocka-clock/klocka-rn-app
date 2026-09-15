import { Bed, Coffee, Egg, Flower2 } from "lucide-react-native"

export type RoutineLabel = "pomodoro.nap" | "pomodoro.fika" | "pomodoro.egg" | "pomodoro.meditation"

export type Routine = { icon: typeof Bed; label: RoutineLabel; duration: number }

export const routines: Routine[] = [
  { icon: Bed, label: "pomodoro.nap", duration: 20 * 60 },
  { icon: Coffee, label: "pomodoro.fika", duration: 4 * 60 },
  { icon: Egg, label: "pomodoro.egg", duration: 6 * 60 + 30 },
  { icon: Flower2, label: "pomodoro.meditation", duration: 12 * 60 },
]
