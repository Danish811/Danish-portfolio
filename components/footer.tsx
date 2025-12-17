import { Github, Linkedin, Mail, Code2, Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--kali-green))/0.3] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h3 className="font-mono text-lg font-bold text-[hsl(var(--kali-green))] mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:Sheikhd811@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-[hsl(var(--kali-green))] transition-colors font-mono text-sm"
              >
                <Mail className="w-4 h-4" />
                Sheikhd811@gmail.com
              </a>
              <p className="text-muted-foreground font-mono text-sm">+91 7987917180</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-mono text-lg font-bold text-[hsl(var(--kali-green))] mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href="https://github.com/Danish811"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-[hsl(var(--kali-green))] transition-colors font-mono text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/mohammad-danish-sheikh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-[hsl(var(--kali-green))] transition-colors font-mono text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Competitive Programming */}
          <div>
            <h3 className="font-mono text-lg font-bold text-[hsl(var(--kali-green))] mb-4">Profiles</h3>
            <div className="space-y-2">
              <a
                href="https://www.codechef.com/users/danish_811"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-[hsl(var(--kali-green))] transition-colors font-mono text-sm"
              >
                <Code2 className="w-4 h-4" />
                CodeChef
              </a>
              <a
                href="https://leetcode.com/u/Danish_811/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-[hsl(var(--kali-green))] transition-colors font-mono text-sm"
              >
                <Terminal className="w-4 h-4" />
                LeetCode
              </a>
              <a
                href="https://codeforces.com/profile/Danish_811"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-[hsl(var(--kali-green))] transition-colors font-mono text-sm"
              >
                <Code2 className="w-4 h-4" />
                Codeforces
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--kali-green))/0.3] pt-8 text-center">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            <span className="text-[hsl(var(--kali-green))]">danish@kali:~$</span> echo "Built with passion for ML, CP,
            and Linux"
          </p>
          <p className="text-muted-foreground text-sm">
            © 2025 Mohammad Danish Sheikh. Made with <span className="text-[hsl(var(--kali-green))]">{"<3"}</span> by
            Danish
          </p>
        </div>
      </div>
    </footer>
  )
}
