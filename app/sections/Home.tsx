"use client";
import React from "react";
import { Github, Facebook, ArrowRight, Download } from "lucide-react";

export default function HomeSection() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 scroll-mt-16">
      {/* Main card container */}
      <div className="text-left p-8 sm:p-12 bg-zinc-800 rounded-3xl shadow-3xl shadow-zinc-950/50 border border-zinc-700 max-w-4xl w-full relative overflow-hidden">

        {/* Dual-color animated glows */}
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-cyan-600 opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-80 h-80 bg-purple-600 opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 z-10 relative">

          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-2 tracking-tighter leading-tight">IAN MARK</h1>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tighter leading-tight border-b-4 border-cyan-400/50 pb-2 inline-block">BUENAFLOR</h1>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              ASPIRING WEB DEVELOPER
            </h2>

            <p className="text-lg text-zinc-400 max-w-md mx-auto lg:mx-0">
              Learning full-stack web development one project at a time
            </p>

            {/* Social media links */}
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a
                href="https://github.com/IanMark101"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-zinc-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.facebook.com/ianmarkbuenaflor7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="text-zinc-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Facebook className="w-8 h-8" />
              </a>
            </div>

            {/* Buttons Container */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* View Projects Button */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center space-x-2 px-8 py-3 text-sm tracking-widest border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg shadow-lg hover:bg-cyan-500 hover:text-zinc-900 transition duration-300 hover:shadow-cyan-500/50"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Download Resume Button */}
              <a
                href="./os-resume.pdf"
                download="IanMark_Buenaflor_Resume.pdf"
                className="inline-flex items-center justify-center space-x-2 px-8 py-3 text-sm tracking-widest bg-zinc-700 text-white font-bold rounded-lg shadow-lg hover:bg-zinc-600 transition duration-300 border-2 border-transparent hover:border-zinc-500"
              >
                <span>RESUME</span>
                <Download className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Avatar Image */}
          <div className="order-1 lg:order-2 flex-shrink-0">
            <img
              src="./homepageprofile.jpg"
              alt="Your Professional Avatar"
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-cyan-500 shadow-2xl shadow-cyan-950/80"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).onerror = null;
                (e.currentTarget as HTMLImageElement).src = "https://placehold.co/200x200/27272a/ffffff?text=Avatar";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}