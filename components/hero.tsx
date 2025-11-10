"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = 600

    // Particle system
    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 2 + 1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(112, 179, 255, 0.1)"

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillRect(p.x, p.y, p.size, p.size)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-8 sm:pt-16 md:pt-32">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10 text-center max-w-4xl px-4 animate-fadeInUp flex flex-col items-center">
        <div className="mb-2 sm:mb-4 md:mb-8 w-20 h-32 sm:w-28 sm:h-44 md:w-32 md:h-52 flex items-center justify-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 120 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Head */}
            <circle cx="60" cy="50" r="25" fill="#FDB4B4" stroke="currentColor" strokeWidth="2" />
            {/* Hair */}
            <path d="M 35 40 Q 35 15 60 15 Q 85 15 85 40" fill="#2D2D2D" stroke="currentColor" strokeWidth="2" />
            {/* Eyes */}
            <circle cx="50" cy="45" r="3" fill="#000" />
            <circle cx="70" cy="45" r="3" fill="#000" />
            {/* Smile */}
            <path d="M 50 55 Q 60 62 70 55" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Body */}
            <rect x="40" y="80" width="40" height="50" rx="5" fill="#70B3FF" stroke="currentColor" strokeWidth="2" />
            {/* Arms */}
            <rect x="20" y="90" width="20" height="12" rx="6" fill="#FDB4B4" stroke="currentColor" strokeWidth="2" />
            <rect x="80" y="90" width="20" height="12" rx="6" fill="#FDB4B4" stroke="currentColor" strokeWidth="2" />
            {/* Legs */}
            <rect x="45" y="135" width="10" height="35" rx="5" fill="#333" stroke="currentColor" strokeWidth="2" />
            <rect x="65" y="135" width="10" height="35" rx="5" fill="#333" stroke="currentColor" strokeWidth="2" />
            {/* Shoes */}
            <ellipse cx="50" cy="175" rx="7" ry="5" fill="#666" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="70" cy="175" rx="7" ry="5" fill="#666" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Rajveer Sharma
        </h1>

        <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4">
          Software Development Engineer & Competitive Programmer
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="px-3 sm:px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-xs sm:text-sm text-primary cursor-pointer hover:bg-primary/20 active:bg-primary/30 transition-colors">
            Full-Stack Developer
          </span>
          <span className="px-3 sm:px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-xs sm:text-sm text-accent cursor-pointer hover:bg-accent/20 active:bg-accent/30 transition-colors">
            AI & ML
          </span>
          <span className="px-3 sm:px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-xs sm:text-sm text-primary cursor-pointer hover:bg-primary/20 active:bg-primary/30 transition-colors">
            DSA Expert
          </span>
        </div>

        <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
          Top 0.35% globally in competitive programming • Built AI-powered systems • 3000+ DSA problems solved
        </p>

        <div className="flex gap-2 sm:gap-4 justify-center flex-wrap">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 active:bg-primary/80 transition-all hover:shadow-lg hover:shadow-primary/50 cursor-pointer"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bg-transparent border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 active:bg-primary/20 transition-all cursor-pointer"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}
