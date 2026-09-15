export type DurationUnit = "hours" | "minutes" | "seconds"

const secondsPerUnit: Record<DurationUnit, number> = {
  hours: 60 * 60,
  minutes: 60,
  seconds: 1,
}

export function formatDuration(totalSeconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds))
  const hours = Math.floor(safeSeconds / 3600)
  const minutes = Math.floor((safeSeconds % 3600) / 60)
  const seconds = safeSeconds % 60

  return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":")
}

export function adjustDuration(totalSeconds: number, unit: DurationUnit, amount: number): number {
  return Math.max(0, totalSeconds + secondsPerUnit[unit] * amount)
}

export function tickDuration(totalSeconds: number): number {
  return Math.max(0, Math.floor(totalSeconds) - 1)
}
