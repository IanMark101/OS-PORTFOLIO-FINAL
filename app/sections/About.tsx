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
  Cpu,
  Sparkles
} from "lucide-react";

// Refined skill data structure for cleaner mapping
// Using specific border colors for the glowing effect
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
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-zinc-950 text-zinc-300 selection:bg-purple-500/30">
      
      {/* --- Background Elements (Consistent with Home) --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] z-0 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700 z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">Get to know me</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">ME</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Biography Card */}
          <div className="lg:col-span-7 relative group">
            {/* Decorative corner accents */}
            <div className="absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl z-20" />
            <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-purple-500/30 rounded-br-2xl z-20" />

            <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden hover:border-zinc-700/50 transition-colors duration-500">
              {/* Subtle inner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6 text-lg leading-relaxed text-zinc-400">
                <p>
                  I am <span className="text-white font-semibold border-b-2 border-cyan-500/30 pb-0.5">Ian Mark Buenaflor</span>, 
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
              <div className="absolute bottom-4 right-6 text-8xl font-black text-white/5 select-none -z-0 pointer-events-none">
                02
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Tech Stack & Visuals */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Tech Stack Card */}
            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white tracking-wide">CURRENTLY LEARNING</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className={`
                      group flex flex-col items-center justify-center p-4 rounded-xl 
                      bg-zinc-900/50 border ${skill.border} 
                      hover:bg-zinc-800/80 transition-all duration-300 
                      hover:-translate-y-1 ${skill.shadow} hover:shadow-lg cursor-default
                    `}
                  >
                    <skill.icon className={`w-8 h-8 mb-3 ${skill.color} transition-transform group-hover:scale-110`} />
                    <span className="text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
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