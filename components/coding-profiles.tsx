"use client"

<<<<<<< HEAD
import { useState } from "react"
import Image from "next/image"

export default function CodingProfiles() {
  const [hoveredProfile, setHoveredProfile] = useState<string | null>(null)
  const [clickedProfile, setClickedProfile] = useState<string | null>(null)

  const profiles = [
    {
      name: "LeetCode",
      image: "https://shopallpremium.com/wp-content/uploads/2022/02/LeetCode_logo_rvs.png",
=======
export default function CodingProfiles() {
  const profiles = [
    {
      name: "LeetCode",
      icon: "📊",
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
      url: "https://leetcode.com/u/rajveer-09",
      description: "Track DSA progress",
    },
    {
      name: "TakeUForward",
<<<<<<< HEAD
      image: "https://takeuforward.org/static/media/TufLogowhite.c3d7f1c91c905c610f4a.png",
=======
      icon: "🎓",
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
      url: "https://takeuforward.org/plus/profile/rajveer09",
      description: "Interview prep guide",
    },
    {
      name: "CodeStudio",
<<<<<<< HEAD
      image: "https://files.codingninjas.in/new_cn_logo-29829.svg",
=======
      icon: "💻",
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
      url: "https://www.naukri.com/code360/profile/enigmasphinx09",
      description: "Coding platform",
    },
    {
      name: "GeeksForGeeks",
<<<<<<< HEAD
      image: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
=======
      icon: "🔧",
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
      url: "https://www.geeksforgeeks.org/user/enigmasphinx09",
      description: "DSA resources",
    },
    {
      name: "InterviewBit",
<<<<<<< HEAD
      image: "https://ibassets.s3.amazonaws.com/static-assets/ib-logo-square.png",
=======
      icon: "💡",
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
      url: "https://www.interviewbit.com/profile/enigmasphinx09",
      description: "Interview questions",
    },
    {
      name: "CodeChef",
<<<<<<< HEAD
      image: "https://user-images.githubusercontent.com/63710339/185728318-0b976716-4f78-4a0a-a377-1643cc18a57e.png",
=======
      icon: "🏆",
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
      url: "https://www.codechef.com/users/rajveer_9",
      description: "Competitive platform",
    },
    {
      name: "CodeForces",
<<<<<<< HEAD
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-2944796.png",
=======
      icon: "⚡",
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
      url: "https://codeforces.com/profile/enigmasphinx09",
      description: "Competitive contests",
    },
    {
      name: "HackerRank",
<<<<<<< HEAD
      image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
=======
      icon: "🎯",
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
      url: "https://www.hackerrank.com/profile/rajveersharma111",
      description: "Skill certifications",
    },
  ]

  return (
    <section id="coding-profiles" className="py-20 px-4 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Coding Profiles</h2>

<<<<<<< HEAD
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
          {profiles.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
<<<<<<< HEAD
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
=======
              className="group p-6 bg-card border border-border rounded-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center text-center w-40 h-40 mx-auto"
            >
              <div className="text-4xl mb-3">{profile.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-1">{profile.name}</h3>
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
              <p className="text-sm text-muted-foreground">{profile.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
