import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Building Production-Ready RAG Systems",
    excerpt:
      "Deep dive into creating scalable Retrieval-Augmented Generation pipelines with LangChain, FAISS, and production considerations.",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["Machine Learning", "RAG", "LangChain"],
  },
  {
    title: "Mastering SYN Flood Protection in Linux",
    excerpt:
      "A comprehensive guide to building firewall systems from scratch using Python, Scapy, and iptables for network security.",
    date: "2025-01-08",
    readTime: "12 min read",
    tags: ["Linux", "Security", "Networking"],
  },
  {
    title: "Competitive Programming: From Beginner to 3-Star",
    excerpt:
      "My journey solving 900+ problems across CodeChef, LeetCode, and Codeforces. Tips, strategies, and lessons learned.",
    date: "2024-12-20",
    readTime: "10 min read",
    tags: ["Competitive Programming", "Algorithms"],
  },
  {
    title: "Async Web Scraping with Python: A Performance Guide",
    excerpt:
      "Optimizing web scraping pipelines using asyncio, Playwright, and concurrent processing for real-time data extraction.",
    date: "2024-12-10",
    readTime: "7 min read",
    tags: ["Python", "Asyncio", "Web Scraping"],
  },
]

export function BlogsSection() {
  return (
    <section id="blogs" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="font-mono text-[hsl(var(--kali-green))] text-sm">danish@kali:~$ ls -lt ~/blogs/</span>
          <h2 className="section-title mt-2">Blog Posts</h2>
          <p className="text-muted-foreground font-mono text-sm mt-2">
            Writings on ML, competitive programming, and Linux systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50 hover:border-[hsl(var(--kali-green))/0.8] hover:shadow-lg hover:shadow-[hsl(var(--kali-green))/0.1] transition-all group cursor-pointer"
            >
              <h3 className="font-mono text-lg font-bold text-[hsl(var(--kali-green))] mb-3 group-hover:glow-purple transition-all">
                {post.title}
              </h3>

              <p className="text-foreground text-sm mb-4 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-[hsl(var(--kali-green))/0.1] border border-[hsl(var(--kali-green))/0.3] rounded font-mono text-xs text-[hsl(var(--kali-green))]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[hsl(var(--kali-green))] font-mono text-sm group-hover:gap-3 transition-all">
                Read More
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-[hsl(var(--kali-green))]">{">"}</span> More blog posts coming soon...
          </p>
        </div>
      </div>
    </section>
  )
}
