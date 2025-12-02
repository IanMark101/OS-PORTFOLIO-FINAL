"use client";
import React from "react";
import {
  Type,
  ToyBrick,
  ArrowRight,
  Palette,
  GitBranch,
  Hexagon,
  Zap,
  Code2,
  Sparkles
} from "lucide-react";

const skills = [
  { name: "TypeScript", icon: Type,      color: "text-blue-400", border: "border-blue-500/30", shadow: "hover:shadow-blue-500/20" },
  { name: "React",      icon: ToyBrick,  color: "text-cyan-400", border: "border-cyan-500/30", shadow: "hover:shadow-cyan-500/20" },
  { name: "Next.js",    icon: ArrowRight,color: "text-white",    border: "border-zinc-500/30", shadow: "hover:shadow-zinc-500/20" },
  { name: "Tailwind",   icon: Palette,   color: "text-teal-400", border: "border-teal-500/30", shadow: "hover:shadow-teal-500/20" },
  { name: "Git",        icon: GitBranch, color: "text-orange-400",border: "border-orange-500/30",shadow: "hover:shadow-orange-500/20" },
  { name: "Node.js",    icon: Hexagon,   color: "text-green-400",border: "border-green-500/30", shadow: "hover:shadow-green-500/20" },
  { name: "Express",    icon: Zap,       color: "text-yellow-400",border: "border-yellow-500/30",shadow: "hover:shadow-yellow-500/20" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden scroll-mt-16">
      
      {/* 1. ATMOSPHERIC LIGHT: Matching Home/Contact styling */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-cyan-600/10 rounded-full blur-[80px] animate-pulse z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-600/10 rounded-full blur-[80px] animate-pulse delay-700 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. HEADER: Standardized Gradient Text */}
        <div className="text-center mb-12 sm:mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 mb-4 sm:mb-6 shadow-lg shadow-zinc-900/50">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold tracking-widest text-zinc-300 uppercase">Get to know me</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">ME</span>
          </h2>
          {/* Decorative Underline Glow */}
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Bio Card */}
          <div className="lg:col-span-7 relative group">
            {/* Cyberpunk Corners */}
            <div className="absolute -top-1 -left-1 w-10 h-10 sm:w-12 sm:h-12 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl z-20 transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            <div className="absolute -bottom-1 -right-1 w-10 h-10 sm:w-12 sm:h-12 border-b-2 border-r-2 border-purple-500/50 rounded-br-2xl z-20 transition-all duration-500 group-hover:border-purple-500 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

            {/* Main Card Content - Changed to bg-zinc-800 to match Home */}
            <div className="relative bg-zinc-800 border border-zinc-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden hover:border-zinc-600 transition-colors duration-500">
              
              <div className="relative z-10 space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-zinc-400">
                <p>
                  I am <span className="text-white font-semibold border-b-2 border-cyan-400/50 pb-0.5">Ian Mark Buenaflor</span>,
                  a third-year Bachelor of Science in Information Technology student at CPC. I am currently deeply immersed in
                  developing my knowledge and skills in the field of web application development.
                </p>
                <p>
                  I am committed to gaining practical experience, improving my technical competencies, and expanding my understanding
                  of modern web technologies. As I continue my academic journey, I aim to contribute to meaningful projects
                  and further refine my abilities as a future IT professional.
                </p>
                <p>
                  As I progress in my studies, I remain eager to embrace new challenges, collaborate with others, and continue
                  learning from both academic and real-world experiences.
                </p>
              </div>

              {/* Decorative Number */}
              <div className="absolute bottom-2 right-4 sm:bottom-4 sm:right-6 text-6xl sm:text-8xl font-black text-zinc-900/40 select-none -z-0 pointer-events-none">
                02
              </div>
            </div>
          </div>

          {/* RIGHT: Tech Stack */}
          <div className="lg:col-span-5 space-y-6 lg:space-y-8">
            <div className="bg-zinc-800 border border-zinc-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">CURRENTLY LEARNING</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`
                      group flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg sm:rounded-xl
                      bg-zinc-900/50 border ${skill.border}
                      hover:bg-zinc-800 transition-all duration-300
                      hover:-translate-y-1 ${skill.shadow} hover:shadow-lg cursor-default
                    `}
                  >
                    <skill.icon className={`w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 ${skill.color} transition-transform group-hover:scale-110`} />
                    <span className="text-xs sm:text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}