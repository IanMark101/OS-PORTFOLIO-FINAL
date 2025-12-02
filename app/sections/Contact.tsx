"use client";
import React from "react";
import { Mail, Github, Facebook, Phone } from "lucide-react";

export default function ContactSection() {
  const emailAddress = "ianmarkbuenaflor9@email.com";
  const phoneNumber  = "+639305399170";

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-36 border-t border-zinc-800 scroll-mt-16">
      {/* 1. UPDATED HEADER: 
         Matches the "Hard Light" gradient from the Home Section 
      */}
      <h2 className="text-2xl sm:text-4xl font-extrabold mb-8 sm:mb-16 text-center relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          CONNECT WITH ME
        </span>
        {/* Underline decorative glow */}
        <span className="block w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-2 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
      </h2>

      {/* Main Card Container */}
      <div className="bg-zinc-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-3xl shadow-zinc-950 text-center max-w-xl mx-auto w-11/12 sm:w-full border border-zinc-700 relative overflow-hidden transition-all duration-500 hover:shadow-cyan-900/30 hover:border-cyan-500/30">
        
        {/* 2. ATMOSPHERIC LIGHT: 
           Exact match of the "blobs" from HomeSection 
        */}
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-600 opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-60 h-60 sm:w-80 sm:h-80 bg-purple-600 opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none" />

        <div className="relative z-10">
          <p className="text-base sm:text-xl text-zinc-300 mb-6 sm:mb-8 font-light">
            Let&apos;s discuss technology, collaborations, or job opportunities. I&apos;m ready to connect!
          </p>

          {/* Contact Links */}
          <div className="space-y-3 sm:space-y-4">
            {/* 3. PROJECTED LIGHT (Buttons): 
               Added border-cyan-400 and shadow-cyan-500 on hover to match Home buttons 
            */}
            
            {/* Email */}
            <a
              href={`mailto:${emailAddress}`}
              className="flex flex-col sm:flex-row items-center justify-center p-3 bg-zinc-700/50 border border-zinc-600 rounded-lg transition duration-300 hover:bg-zinc-700 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] group"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mb-2 sm:mb-0 sm:mr-4 transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="text-sm sm:text-lg font-medium text-white group-hover:text-cyan-400 transition duration-300 break-all">
                {emailAddress}
              </span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex flex-col sm:flex-row items-center justify-center p-3 bg-zinc-700/50 border border-zinc-600 rounded-lg transition duration-300 hover:bg-zinc-700 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] group"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mb-2 sm:mb-0 sm:mr-4 transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="text-sm sm:text-lg font-medium text-white group-hover:text-cyan-400 transition duration-300">
                (+63) 930 539 9170
              </span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center pt-6 sm:pt-8 space-x-6 sm:space-x-10">
            <a
              href="https://github.com/IanMark101"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-zinc-400 hover:text-cyan-400 transition duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
            >
              <Github className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
            <a
              href="https://www.facebook.com/ianmarkbuenaflor7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="text-zinc-400 hover:text-cyan-400 transition duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
            >
              <Facebook className="w-8 h-8 sm:w-10 sm:h-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}