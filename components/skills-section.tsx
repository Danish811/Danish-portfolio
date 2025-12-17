import { Brain, Code2, Wrench } from "lucide-react"

const skills = {
  languages: ["Python", "C++", "Golang", "TypeScript", "C", "SQL"],
  frameworks: ["LangChain", "TensorFlow", "Keras", "Flask", "FastAPI", "LLaMA", "BERT", "Selenium", "Playwright"],
  tools: ["Linux", "Docker", "Git", "GitHub", "FAISS", "Scapy", "MongoDB", "Cohere", "LoRA"],
}

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="font-mono text-[hsl(var(--kali-green))] text-sm">danish@kali:~$ cat skills.txt</span>
          <h2 className="section-title mt-2">Technical Arsenal</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Languages */}
          <div className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50 hover:border-[hsl(var(--kali-green))/0.6] transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-[hsl(var(--kali-green))]" />
              <h3 className="font-mono text-xl font-bold text-[hsl(var(--kali-green))]">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[hsl(var(--kali-green))/0.1] border border-[hsl(var(--kali-green))/0.3] rounded font-mono text-sm text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50 hover:border-[hsl(var(--kali-green))/0.6] transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-[hsl(var(--kali-green))]" />
              <h3 className="font-mono text-xl font-bold text-[hsl(var(--kali-green))]">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[hsl(var(--kali-green))/0.1] border border-[hsl(var(--kali-green))/0.3] rounded font-mono text-sm text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50 hover:border-[hsl(var(--kali-green))/0.6] transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-[hsl(var(--kali-green))]" />
              <h3 className="font-mono text-xl font-bold text-[hsl(var(--kali-green))]">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[hsl(var(--kali-green))/0.1] border border-[hsl(var(--kali-green))/0.3] rounded font-mono text-sm text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Highlights */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50">
            <h4 className="font-mono text-lg font-bold text-[hsl(var(--kali-green))] mb-3">Machine Learning</h4>
            <p className="text-foreground text-sm leading-relaxed">
              Deep expertise in RAG pipelines, LLM fine-tuning (LoRA), LangChain agents, and vector databases. Built
              production-ready AI systems with Llama3, BERT, and custom ML models.
            </p>
          </div>

          <div className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50">
            <h4 className="font-mono text-lg font-bold text-[hsl(var(--kali-green))] mb-3">Competitive Programming</h4>
            <p className="text-foreground text-sm leading-relaxed">
              900+ problems solved across CodeChef (3 Star), LeetCode (1799 max), and Codeforces (Pupil). Top 2% in
              contests with strong algorithmic foundation.
            </p>
          </div>

          <div className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50">
            <h4 className="font-mono text-lg font-bold text-[hsl(var(--kali-green))] mb-3">Linux & Security</h4>
            <p className="text-foreground text-sm leading-relaxed">
              Advanced Linux administration, network security with Scapy, built SYN flood protection firewall with
              iptables. Strong system-level programming skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
