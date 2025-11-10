"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Achievements from "@/components/achievements"
import CodingProfiles from "@/components/coding-profiles"
import Contact from "@/components/contact"
import ThemeSwitcher from "@/components/theme-switcher"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "experience",
        "projects",
        "certifications",
        "achievements",
        "coding-profiles",
        "contact",
      ]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar activeSection={activeSection} />
      <ThemeSwitcher />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <CodingProfiles />
        <Contact />
      </main>
    </div>
  )
}
