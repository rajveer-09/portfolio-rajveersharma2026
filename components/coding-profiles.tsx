"use client"

export default function CodingProfiles() {
  const profiles = [
    {
      name: "LeetCode",
      icon: "📊",
      url: "https://leetcode.com/u/rajveer-09",
      description: "Track DSA progress",
    },
    {
      name: "TakeUForward",
      icon: "🎓",
      url: "https://takeuforward.org/plus/profile/rajveer09",
      description: "Interview prep guide",
    },
    {
      name: "CodeStudio",
      icon: "💻",
      url: "https://www.naukri.com/code360/profile/enigmasphinx09",
      description: "Coding platform",
    },
    {
      name: "GeeksForGeeks",
      icon: "🔧",
      url: "https://www.geeksforgeeks.org/user/enigmasphinx09",
      description: "DSA resources",
    },
    {
      name: "InterviewBit",
      icon: "💡",
      url: "https://www.interviewbit.com/profile/enigmasphinx09",
      description: "Interview questions",
    },
    {
      name: "CodeChef",
      icon: "🏆",
      url: "https://www.codechef.com/users/rajveer_9",
      description: "Competitive platform",
    },
    {
      name: "CodeForces",
      icon: "⚡",
      url: "https://codeforces.com/profile/enigmasphinx09",
      description: "Competitive contests",
    },
    {
      name: "HackerRank",
      icon: "🎯",
      url: "https://www.hackerrank.com/profile/rajveersharma111",
      description: "Skill certifications",
    },
  ]

  return (
    <section id="coding-profiles" className="py-20 px-4 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Coding Profiles</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-card border border-border rounded-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center text-center w-40 h-40 mx-auto"
            >
              <div className="text-4xl mb-3">{profile.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-1">{profile.name}</h3>
              <p className="text-sm text-muted-foreground">{profile.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
