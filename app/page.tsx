"use client";
import React from "react";
import Header from "./components/Header";
import HomeSection from "./sections/Home";
import AboutSection from "./sections/About";
import ProjectsSection from "./sections/Projects";
import ContactSection from "./sections/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="bg-zinc-900 text-white font-sans min-h-screen overflow-x-hidden">
      <Header />
      <main className="w-full flex flex-col pt-16">{/* pt-16 pushes every section down 64 px */}
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}