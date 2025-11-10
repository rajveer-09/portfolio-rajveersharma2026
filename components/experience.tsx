export default function Experience() {
  const experiences = [
    {
      role: "Software Development Engineer Intern",
      company: "Bluestock Fintech",
      period: "June 2025 – July 2025",
      location: "Remote",
      highlights: [
        "Developed and scaled backend services improving data latency by 30%",
        "Integrated AI-powered assistant using Gemini API, resolving 40% of support queries",
        "Refactored backend logic reducing API response time by 35%",
      ],
      link: "https://drive.google.com/file/d/1py8M1Ze7wixNByJVEN_8FK9Xdj0naUWX/view?usp=sharing",
    },
    {
      role: "Software Development Intern",
      company: "YANACA Global Technologies",
      period: "February 2025 – April 2025",
      location: "Kanpur, India",
      highlights: [
        "Built and deployed 3 production-ready full-stack web applications",
        "Designed responsive UIs with React.js and GSAP, improving engagement by 30%",
        "Optimized REST APIs reducing data-fetch latency by 25%",
      ],
    },
    {
      role: "Web Developer",
      company: "CodeAlpha",
      period: "Mar 2024 – Jun 2024",
      location: "Remote",
      highlights: [
        "Collaborated with a team of 5+ engineers to design and implement scalable solutions using React.js, Express.js, and MongoDB while optimizing existing code, resulting in a 30% increase in overall performance.",
        "Implemented and tested 10+ features, enhancing system efficiency and user experience by 40%.",
        "Implemented augmented UI/UX design, increasing user participation by 20%.",
        "Streamlined version control and project management on GitHub, boosting code review efficiency by 15%.",
      ],
      link: "https://drive.google.com/file/d/1fxrEIioihyfJKhRjlmjyhQY61dQr5ICs/view?usp=sharing",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group cursor-pointer"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-accent rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <div className="text-right text-muted-foreground">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-primary hover:text-accent transition-colors underline cursor-pointer"
                >
                  View Certificate →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
