"use client";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Techstack from "@/components/Techstack";

export default function Home() {
  return (
    <>
      <div className="screen-container">
        <Banner />
        <About />
        <Education />
        <Experience />
        <Project />
        <Techstack />
        <Contact />
      </div>
    </>
  );
}
