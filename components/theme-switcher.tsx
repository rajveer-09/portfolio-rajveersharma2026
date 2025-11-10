"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

type Theme = "dark-tech" | "light-pro"

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark-tech")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = (localStorage.getItem("portfolio-theme") as Theme) || "dark-tech"
    setTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (newTheme: Theme) => {
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("portfolio-theme", newTheme)
  }

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  if (!mounted) return null

  const themes: { id: Theme; label: string; icon: React.ReactNode }[] = [
    { id: "dark-tech", label: "Dark Tech", icon: <Moon className="w-4 h-4" /> },
    { id: "light-pro", label: "Light Pro", icon: <Sun className="w-4 h-4" /> },
  ]

  return (
    <div className="fixed bottom-8 right-8 z-40 flex gap-2">
      <div className="flex gap-2 bg-card border border-border rounded-lg p-2 shadow-lg backdrop-blur-md">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => handleThemeChange(t.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all text-sm cursor-pointer ${
              theme === t.id
                ? "bg-primary text-primary-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
            }`}
            title={t.label}
          >
            {t.icon}
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
