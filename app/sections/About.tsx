"use client";
import React from "react";
import {
  Type,
  ToyBrick,
  ArrowRight,
  Palette,
  GitBranch,
  Hexagon,
  Zap, // Keeping original Zap icon as requested
  Download, // For the CV button
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
        
        {/* Main card container - now with glows and relative positioning for them */}
        <div className="bg-zinc-800 p-8 rounded-3xl shadow-3xl shadow-zinc-950 space-y-8 border border-zinc-700 relative overflow-hidden">
          
          {/* Dual-color animated glows - Consistent with Home Section */}
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-cyan-600 opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-80 h-80 bg-purple-600 opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none" />

          {/* All content within the card, now relatively positioned above the glows */}
          <div className="relative z-10"> 
            <p className="text-lg text-zinc-300 leading-relaxed">
              I am <span className="font-bold text-white">Ian Mark Buenaflor</span>, a highly motivated 3rd Year Information Technology student. My passion lies in bridging the gap between theoretical computing and practical development, focusing primarily on creating efficient and modern web applications. I actively participate in hackathons and maintain several personal coding projects to expand my skillset.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Outside of coding, I enjoy competitive online gaming and exploring new documentation, which helps me stay sharp and up-to-date with emerging tech trends. My goal is to secure an entry-level developer role where I can contribute to meaningful software solutions.
            </p>

            {/* Added a Download CV button for functionality */}
            <a
              href="/IanMarkBuenaflor_CV.pdf" // <-- TODO: Replace with your actual CV file path
              download
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-cyan-400 font-bold border-2 border-cyan-400 rounded-lg shadow-lg hover:bg-cyan-500 hover:text-zinc-900 transition duration-300 hover:shadow-cyan-500/50"
            >
              <Download className="w-5 h-5" />
              <span>DOWNLOAD CV</span>
            </a>

            <h3 className="text-2xl font-semibold text-white pt-6 mt-8 border-t border-zinc-700"> {/* Added mt-8 for spacing */}
              EXPERTISE & STACK
            </h3>
            <div className="flex flex-wrap gap-4 mt-4"> {/* Added mt-4 for spacing */}
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