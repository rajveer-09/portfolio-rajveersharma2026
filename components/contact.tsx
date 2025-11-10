import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">
            Interested in collaborating or want to discuss tech? Reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:rajveersharma1107@gmail.com"
            className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-1">Email</h3>
                <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                  rajveersharma1107@gmail.com
                </p>
              </div>
            </div>
          </a>

          <a
            href="tel:+916394022382"
            className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-1">Phone</h3>
                <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                  +91 6394022382
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/rajveer-09"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-card border border-border rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer"
            title="GitHub"
          >
            <Github className="w-6 h-6 text-foreground hover:text-primary" />
          </a>
          <a
            href="https://linkedin.com/in/rajveer-sharma933"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-card border border-border rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-foreground hover:text-primary" />
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 Rajveer Sharma.</p>
        </div>
      </div>
    </section>
  )
}
