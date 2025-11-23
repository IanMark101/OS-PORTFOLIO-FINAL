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
    <div className="bg-zinc-900 text-white font-sans min-h-screen">
      <Header />
      <main className="w-full flex flex-col">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}