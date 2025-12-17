"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Code2, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Mohammad Danish Sheikh"
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl w-full">
        <div className="border-2 border-[hsl(var(--vibrant-purple))/0.3] rounded-lg p-8 md:p-12 bg-card">
          <div className="mb-6">
            <span className="font-mono text-[hsl(var(--vibrant-purple))] text-sm">danish@kali:~$ whoami</span>
          </div>

          <h1 className="font-mono text-4xl md:text-6xl font-bold text-[hsl(var(--vibrant-purple))] mb-6">
            {displayText}
            {showCursor && <span className="animate-pulse">_</span>}
          </h1>

          <div className="mb-8 space-y-3">
            <p className="font-mono text-xl md:text-2xl text-foreground">
              <span className="text-[hsl(var(--vibrant-purple))]">$</span> AI/ML Developer
            </p>
            <p className="font-mono text-xl md:text-2xl text-foreground">
              <span className="text-[hsl(var(--vibrant-purple))]">$</span> Competitive Programmer
            </p>
            <p className="font-mono text-xl md:text-2xl text-foreground">
              <span className="text-[hsl(var(--vibrant-purple))]">$</span> Linux Enthusiast
            </p>
          </div>

          <div className="mb-8 space-y-2">
            <p className="text-muted-foreground leading-relaxed">
              {">"} Building intelligent AI systems with LangChain, RAG pipelines, and fine-tuned LLMs
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {">"} 900+ algorithmic problems solved • 3 Star CodeChef • Top 10% LeetCode
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {">"} Linux security tools, network programming, and system-level development
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-[hsl(var(--vibrant-purple))] text-white hover:bg-[hsl(var(--vibrant-purple))/0.9] font-mono font-semibold"
            >
              <a href="https://github.com/Danish811" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[hsl(var(--vibrant-purple))] text-[hsl(var(--vibrant-purple))] hover:bg-[hsl(var(--vibrant-purple))/0.1] font-mono bg-transparent"
            >
              <a href="https://linkedin.com/in/mohammad-danish-sheikh" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[hsl(var(--vibrant-purple))] text-[hsl(var(--vibrant-purple))] hover:bg-[hsl(var(--vibrant-purple))/0.1] font-mono bg-transparent"
            >
              <a href="mailto:Sheikhd811@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-[hsl(var(--vibrant-purple))/0.2]">
            <div className="flex flex-wrap gap-6 text-sm font-mono">
              <a
                href="https://www.codechef.com/users/danish_811"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(var(--vibrant-purple))] transition-colors flex items-center gap-2 text-muted-foreground"
              >
                <Code2 className="w-4 h-4" />
                CodeChef
              </a>
              <a
                href="https://leetcode.com/u/Danish_811/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(var(--vibrant-purple))] transition-colors flex items-center gap-2 text-muted-foreground"
              >
                <Terminal className="w-4 h-4" />
                LeetCode
              </a>
              <a
                href="https://codeforces.com/profile/Danish_811"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(var(--vibrant-purple))] transition-colors flex items-center gap-2 text-muted-foreground"
              >
                <Code2 className="w-4 h-4" />
                Codeforces
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
