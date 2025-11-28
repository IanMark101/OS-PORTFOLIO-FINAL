"use client";
import React, { useState } from "react";
import { Home, User, Code, Mail, Menu, X } from "lucide-react";
import type { Section } from "../types";

const sections: Section[] = [
  { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
  { id: "about", label: "About Me", icon: <User className="w-5 h-5" /> },
  { id: "projects", label: "Projects", icon: <Code className="w-5 h-5" /> },
  { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    // scroll 64 px higher so header never leaves screen
    const top = el.offsetTop - 64;
    window.scrollTo({ top, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-zinc-900/90 backdrop-blur-sm shadow-md shadow-zinc-950/80 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-extrabold text-cyan-400 tracking-wider">MY PORTFOLIO</h1>
          <nav className="hidden lg:flex items-center space-x-4">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(s.id); }} className="flex items-center text-zinc-300 py-2 px-3 rounded-lg transition duration-300 hover:bg-cyan-900/50 hover:text-cyan-400 font-semibold space-x-2">
                {s.icon}<span>{s.label}</span>
              </a>
            ))}
          </nav>
          <div className="lg:hidden">
            <button className="p-2 rounded-lg text-cyan-400 hover:bg-zinc-700 transition" onClick={() => setIsMenuOpen((v) => !v)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-zinc-900/95 backdrop-blur-sm z-40" onClick={() => setIsMenuOpen(false)}>
          <ul className="mt-16 px-6 space-y-3">
            {sections.map((s) => (
              <li key={s.id} onClick={() => scrollToSection(s.id)}>
                <a href={`#${s.id}`} onClick={(e) => e.preventDefault()} className="flex items-center text-white p-3 rounded-lg transition duration-300 hover:bg-cyan-900/50">
                  {s.icon}<span className="ml-3 font-medium">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}