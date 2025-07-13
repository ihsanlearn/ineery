'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "dark"
    setIsDark(stored === "dark")
    document.documentElement.classList.toggle("dark", stored === "dark")
  }, [])

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark"
    setIsDark(!isDark)
    localStorage.setItem("theme", next)
    document.documentElement.classList.toggle("dark", next === "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="bg-secondary text-[var(--text-on-dark)] px-4 py-2 rounded"
    >
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  )
}
