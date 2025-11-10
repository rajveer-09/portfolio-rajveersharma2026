"use client"

import { useState } from "react"
import { Award, ExternalLink } from "lucide-react"

export default function Certifications() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const certifications = [
    {
      id: 1,
      title: "Software Engineer Test",
      issuer: "HackerRank",
      date: "January 2025",
      type: "Certification",
      description: "Verified software engineering skills through HackerRank certification exam",
      link: "https://www.hackerrank.com/certificates/iframe/0289a80dbe8a",
    },
    {
      id: 2,
      title: "Shaastra Programming Contest Finalist",
      issuer: "IIT Madras",
      date: "2025",
      type: "Competition",
      description: "Finalist in prestigious Shaastra Programming Contest among 70,000+ participants globally",
      link: "https://drive.google.com/file/d/1OLILY-Bb9NC40jwp4eYDxt21oYjlgjjK/view?usp=sharing",
    },
    {
      id: 3,
      title: "TCS CodeVita Season 12",
      issuer: "Tata Consultancy Services",
      date: "2024",
      type: "Competition",
      description: "Top 0.35% global rank in TCS CodeVita, demonstrating competitive programming excellence",
      link: "https://drive.google.com/file/d/1NSf4QJ8hJo9zWPv4fJUZQLLrnrgU47lL/view",
    },
    {
      id: 4,
      title: "CodeCaze Competition",
      issuer: "Coding Platform",
      date: "2024-2025",
      type: "Competition",
      description: "Strong competitive programming performance in online coding challenges",
      link: "https://github.com/rajveer-09",
    },
    {
      id: 5,
      title: "GFG 160 - Days of Code Challenge",
      issuer: "GeeksforGeeks",
      date: "February 2025",
      type: "Challenge",
      description: "Completed 160-day coding challenge with consistent DSA problem solving and competitive programming",
      link: "https://media.geeksforgeeks.org/courses/certificates/bae81410e021de636e4288c30f2cd617.pdf",
    },
    {
      id: 6,
      title: "Hacktoberfest 2024",
      issuer: "DigitalOcean",
      date: "October 2024",
      type: "Open Source",
      description:
        "Contributed to 20+ open-source projects, improving code quality by 25% through bug fixes and features",
      link: "https://github.com/rajveer-09",
    },
    {
      id: 7,
      title: "3000+ DSA Problems Solved",
      issuer: "Codolio",
      date: "2024-2025",
      type: "Achievement",
      description: "Comprehensive algorithm and data structures mastery across multiple platforms",
      link: "https://codolio.com/profile/rajveer-09/problemSolving",
    },
    {
      id: 8,
      title: "AI for Students: Generative AI Model",
      issuer: "NxtWave",
      date: "June 2024",
      type: "Course",
      description: "Comprehensive course on building and understanding generative AI models from scratch",
      link: "https://drive.google.com/file/d/1J-3zmPlIA_XKgGJY-yeydECv1KcK97no/view",
    },
  ]

  const typeColors: Record<string, string> = {
    Competition: "bg-primary/10 text-primary",
    "Open Source": "bg-accent/10 text-accent",
    Course: "bg-purple-500/10 text-purple-400",
    Certification: "bg-green-500/10 text-green-400",
    Achievement: "bg-orange-500/10 text-orange-400",
    Challenge: "bg-pink-500/10 text-pink-400",
    Internship: "bg-blue-500/10 text-blue-400",
  }

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications & Recognition</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-start gap-3 flex-1">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground leading-snug">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${typeColors[cert.type] || "bg-muted/20 text-muted-foreground"}`}
                >
                  {cert.type}
                </span>
                <span className="text-xs text-muted-foreground">{cert.date}</span>
              </div>

              {expandedId === cert.id && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  {cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors cursor-pointer"
                    >
                      View Profile/Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
