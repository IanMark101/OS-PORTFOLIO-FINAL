"use client";
import React from "react";
import { Mail, User, Github, Facebook, Phone } from "lucide-react"; // Import Phone icon

export default function ContactSection() {
  const emailAddress = "ianmarkbuenaflor9@email.com";
  const phoneNumber = "+639305399170";

  return (
    <section id="contact" className="py-24 lg:py-36 border-t border-zinc-800 scroll-mt-16">
      <h2 className="text-4xl font-extrabold text-cyan-400 mb-16 text-center relative after:block after:w-16 after:h-1 after:bg-cyan-500 after:mx-auto after:mt-2 after:rounded-full">CONNECT WITH ME</h2>
      
      {/* Main Card Container */}
      <div className="bg-zinc-800 p-8 rounded-3xl shadow-3xl shadow-zinc-950 text-center max-w-xl mx-auto border border-zinc-700 relative overflow-hidden transition-all duration-500 hover:shadow-cyan-900/60 hover:border-cyan-700">
        
        {/* Dual-color animated glows (Consistent with Home/About Sections) */}
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-cyan-600 opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-80 h-80 bg-purple-600 opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none" />

        <div className="relative z-10"> {/* Content placed on top of glows */}
          <p className="text-xl text-zinc-300 mb-8 font-light">Let's discuss technology, collaborations, or job opportunities. I'm ready to connect!</p>

          <div className="space-y-4">
            {/* Email Link */}
            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center justify-center p-3 bg-zinc-700 rounded-lg shadow-inner shadow-zinc-900 transition duration-300 hover:bg-cyan-900/40 hover:text-cyan-400 group"
            >
              <Mail className="w-6 h-6 text-cyan-400 mr-4 transition duration-300 group-hover:scale-110" />
              <span className="text-lg font-medium text-white group-hover:text-cyan-400 transition duration-300">{emailAddress}</span>
            </a>

            {/* Phone Number Link */}
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center p-3 bg-zinc-700 rounded-lg shadow-inner shadow-zinc-900 transition duration-300 hover:bg-cyan-900/40 hover:text-cyan-400 group"
            >
              <Phone className="w-6 h-6 text-cyan-400 mr-4 transition duration-300 group-hover:scale-110" />
              <span className="text-lg font-medium text-white group-hover:text-cyan-400 transition duration-300">Contact Number: (+63) 930 539 9170</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center justify-center pt-8 space-x-10">
              <a 
                href="https://github.com/IanMark101" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile"
                className="text-zinc-400 hover:text-cyan-400 transition duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]"
              >
                <Github className="w-10 h-10" />
              </a>
              <a 
                href="https://www.facebook.com/ianmarkbuenaflor7" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook Profile"
                className="text-zinc-400 hover:text-cyan-400 transition duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]"
              >
                <Facebook className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}