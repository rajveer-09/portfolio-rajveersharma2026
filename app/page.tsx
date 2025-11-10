"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
<<<<<<< HEAD
import Achievements from "@/components/achievements"
import Certifications from "@/components/certifications"
=======
import Certifications from "@/components/certifications"
import Achievements from "@/components/achievements"
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
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
<<<<<<< HEAD
        "achievements",
        "certifications",
=======
        "certifications",
        "achievements",
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
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
<<<<<<< HEAD
    <div className="flex flex-col min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="animated-bg-element animated-bg-1"></div>
        <div className="animated-bg-element animated-bg-2"></div>
        <div className="animated-bg-element animated-bg-3"></div>
      </div>

      <Navbar activeSection={activeSection} />
      <ThemeSwitcher />
      <main className="flex-1 relative z-10">
=======
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar activeSection={activeSection} />
      <ThemeSwitcher />
      <main className="flex-1">
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
        <Hero />
        <About />
        <Experience />
        <Projects />
<<<<<<< HEAD
        <Achievements />
        <Certifications />
=======
        <Certifications />
        <Achievements />
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
        <CodingProfiles />
        <Contact />
      </main>
    </div>
  )
}
