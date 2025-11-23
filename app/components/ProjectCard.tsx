"use client";
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  // Check if Vercel URL is real
  const isRealVercelUrl = (url: string) =>
    url && !url.includes("placehold.co") && url.startsWith("http");

  const vercelUrl = isRealVercelUrl(project.vercelUrl || "")
    ? project.vercelUrl!.trim()
    : null;

  return (
    <div
      onClick={() =>
        vercelUrl && window.open(vercelUrl, "_blank", "noopener,noreferrer")
      }
      className={`group bg-zinc-800 rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-[1.03] hover:shadow-cyan-700/50 border border-zinc-700 hover:border-cyan-500/80 ${
        vercelUrl ? "cursor-pointer" : ""
      }`}
    >
      {/* ---- IMAGE ---- */}
      <div className="relative w-full overflow-hidden">
        <img
          src={project.placeholderImage}
          alt={`Preview of ${project.name}`}
          className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
          onError={(e) => {
            const t = e.currentTarget as HTMLImageElement;
            t.onerror = null;
            t.src =
              "https://placehold.co/400x250/3f3f46/ffffff?text=Image+Missing";
          }}
        />
        {vercelUrl && (
          <div className="absolute top-3 right-3 text-cyan-400 bg-zinc-900/70 rounded-full p-1.5">
            <ExternalLink className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* ---- CONTENT ---- */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 transition duration-300 group-hover:text-cyan-400">
          {project.name}
        </h3>
        <p className="text-zinc-400 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="bg-cyan-900/70 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-700 shadow-inner"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.githubUrl.trim()}
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
