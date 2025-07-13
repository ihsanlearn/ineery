'use client'

import { useEffect } from "react"

export default function ThemeInit() {
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark"
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [])

  return null
}
