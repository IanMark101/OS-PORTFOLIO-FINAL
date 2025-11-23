"use client";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types";

const projectsData: Project[] = [
  {
    name: "APPSDEV FIRST SIMPLE RESUME",
    description:
      "Simple Resume Using React",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/IanMark101/BUENAFLOR-APPSDEV",
    vercelUrl: "https://buenaflor-appsdev.vercel.app/",
    placeholderImage:
      "./images/projects/resume.jpg",
  },
  {
    name: "ROUND ROBIN CPU SCHEDULING",
    description:
      "Calculating Round Robin CPU SCHEDULING",
    techStack: ["React", "Firebase", "WebSockets"],
    githubUrl: "https://github.com/IanMark101/OS-CPU-SCHED-PROJ/tree/main",
    vercelUrl: "https://os-cpu-sched-proj.vercel.app/",
    placeholderImage:
      "/images/projects/roundrobin.jpg",
  },
  {
    name: "APPSDEV E-COMMERCE SIMPLE WEBSITE",
    description:
      "Simple e-commerce type website",
    techStack: ["Node.js", "TypeScript", "CLI"],
    githubUrl: "https://github.com/IanMark101/ECOMMERCE-MIDTERM",
    vercelUrl:
      "https://ecommerce-midterm-5pmk-eqokm84np-ian-marks-projects-b1eb3da2.vercel.app/",
    placeholderImage:
      "/images/projects/shop.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 lg:py-36 border-t border-zinc-800 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-12 text-center relative after:block after:w-16 after:h-1 after:bg-cyan-500 after:mx-auto after:mt-2 after:rounded-full">
          FEATURED PROJECTS
        </h2>
        <p className="text-lg text-zinc-400 mb-12 text-center">
          My Small Projects That I Made So Far
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}