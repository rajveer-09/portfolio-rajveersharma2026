"use client"

import { useState } from "react"

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
<<<<<<< HEAD
    { id: "achievements", label: "Achievements" },
    { id: "certifications", label: "Certifications" },
=======
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
    { id: "coding-profiles", label: "Profiles" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("about")}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              RS
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeSection === item.id
                    ? "bg-primary/20 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted/20 rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <div className={`h-0.5 w-6 bg-foreground transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`h-0.5 w-6 bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`} />
              <div className={`h-0.5 w-6 bg-foreground transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2 rounded-md transition-all ${
                  activeSection === item.id
                    ? "bg-primary/20 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
