"use client"

import { useState } from "react"
import Image from "next/image"

export default function CodingProfiles() {
  const [hoveredProfile, setHoveredProfile] = useState<string | null>(null)
  const [clickedProfile, setClickedProfile] = useState<string | null>(null)

  const profiles = [
    {
      name: "LeetCode",
      image: "https://shopallpremium.com/wp-content/uploads/2022/02/LeetCode_logo_rvs.png",
      url: "https://leetcode.com/u/rajveer-09",
      description: "Track DSA progress",
    },
    {
      name: "TakeUForward",
      image: "https://takeuforward.org/static/media/TufLogowhite.c3d7f1c91c905c610f4a.png",
      url: "https://takeuforward.org/plus/profile/rajveer09",
      description: "Interview prep guide",
    },
    {
      name: "CodeStudio",
      image: "https://files.codingninjas.in/new_cn_logo-29829.svg",
      url: "https://www.naukri.com/code360/profile/enigmasphinx09",
      description: "Coding platform",
    },
    {
      name: "GeeksForGeeks",
      image: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
      url: "https://www.geeksforgeeks.org/user/enigmasphinx09",
      description: "DSA resources",
    },
    {
      name: "InterviewBit",
      image: "https://ibassets.s3.amazonaws.com/static-assets/ib-logo-square.png",
      url: "https://www.interviewbit.com/profile/enigmasphinx09",
      description: "Interview questions",
    },
    {
      name: "CodeChef",
      image: "https://user-images.githubusercontent.com/63710339/185728318-0b976716-4f78-4a0a-a377-1643cc18a57e.png",
      url: "https://www.codechef.com/users/rajveer_9",
      description: "Competitive platform",
    },
    {
      name: "CodeForces",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-2944796.png",
      url: "https://codeforces.com/profile/enigmasphinx09",
      description: "Competitive contests",
    },
    {
      name: "HackerRank",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
      url: "https://www.hackerrank.com/profile/rajveersharma111",
      description: "Skill certifications",
    },
  ]

  return (
    <section id="coding-profiles" className="py-20 px-4 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Coding Profiles</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredProfile(profile.name)}
              onMouseLeave={() => setHoveredProfile(null)}
              onClick={() => setClickedProfile(clickedProfile === profile.name ? null : profile.name)}
              className="group flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <div
                className={`relative w-40 h-40 rounded-full bg-card border-2 border-border flex items-center justify-center transition-all duration-300 profileGlowEffect ${
                  hoveredProfile === profile.name
                    ? "border-primary/80 shadow-lg shadow-primary/30 scale-110"
                    : clickedProfile === profile.name
                      ? "border-accent/80 shadow-lg shadow-accent/40 scale-105"
                      : "border-border"
                }`}
              >
                <Image
                  src={profile.image || "/placeholder.svg"}
                  alt={profile.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mt-4 mb-1">{profile.name}</h3>
              <p className="text-sm text-muted-foreground">{profile.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
