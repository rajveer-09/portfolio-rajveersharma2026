export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a Computer Science student at Harcourt Butler Technical University with a passion for building
              scalable backend systems and solving complex algorithmic problems. With internship experience at leading
              fintech and tech companies, I've developed expertise in full-stack development, AI integration, and system
              design.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My journey in competitive programming has shaped my problem-solving approach. I've competed globally,
              ranking in the top 0.35%, and have solved over 3000 DSA problems, helping me build applications that are
              not just feature-rich but also performance-optimized.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive at the intersection of backend engineering and AI integration, creating systems that are both
              powerful and user-centric.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-card border border-primary/20 rounded-lg hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <h3 className="text-xl font-semibold text-primary mb-2">Technical Skills</h3>
              <p className="text-muted-foreground">
                C++, Java, Python, JavaScript, TypeScript, Node.js, Express.js, React.js, Next.js
              </p>
            </div>

            <div className="p-6 bg-card border border-accent/20 rounded-lg hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
              <h3 className="text-xl font-semibold text-accent mb-2">Databases & Tools</h3>
              <p className="text-muted-foreground">MongoDB, PostgreSQL, AWS, Vercel, Git, GitHub, Render, Docker</p>
            </div>

            <div className="p-6 bg-card border border-primary/20 rounded-lg hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <h3 className="text-xl font-semibold text-primary mb-2">Core Competencies</h3>
              <p className="text-muted-foreground">
                Data Structures & Algorithms, OOP, System Design, DBMS, OS, Network Programming
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
