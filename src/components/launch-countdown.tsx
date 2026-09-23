import * as React from "react"

import { Card, CardContent, CardDescription } from "@/components/ui/card"

// Same launch moment as the countdown on Blizzard's WoW: Forever page (3 PM PT).
const LAUNCH = Date.parse("2026-11-04T23:00:00Z")

export function LaunchCountdown() {
  // null until mounted, so the static build never bakes in a stale time.
  const [now, setNow] = React.useState<number | null>(null)

  React.useEffect(() => {
    const tick = () => setNow(Date.now())
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const remaining = now === null ? null : Math.max(0, LAUNCH - now)

  if (remaining === 0) {
    return <p className="font-heading text-3xl">WoW: Forever is live. See you in Azeroth!</p>
  }

  const units = [
    { label: "Days", value: remaining === null ? null : Math.floor(remaining / 86_400_000) },
    { label: "Hours", value: remaining === null ? null : Math.floor(remaining / 3_600_000) % 24 },
    { label: "Minutes", value: remaining === null ? null : Math.floor(remaining / 60_000) % 60 },
    { label: "Seconds", value: remaining === null ? null : Math.floor(remaining / 1000) % 60 },
  ]

  return (
    <div role="timer" aria-label="Time until WoW: Forever launches" className="grid w-full grid-cols-4 gap-2 sm:gap-4">
      {units.map((unit) => (
        <Card key={unit.label} className="border border-gold/40 bg-card/70 py-4 sm:py-6">
          <CardContent className="flex flex-col items-center gap-1 px-1">
            <span className="text-4xl font-light tabular-nums sm:text-7xl">
              {unit.value === null ? "--" : String(unit.value).padStart(2, "0")}
            </span>
            <CardDescription className="text-xs uppercase sm:text-sm">{unit.label}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
