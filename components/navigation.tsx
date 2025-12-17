"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Terminal } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "home" },
    { href: "#skills", label: "skills" },
    { href: "#experience", label: "experience" },
    { href: "#projects", label: "projects" },
    { href: "#achievements", label: "achievements" },
    { href: "#blogs", label: "blogs" },
    { href: "#personality", label: "mind-space" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm border-b border-[hsl(var(--kali-green))/0.3]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="#home" className="flex items-center gap-2 group">
            <Terminal className="w-5 h-5 text-[hsl(var(--kali-green))]" />
            <span className="font-mono text-[hsl(var(--kali-green))] font-bold">danish@kali:~$</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-sm text-muted-foreground hover:text-[hsl(var(--kali-green))] transition-colors"
              >
                ./{link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[hsl(var(--kali-green))]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[hsl(var(--kali-green))/0.3] py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-mono text-sm text-muted-foreground hover:text-[hsl(var(--kali-green))] transition-colors"
                >
                  ./{link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
