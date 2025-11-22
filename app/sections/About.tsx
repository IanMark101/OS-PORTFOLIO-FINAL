"use client";
import React from "react";
import {
  Type,
  ToyBrick,
  ArrowRight,
  Palette,
  GitBranch,
  Hexagon,
  Zap, // Keeping original Zap icon
} from "lucide-react";

// Keeping your original skillMeta structure
const skillMeta = [
  ["TypeScript",   Type,       "bg-cyan-600",    "border-cyan-500"],
  ["React",        ToyBrick,   "bg-sky-600",     "border-sky-500"],
  ["Next.js",      ArrowRight, "bg-indigo-600",  "border-indigo-500"],
  ["Tailwind CSS", Palette,    "bg-teal-600",    "border-teal-500"],
  ["Git",          GitBranch,  "bg-amber-600",   "border-amber-500"],
  ["Node.js",      Hexagon,    "bg-green-600",   "border-green-500"],
  ["Express",      Zap,        "bg-gray-700",    "border-gray-600"],
] as const;

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-36 border-t border-zinc-800 scroll-mt-16">
      {/* Max-width container to center the card on the page */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-12 text-center relative after:block after:w-16 after:h-1 after:bg-cyan-500 after:mx-auto after:mt-2 after:rounded-full">
          ABOUT ME
        </h2>
        
        {/* Main card container - with glows and relative positioning */}
        <div className="bg-zinc-800 p-8 rounded-3xl shadow-3xl shadow-zinc-950 space-y-8 border border-zinc-700 relative overflow-hidden">
          
          {/* Dual-color animated glows - Consistent with Home Section */}
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-cyan-600 opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-80 h-80 bg-purple-600 opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none" />

          {/* All content within the card, relatively positioned above the glows */}
          <div className="relative z-10"> 
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              I am <span className="font-bold text-white">Ian Mark Buenaflor</span>, a driven 3rd Year Information Technology student dedicated to engineering accessible, pixel-perfect web experiences. My journey bridges the gap between theoretical computer science and practical application, with a sharp focus on the React ecosystem and modern full-stack architecture.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Beyond the IDE, I thrive in the fast-paced environment of hackathons and competitive gaming, both of which sharpen my strategic thinking and collaborative skills. I am currently seeking an entry-level developer role where I can leverage my technical skillset to contribute to meaningful, scalable software solutions.
            </p>

            <h3 className="text-2xl font-semibold text-white pt-6 mt-8 border-t border-zinc-700"> 
              EXPERTISE & STACK
            </h3>
            <div className="flex flex-wrap gap-4 mt-4"> 
              {skillMeta.map(([name, Icon, bg, border]) => (
                <span
                  key={name}
                  className={`flex items-center gap-2 ${bg} text-white px-4 py-1.5 rounded-full text-sm font-medium border ${border} transition duration-300 hover:brightness-110 cursor-default`}
                >
                  <Icon className="w-4 h-4" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}