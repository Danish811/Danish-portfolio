"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Calendar, Clock, Plus, Trash2, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
}

export function BlogsSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    readTime: "",
    tags: "",
  })

  useEffect(() => {
    const saved = localStorage.getItem("portfolioBlogs")
    if (saved) {
      setBlogs(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    if (blogs.length > 0) {
      localStorage.setItem("portfolioBlogs", JSON.stringify(blogs))
    }
  }, [blogs])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newBlog: BlogPost = {
      id: editingId || Date.now().toString(),
      title: formData.title,
      excerpt: formData.excerpt,
      date: new Date().toISOString().split("T")[0],
      readTime: formData.readTime,
      tags: formData.tags.split(",").map((t) => t.trim()),
    }

    if (editingId) {
      setBlogs(blogs.map((b) => (b.id === editingId ? newBlog : b)))
      setEditingId(null)
    } else {
      setBlogs([newBlog, ...blogs])
    }

    setFormData({ title: "", excerpt: "", readTime: "", tags: "" })
    setIsAdding(false)
  }

  const handleEdit = (blog: BlogPost) => {
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      readTime: blog.readTime,
      tags: blog.tags.join(", "),
    })
    setEditingId(blog.id)
    setIsAdding(true)
  }

  const handleDelete = (id: string) => {
    setBlogs(blogs.filter((b) => b.id !== id))
  }

  return (
    <section id="blogs" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="font-mono text-[hsl(var(--kali-green))] text-sm">danish@kali:~$ ls -lt ~/blogs/</span>
          <h2 className="section-title mt-2">Blog Posts</h2>
          <p className="text-gray-300 font-mono text-sm mt-2">
            Writings on ML, competitive programming, and Linux systems
          </p>
        </div>

        <div className="mb-8">
          <Button
            onClick={() => setIsAdding(!isAdding)}
            className="bg-[hsl(var(--kali-green))] text-black hover:bg-[hsl(var(--kali-green))/0.8] font-mono"
          >
            <Plus className="w-4 h-4 mr-2" />
            {isAdding ? "Cancel" : "Add Blog Post"}
          </Button>

          {isAdding && (
            <form
              onSubmit={handleSubmit}
              className="mt-4 space-y-4 border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50"
            >
              <Input
                placeholder="Blog Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                className="bg-black/50 border-[hsl(var(--kali-green))/0.3] text-white font-mono"
              />
              <Textarea
                placeholder="Blog Excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                required
                className="bg-black/50 border-[hsl(var(--kali-green))/0.3] text-white font-mono min-h-24"
              />
              <Input
                placeholder="Read Time (e.g., 5 min read)"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                required
                className="bg-black/50 border-[hsl(var(--kali-green))/0.3] text-white font-mono"
              />
              <Input
                placeholder="Tags (comma separated)"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                required
                className="bg-black/50 border-[hsl(var(--kali-green))/0.3] text-white font-mono"
              />
              <Button
                type="submit"
                className="bg-[hsl(var(--kali-green))] text-black hover:bg-[hsl(var(--kali-green))/0.8] font-mono"
              >
                {editingId ? "Update Blog" : "Publish Blog"}
              </Button>
            </form>
          )}
        </div>

        {blogs.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map((post) => (
              <div
                key={post.id}
                className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50 hover:border-[hsl(var(--kali-green))/0.8] hover:shadow-lg hover:shadow-[hsl(var(--kali-green))/0.1] transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-mono text-lg font-bold text-[hsl(var(--kali-green))] group-hover:glow-purple transition-all flex-1">
                    {post.title}
                  </h3>
                  <div className="flex gap-2 ml-2">
                    <button
                      onClick={() => handleEdit(post)}
                      className="text-[hsl(var(--kali-green))] hover:text-[hsl(var(--kali-green))/0.7] transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-red-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="text-white text-sm mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-xs text-gray-400 font-mono mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[hsl(var(--kali-green))/0.1] border border-[hsl(var(--kali-green))/0.3] rounded font-mono text-xs text-[hsl(var(--kali-green))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-[hsl(var(--kali-green))/0.3] rounded-lg">
            <p className="text-gray-300 font-mono text-sm">
              <span className="text-[hsl(var(--kali-green))]">{">"}</span> No blog posts yet. Click "Add Blog Post" to
              create your first one!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
