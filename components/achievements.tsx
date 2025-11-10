"use client"

import type React from "react"

import { ExternalLink } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      title: "Global Rank 106",
      subtitle: "CodeChef",
      description: "Competitive programming excellence with 3000+ problems solved",
      stat: "#106",
      link: "https://www.codechef.com/users/rajveer_9",
    },
    {
      title: "Global Rank 482",
      subtitle: "LeetCode",
      description: "1000+ problems solved with consistent practice",
      stat: "#482",
      link: "https://leetcode.com/u/rajveer-09/",
    },
    {
      title: "Shastra Programming Contest",
      subtitle: "IIT Madras",
      description: "Finalist among 70,000+ participants globally",
      stat: "Finalist",
      link: "https://drive.google.com/file/d/1OLILY-Bb9NC40jwp4eYDxt21oYjlgjjK/view?usp=sharing",
    },
    {
      title: "TCS CodeVita Season 12",
      subtitle: "Top 0.35% Global",
      description: "Demonstrating competitive programming excellence",
      stat: "Top 0.35%",
      link: "https://drive.google.com/file/d/1NSf4QJ8hJo9zWPv4fJUZQLLrnrgU47lL/view",
    },
    {
      title: "CodeCaze Competition",
      subtitle: "Competitive Programming",
      description: "Strong performance among 75,000+ participants globally",
      stat: "AIR 604",
      link: "https://github.com/rajveer-09",
    },
    {
      title: "3000+ DSA Problems",
      subtitle: "Codolio Platform",
      description: "Comprehensive algorithm and data structures mastery",
      stat: "3000+",
      link: "https://codolio.com/profile/rajveer-09/problemSolving",
    },
  ]

  const handleLinkClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(link, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="achievements" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Achievements & Rankings</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="group p-6 bg-gradient-to-br from-card to-card/50 border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">{achievement.title}</h3>
                <p className="text-primary font-semibold text-sm mb-2">{achievement.subtitle}</p>
                <p className="text-muted-foreground text-xs mb-3">{achievement.description}</p>
                <div className="text-2xl font-bold text-accent mb-4">{achievement.stat}</div>

                <button
                  onClick={(e) => handleLinkClick(e, achievement.link)}
                  className="flex items-center justify-center gap-1 text-primary hover:text-accent transition-colors cursor-pointer mx-auto text-sm"
                >
                  View Profile
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
