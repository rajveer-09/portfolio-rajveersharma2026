<<<<<<< HEAD
import { Github, Globe } from "lucide-react"

=======
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
export default function Projects() {
  const projects = [
    {
      name: "SmartTicketAI",
      period: "May 2025 – June 2025",
      description: "AI Agent System for automated ticket triage and resolution",
      highlights: [
        "Engineered distributed, multi-tiered system reducing API latency by 35%",
        "Integrated Gemini AI for automated triage, cutting manual workload by 60%",
        "Built event-driven workflows with Inngest, achieving 99.9% reliability",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "Inngest", "React", "Gemini AI"],
      accentColor: "primary",
<<<<<<< HEAD
      live: "https://smartticket-ai-1.onrender.com",
      github: "https://github.com/rajveer-09/SmartTicket-AI",
=======
      link: "https://smartticket-ai-1.onrender.com",
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
    },
    {
      name: "VibeArmor - DSA Learning Platform",
      period: "April 2025 – May 2025",
      description: "Full-stack DSA learning platform with JWT authentication",
      highlights: [
        "Led 3-member team to build comprehensive DSA learning platform",
        "Implemented Zod validation and modular routing, improving throughput by 45%",
        "Designed DSA pattern sheets with interactive solution flows",
      ],
      tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Zod"],
      accentColor: "accent",
<<<<<<< HEAD
      live: "https://vibearmor.com",
      github: "https://github.com/rajveer-09/VibeArmor",
=======
      link: "https://vibearmor.com",
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
    },
    {
      name: "Brainwave - Modern UI/UX Website",
      period: "Dec 2024 – Jan 2025",
      description: "Visually captivating and fully responsive website showcasing modern UI/UX principles",
      highlights: [
        "Designed and developed using Vite, React.js, and Tailwind CSS with modern UI/UX principles",
        "Integrated parallax scrolling, complex geometric UI elements, and bento grid layouts",
        "Engineered modular, reusable code architecture with elegant design components and adaptive layouts",
      ],
      tech: ["React.js", "Vite", "Tailwind CSS", "UI/UX Design", "JavaScript"],
      accentColor: "primary",
<<<<<<< HEAD
      live: "https://project-brainwave-jan2025.netlify.app/",
      github: "#",
=======
      link: "https://project-brainwave-jan2025.netlify.app/",
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
    },
    {
      name: "Personal Portfolio Website",
      period: "Jan 2025 – Present",
      description: "Immersive portfolio showcasing projects, achievements, and competitive programming excellence",
      highlights: [
        "Built with Next.js, React, and Tailwind CSS featuring smooth animations and interactive elements",
        "Implemented multi-theme system with persistent local storage",
        "Designed responsive layouts and integrated profile links from major coding platforms",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "GSAP"],
      accentColor: "accent",
<<<<<<< HEAD
      live: "https://rajveersharma.netlify.app/",
      github: "#",
=======
      link: "#",
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
<<<<<<< HEAD
            <div
              key={idx}
=======
            <a
              key={idx}
              href={project.link}
              target={project.link !== "#" ? "_blank" : undefined}
              rel={project.link !== "#" ? "noopener noreferrer" : undefined}
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
              className={`group p-8 bg-card border border-border rounded-lg hover:border-${project.accentColor === "primary" ? "primary" : "accent"}/50 transition-all hover:shadow-xl hover:shadow-${project.accentColor === "primary" ? "primary" : "accent"}/10 cursor-pointer transform hover:-translate-y-1`}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{project.name}</h3>
                <p
                  className={`text-sm ${project.accentColor === "primary" ? "text-primary" : "text-accent"} font-semibold`}
                >
                  {project.period}
                </p>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className={project.accentColor === "primary" ? "text-primary" : "text-accent"}>✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

<<<<<<< HEAD
              <div className="flex flex-wrap gap-2 mb-4">
=======
              <div className="flex flex-wrap gap-2">
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-3 py-1 rounded-full ${
                      project.accentColor === "primary"
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "bg-accent/10 text-accent border border-accent/30"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
<<<<<<< HEAD

              <div className="flex gap-3 flex-wrap">
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-xs px-3 py-2 rounded-md transition-all cursor-pointer ${
                      project.accentColor === "primary"
                        ? "bg-primary/20 text-primary hover:bg-primary/30"
                        : "bg-accent/20 text-accent hover:bg-accent/30"
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    Live
                  </a>
                )}
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-xs px-3 py-2 rounded-md transition-all cursor-pointer ${
                      project.accentColor === "primary"
                        ? "bg-primary/20 text-primary hover:bg-primary/30"
                        : "bg-accent/20 text-accent hover:bg-accent/30"
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
=======
            </a>
>>>>>>> a283d9deeb06d9c55018ea37cebdf1b0d25b9981
          ))}
        </div>
      </div>
    </section>
  )
}
