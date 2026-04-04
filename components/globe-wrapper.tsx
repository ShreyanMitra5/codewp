"use client"

import dynamic from "next/dynamic"

const SpinningGlobe = dynamic(
  () => import("@/components/spinning-globe").then((m) => m.SpinningGlobe),
  { ssr: false }
)

export function GlobeWrapper() {
  return <SpinningGlobe />
}
