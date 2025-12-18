import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "PortShield: SYN Flood Protection Firewall",
    description:
      "Real-time SYN flood mitigation system with automatic IP blocking via iptables. Linux security tool for network protection.",
    tech: ["Python", "Scapy", "Linux", "Multithreading", "iptables"],
    github: "https://github.com/Danish811/PortShield",
    highlights: [
      "Threshold-based detection algorithm for SYN flood attacks",
      "Thread pool for high-volume traffic processing",
      "Automatic IP blocking via iptables integration",
    ],
  },
  {
    title: "AI Product Agent",
    description: "Intelligent product recommendation system with real-time web scraping using Llama3.1 and LangChain.",
    tech: ["TypeScript", "Python", "LangChain", "Llama3.1", "Playwright"],
    github: "https://github.com/Danish811/AI_Product_agent",
    highlights: [
      "Real-time web scraping with Playwright automation",
      "LangChain agent for intelligent product recommendations",
      "Context-aware chat interface with session memory",
    ],
  },
  {
    title: "AskPDF-RAG",
    description:
      "Retrieval-Augmented Generation framework for PDF documents using Llama3, Cohere embeddings, and FAISS vector database.",
    tech: ["Python", "LangChain", "Llama3", "FAISS", "Cohere"],
    github: "https://github.com/Danish811/AskPDF-RAG",
    highlights: [
      "Cohere embeddings with FAISS vector search",
      "Context-aware question answering from PDFs",
      "Modular RAG pipeline for document processing",
    ],
  },
  {
    title: "MediLlama Healthcare Chatbot",
    description:
      "Fine-tuned LLaMA-3 model for healthcare conversations using LoRA and 4-bit quantization for efficient inference.",
    tech: ["Python", "LLaMA-3", "LoRA", "4-bit Quantization", "Jupyter"],
    github: "https://github.com/Danish811/MediLlama-Healthcare-Chatbot",
    highlights: [
      "Fine-tuned LLaMA-3 on medical conversation dataset",
      "LoRA for parameter-efficient training",
      "4-bit quantization for optimized inference",
    ],
  },
  {
    title: "Library Management API (Golang)",
    description:
      "RESTful API for library management system built with Go, featuring CRUD operations and efficient data handling.",
    tech: ["Golang", "REST API", "JSON"],
    github: "https://github.com/Danish811/Library-API-Golang",
    highlights: [
      "Clean REST API design with Go",
      "CRUD operations for book management",
      "Efficient JSON data handling",
    ],
  },
  {
    title: "AI Web Scraper with Docker",
    description:
      "Dockerized web scraping solution using LangChain and Llama3.1 for intelligent data extraction and processing.",
    tech: ["Python", "Docker", "LangChain", "Llama3.1", "Selenium"],
    github: "https://github.com/Danish811/AI-Web-Scraper-Docker",
    highlights: [
      "LangChain integration for intelligent scraping",
      "Dockerized for easy deployment",
      "Llama3.1 for content analysis and extraction",
    ],
  },
  {
    title: "BERT Hinglish Classifier",
    description:
      "Language classification model using BERT to identify and classify Hinglish (Hindi-English mixed) text.",
    tech: ["Python", "BERT", "Transformers", "Jupyter"],
    github: "https://github.com/Danish811/BERT-Hinglish-Classifier",
    highlights: [
      "BERT-based text classification",
      "Hinglish language detection",
      "Transfer learning with pre-trained models",
    ],
  },
  {
    title: "BlogMaster API",
    description: "FastAPI backend for blogging platform with modern Python async features and efficient API endpoints.",
    tech: ["Python", "FastAPI", "Async", "REST API"],
    github: "https://github.com/Danish811/BlogMaster-API",
    highlights: [
      "FastAPI for high-performance backend",
      "Async endpoints for scalability",
      "RESTful blog management system",
    ],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="font-mono text-[hsl(var(--kali-green))] text-sm">danish@kali:~$ ls -la ~/projects/</span>
          <h2 className="section-title mt-2">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50 hover:border-[hsl(var(--kali-green))/0.8] hover:shadow-lg hover:shadow-[hsl(var(--kali-green))/0.1] transition-all group"
            >
              <h3 className="font-mono text-xl font-bold text-[hsl(var(--kali-green))] mb-3 group-hover:glow-purple transition-all">
                {project.title}
              </h3>

              <p className="text-white text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <h4 className="font-mono text-xs text-[hsl(var(--kali-green))] mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[hsl(var(--kali-green))] text-xs mt-1">▸</span>
                      <span className="text-gray-300 text-xs">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[hsl(var(--kali-green))/0.1] border border-[hsl(var(--kali-green))/0.3] rounded font-mono text-xs text-[hsl(var(--kali-green))]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-[hsl(var(--kali-green))] text-[hsl(var(--kali-green))] hover:bg-[hsl(var(--kali-green))/0.1] font-mono bg-transparent"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
