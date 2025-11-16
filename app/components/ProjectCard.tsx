"use client";
import React from "react";
import { Github } from "lucide-react";
import type { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-zinc-800 rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-[1.03] hover:shadow-cyan-700/50 border border-zinc-700 hover:border-cyan-500/80">
      <div className="relative h-48 bg-zinc-700 overflow-hidden">
        <img
          src={project.placeholderImage}
          alt={`Preview of ${project.name}`}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.onerror = null;
            target.src = "https://placehold.co/400x250/3f3f46/ffffff?text=Image+Missing";
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 transition duration-300 group-hover:text-cyan-400">
          {project.name}
        </h3>
        <p className="text-zinc-400 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-cyan-900/70 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-700 shadow-inner"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Single full-width glowing GitHub button */}
        <div className="mt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center bg-cyan-500 text-zinc-900 py-2.5 rounded-lg text-sm font-bold transition duration-300 hover:bg-cyan-400 shadow-xl shadow-cyan-500/50 transform hover:scale-[1.02]"
          >
            <Github className="w-4 h-4 mr-2" />
            View Code On My Github
          </a>
        </div>
      </div>
    </div>
  );
}