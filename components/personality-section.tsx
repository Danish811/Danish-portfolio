"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Lightbulb, Plus, Trash2, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface Idea {
  id: string
  title: string
  content: string
  timestamp: string
  category: string
}

export function PersonalitySection() {
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [filter, setFilter] = useState<string>("All")
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "AI/ML",
  })

  const categories = ["All", "AI/ML", "Algorithms", "Linux", "CP"]

  useEffect(() => {
    const saved = localStorage.getItem("portfolioIdeas")
    if (saved) {
      setIdeas(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    if (ideas.length > 0) {
      localStorage.setItem("portfolioIdeas", JSON.stringify(ideas))
    }
  }, [ideas])

  const filteredIdeas = filter === "All" ? ideas : ideas.filter((idea) => idea.category === filter)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newIdea: Idea = {
      id: editingId || Date.now().toString(),
      title: formData.title,
      content: formData.content,
      timestamp: new Date().toISOString().split("T")[0],
      category: formData.category,
    }

    if (editingId) {
      setIdeas(ideas.map((i) => (i.id === editingId ? newIdea : i)))
      setEditingId(null)
    } else {
      setIdeas([newIdea, ...ideas])
    }

    setFormData({ title: "", content: "", category: "AI/ML" })
    setIsAdding(false)
  }

  const handleEdit = (idea: Idea) => {
    setFormData({
      title: idea.title,
      content: idea.content,
      category: idea.category,
    })
    setEditingId(idea.id)
    setIsAdding(true)
  }

  const handleDelete = (id: string) => {
    setIdeas(ideas.filter((i) => i.id !== id))
  }

  return (
    <section id="personality" className="min-h-screen py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="font-mono text-[hsl(var(--kali-green))] text-sm">
            danish@terminal:~$ cat mind-space/ideas.txt
          </span>
          <h2 className="section-title mt-2">Mind Space</h2>
          <p className="text-gray-300 font-mono text-sm mt-2">
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
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="ml-auto px-4 py-2 rounded-lg font-mono text-sm border border-[hsl(var(--kali-green))/0.3] text-[hsl(var(--kali-green))] hover:bg-[hsl(var(--kali-green))/0.1] flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            {isAdding ? "Cancel" : "New Idea"}
          </button>
        </div>

        {isAdding && (
          <form
            onSubmit={handleSubmit}
            className="mb-8 space-y-4 border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50"
          >
            <Input
              placeholder="Idea Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="bg-black/50 border-[hsl(var(--kali-green))/0.3] text-white font-mono"
            />
            <Textarea
              placeholder="Describe your idea..."
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
              className="bg-black/50 border-[hsl(var(--kali-green))/0.3] text-white font-mono min-h-32"
            />
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 bg-black/50 border border-[hsl(var(--kali-green))/0.3] text-white font-mono rounded-md"
            >
              <option value="AI/ML">AI/ML</option>
              <option value="Algorithms">Algorithms</option>
              <option value="Linux">Linux</option>
              <option value="CP">CP</option>
            </select>
            <Button
              type="submit"
              className="bg-[hsl(var(--kali-green))] text-black hover:bg-[hsl(var(--kali-green))/0.8] font-mono"
            >
              {editingId ? "Update Idea" : "Save Idea"}
            </Button>
          </form>
        )}

        {filteredIdeas.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredIdeas.map((idea) => (
              <div
                key={idea.id}
                className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50 hover:border-[hsl(var(--kali-green))/0.8] transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 flex-1">
                    <Lightbulb className="w-5 h-5 text-[hsl(var(--kali-green))]" />
                    <span className="inline-block px-2 py-1 bg-[hsl(var(--kali-green))/0.1] border border-[hsl(var(--kali-green))/0.3] rounded font-mono text-xs text-[hsl(var(--kali-green))]">
                      {idea.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-gray-400">{idea.timestamp}</span>
                    <button
                      onClick={() => handleEdit(idea)}
                      className="text-[hsl(var(--kali-green))] hover:text-[hsl(var(--kali-green))/0.7] transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(idea.id)}
                      className="text-red-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <h3 className="font-mono text-lg font-bold text-[hsl(var(--kali-green))] mb-3 group-hover:glow-purple transition-all">
                  {idea.title}
                </h3>
                <p className="text-white text-sm leading-relaxed">{idea.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-[hsl(var(--kali-green))/0.3] rounded-lg">
            <p className="font-mono text-gray-300">
              {filter === "All"
                ? "No ideas yet. Click 'New Idea' to add your first thought!"
                : `No ideas found in ${filter} category.`}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
