"use client"

import { useState } from "react"
import { Lightbulb, Plus } from "lucide-react"

const ideasData = [
  {
    id: 1,
    title: "AI-Powered Code Review Assistant",
    content:
      "Build a system that analyzes code quality, suggests optimizations, and identifies security vulnerabilities using LLMs. Could integrate with GitHub Actions for automated PR reviews.",
    timestamp: "2025-01-15",
    category: "AI/ML",
  },
  {
    id: 2,
    title: "Distributed Algorithm Visualizer",
    content:
      "Create an interactive platform to visualize distributed algorithms and consensus protocols in real-time. Useful for learning Raft, Paxos, and other distributed systems concepts.",
    timestamp: "2025-01-10",
    category: "Algorithms",
  },
  {
    id: 3,
    title: "Linux Kernel Module for Network Analysis",
    content:
      "Develop a custom kernel module for advanced packet inspection and network behavior analysis. Could be used for detecting anomalies and potential security threats.",
    timestamp: "2025-01-05",
    category: "Linux",
  },
  {
    id: 4,
    title: "Competitive Programming Training Platform",
    content:
      "Platform that generates personalized problem sets based on weak areas, tracks progress over time, and provides AI-powered hints without giving away solutions.",
    timestamp: "2025-01-03",
    category: "CP",
  },
]

export function PersonalitySection() {
  const [filter, setFilter] = useState<string>("All")
  const categories = ["All", "AI/ML", "Algorithms", "Linux", "CP"]

  const filteredIdeas = filter === "All" ? ideasData : ideasData.filter((idea) => idea.category === filter)

  return (
    <section id="personality" className="min-h-screen py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="font-mono text-[hsl(var(--kali-green))] text-sm">
            danish@terminal:~$ cat mind-space/ideas.txt
          </span>
          <h2 className="section-title mt-2">Mind Space</h2>
          <p className="text-muted-foreground font-mono text-sm mt-2">
            Raw thoughts, project ideas, and notes on ML, CP, and Linux
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                filter === category
                  ? "bg-[hsl(var(--kali-green))] text-black font-bold"
                  : "border border-[hsl(var(--kali-green))/0.3] text-[hsl(var(--kali-green))] hover:bg-[hsl(var(--kali-green))/0.1]"
              }`}
            >
              {category}
            </button>
          ))}
          <button className="ml-auto px-4 py-2 rounded-lg font-mono text-sm border border-[hsl(var(--kali-green))/0.3] text-[hsl(var(--kali-green))] hover:bg-[hsl(var(--kali-green))/0.1] flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Idea
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredIdeas.map((idea) => (
            <div
              key={idea.id}
              className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50 hover:border-[hsl(var(--kali-green))/0.8] transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[hsl(var(--kali-green))]" />
                  <span className="inline-block px-2 py-1 bg-[hsl(var(--kali-green))/0.1] border border-[hsl(var(--kali-green))/0.3] rounded font-mono text-xs text-[hsl(var(--kali-green))]">
                    {idea.category}
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{idea.timestamp}</span>
              </div>
              <h3 className="font-mono text-lg font-bold text-[hsl(var(--kali-green))] mb-3 group-hover:glow-purple transition-all">
                {idea.title}
              </h3>
              <p className="text-foreground text-sm leading-relaxed">{idea.content}</p>
            </div>
          ))}
        </div>

        {filteredIdeas.length === 0 && (
          <div className="text-center py-12">
            <p className="font-mono text-muted-foreground">No ideas found for this category yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}
