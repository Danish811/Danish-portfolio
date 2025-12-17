import { Briefcase, Calendar } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <span className="font-mono text-[hsl(var(--kali-green))] text-sm">danish@kali:~$ cat experience.log</span>
          <h2 className="section-title mt-2">Experience</h2>
        </div>

        <div className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-8 bg-card/50">
          <div className="flex items-start gap-4">
            <Briefcase className="w-6 h-6 text-[hsl(var(--kali-green))] mt-1" />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="font-mono text-xl font-bold text-[hsl(var(--kali-green))]">AI ML & Backend Intern</h3>
                <span className="font-mono text-sm text-muted-foreground flex items-center gap-2 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  June 2025 – Aug 2025
                </span>
              </div>
              <p className="font-mono text-lg text-foreground mb-4">Qureal AI</p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(var(--kali-green))] mt-1">▸</span>
                  <span className="text-foreground text-sm leading-relaxed">
                    Conducted R&D for testing and configuring different models for various internal GenAI pipelines
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(var(--kali-green))] mt-1">▸</span>
                  <span className="text-foreground text-sm leading-relaxed">
                    Worked on Image Segmentation for detecting and reading graphical elements for recreation and
                    deployed it using FastAPI as a microservice
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[hsl(var(--kali-green))] mt-1">▸</span>
                  <span className="text-foreground text-sm leading-relaxed">
                    Created Database as an Interface service to read database records, execute SQL queries by prompting
                    in Natural language and developed its endpoint
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-12">
          <h3 className="font-mono text-xl font-bold text-[hsl(var(--kali-green))] mb-6">Education</h3>
          <div className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h4 className="font-mono text-lg font-bold text-foreground">
                B.Tech in Computer Science and Engineering
              </h4>
              <span className="font-mono text-sm text-muted-foreground flex items-center gap-2 mt-2 md:mt-0">
                <Calendar className="w-4 h-4" />
                August 2022 – July 2026
              </span>
            </div>
            <p className="text-muted-foreground mb-3">University Institute of Technology RGPV Bhopal</p>
            <p className="text-sm text-muted-foreground font-mono">
              <span className="text-[hsl(var(--kali-green))]">Coursework:</span> Data Structures and Algorithms, Machine
              Learning, DBMS, OOP, Computer Networks, Operating Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
