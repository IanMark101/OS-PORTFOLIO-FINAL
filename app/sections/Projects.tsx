"use client";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types";

const projectsData: Project[] = [
  {
    name: "E-Commerce Mockup Site",
    description: "A responsive mock e-commerce frontend demonstrating strong UI/UX principles and component-based architecture.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-mock ",
    vercelUrl: "https://placehold.co/400x250/27272a/ffffff?text=E-Commerce+Preview ",
    placeholderImage: "https://placehold.co/400x250/27272a/ffffff?text=E-Commerce+Mockup ",
  },
  {
    name: "Task Manager CLI Tool",
    description: "A command-line interface application for managing daily tasks and schedules efficiently.",
    techStack: ["Node.js", "TypeScript", "CLI"],
    githubUrl: "https://github.com/yourusername/task-manager-cli ",
    vercelUrl: "https://placehold.co/400x250/3f3f46/ffffff?text=Task+Manager+Preview ",
    placeholderImage: "https://placehold.co/400x250/3f3f46/ffffff?text=Task+Manager+Tool ",
  },
  {
    name: "Real-Time Chat App",
    description: "A simple web-based chat application demonstrating real-time data handling using Firebase or WebSockets.",
    techStack: ["React", "Firebase", "WebSockets"],
    githubUrl: "https://github.com/yourusername/realtime-chat ",
    vercelUrl: "https://placehold.co/400x250/52525b/ffffff?text=Chat+App+Preview ",
    placeholderImage: "https://placehold.co/400x250/52525b/ffffff?text=Chat+App ",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-36 border-t border-zinc-800 scroll-mt-16">
      <h2 className="text-4xl font-extrabold text-cyan-400 mb-12 text-center relative after:block after:w-16 after:h-1 after:bg-cyan-500 after:mx-auto after:mt-2 after:rounded-full">FEATURED PROJECTS</h2>
      <p className="text-lg text-zinc-400 mb-12 text-center">My Small Projects That I Made So Far</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsData.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}