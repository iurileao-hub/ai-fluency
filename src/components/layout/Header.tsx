"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/modulos", label: "Módulos" },
  { href: "/vocabulario", label: "Vocabulário" },
  { href: "/como-funcionam-llms", label: "Como Funcionam LLMs" },
  { href: "/recursos", label: "Recursos" },
  { href: "/sobre", label: "Sobre" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-space-blue/95 backdrop-blur-sm border-b border-nebula-blue/30">
      <div className="container-guide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-2xl">📖</span>
            <div className="flex flex-col">
              <span className="text-guide-yellow font-bold text-lg leading-tight group-hover:text-glow transition-all">
                AI Fluency
              </span>
              <span className="text-star-white/60 text-xs tracking-wider uppercase">
                Don&apos;t Panic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-star-white/80 hover:text-guide-yellow transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-star-white/80 hover:text-guide-yellow transition-colors"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-nebula-blue/30 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-star-white/80 hover:text-guide-yellow transition-colors text-sm font-medium py-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
