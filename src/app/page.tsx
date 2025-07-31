'use client'
import { useEffect, useState } from "react";
import Image from 'next/image'

export default function HomePage() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi! I'm Noah Scott!";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('a[data-dest]');

    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("data-dest");
        const section = document.getElementById(targetId || "");

        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Cleanup listeners on unmount
    return () => {
      links.forEach(link => {
        link.replaceWith(link.cloneNode(true));
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-thin mb-6 text-white">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>
          <button
            onClick={() => {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative px-6 py-3 text-base font-semibold text-white border border-white rounded-xl hover:text-blue-400 hover:border-blue-400 cursor-pointer transition-all duration-300">
            Learn About Me
          </button>


        </div>
      </div>

      {/* About Section */}
<div
  id="about"
  className="relative min-h-screen flex items-center justify-center px-4 bg-black"
>
  {/* Centered Text */}
  <div className="text-center text-white font-light text-base leading-relaxed max-w-xl z-10">
    <h2 className="text-2xl md:text-4xl font-thin mb-12 text-white text-center w-full">About Me</h2>
    <p>
      Hello, my name is Noah Scott and I am an aspiring Software Engineer.
      I am a passionate computer science student dedicated to building
      innovative full-stack web applications. <br /><br />

      I love exploring new technologies and creating solutions that make a difference.
      From simple scripts to complex web applications, my journey in Computer Science
      has been exciting and I'm eager to see what comes next. <br /><br />

      When I'm not coding, you can find me exploring new technologies,
      working on personal projects, or learning about the latest trends in software development.
    </p>
  </div>

  {/* Right-Aligned Image */}
  <div className="absolute right-8 top-80 transform -translate-y-1/2">
    <Image
      src="/noah-scott.png"
      alt="Noah Scott"
      width={250}
      height={357}
      className="rounded-lg"
    />
  </div>
</div>




      {/* Projects Section */}
      <div id="projects" className="py-12 px-6">
        <h3 className="text-2xl md:text-4xl font-thin mb-12 text-white text-center w-full">Projects</h3>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Project 1 */}
          <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors relative cursor-default">
            {/* Top-Left Static Logo */}
            <div className="absolute top-4 left-4 flex gap-3">
            <img 
              src="/javascript.png" 
              alt="js" 
              className="w-5"
            />
            <img 
              src="/css.png" 
              alt="css" 
              className="w-5"
            />
            </div>

            <h4 className="text-base font-bold mb-2 text-white text-left mt-8">Football Stats Application</h4>
            <p className="text-sm text-gray-300 mb-4 text-left">
              A comprehensive React-based web application for NFL fantasy football enthusiasts. Features an intelligent chatbot assistant, player statistics, 2025 projections, and advanced analytics powered by ESPN's API.
            </p>

            {/* Bottom-Right Linked Logo */}
            <a
              href="https://github.com/noahscott23/Football-App"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src="/github2.png"
                alt="GitHub"
                className="w-6"
              />
            </a>
          </div>


          {/* Project 2*/}
          <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors relative cursor-default">
            {/* Top-Left Static Logo */}
            <img 
              src="/python.svg" 
              alt="GitHub" 
              className="w-6 absolute top-4 left-4"
            />

            <h4 className="text-base font-bold mb-2 text-white text-left mt-8">SLO Motion API</h4>
            <p className="text-sm text-gray-300 mb-4 text-left">
              Co-developed a full-stack Movie Watch List Tracker that allows users to create, manage, and share personalized movie lists. Written in Python and integrated a PostgresSQL relational database.
            </p>

            {/* Bottom-Right Linked Logo */}
            <a
              href="https://github.com/your-project-5"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src="/github2.png"
                alt="GitHub"
                className="w-6"
              />
            </a>
          </div>


          {/* Project 3 */}
          <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors relative cursor-default">
            {/* Top-Left Static Logo */}
            <div className="absolute top-4 left-4 flex gap-3">
            <img 
              src="/java.svg" 
              alt="java" 
              className="w-5"
            />
            <img 
              src="/typescript.svg" 
              alt="ts" 
              className="w-5"
            />
            </div>

            <h4 className="text-base font-bold mb-2 text-white text-left mt-8">Workout Buddy</h4>
            <p className="text-sm text-gray-300 mb-4 text-left">
              Collaborated on the development of a full-stack workout planning web applications designed to help users log routines, track progress, and connect with friends. Used Java and Typscript.
            </p>

            {/* Bottom-Right Linked Logo */}
            <a
              href="https://github.com/your-project-5"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src="/github2.png"
                alt="GitHub"
                className="w-6"
              />
            </a>
          </div>


          {/* Project 4 */}
          <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors relative cursor-default">
            {/* Top-Left Static Logo */}
            <img 
              src="/typescript.svg" 
              alt="GitHub" 
              className="w-6 absolute top-4 left-4"
            />

            <h4 className="text-base font-bold mb-2 text-white text-left mt-8">Ranking Challenge</h4>
            <p className="text-sm text-gray-300 mb-4 text-left">
              A fun and educational React game that challenges players to identify which categories different topics rank best in. 
            </p>

            {/* Bottom-Right Linked Logo */}
            <a
              href="https://github.com/your-project-5"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src="/github2.png"
                alt="GitHub"
                className="w-6"
              />
            </a>
          </div>


          {/* Project 5 */}
          <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors relative cursor-default">
            {/* Top-Left Static Logo */}
            <img 
              src="/postgres.svg" 
              alt="GitHub" 
              className="w-6 absolute top-4 left-4"
            />

            <h4 className="text-base font-bold mb-2 text-white text-left mt-8">Project Name 5</h4>
            <p className="text-sm text-gray-300 mb-4 text-left">
              Brief description of what this project does and the technologies used.
            </p>

            {/* Bottom-Right Linked Logo */}
            <a
              href="https://github.com/your-project-5"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src="/github2.png"
                alt="GitHub"
                className="w-6"
              />
            </a>
          </div>


          {/*
          <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors relative">
            <img 
              src="/github2.png" 
              alt="GitHub" 
              className="w-6 absolute top-4 left-4"
            />
            <h4 className="text-base font-bold mb-2 text-white text-left mt-8">Project Name 6</h4>
            <p className="text-sm text-gray-300 mb-4 text-left">Brief description of what this project does and the technologies used.</p>
            <img 
              src="/github2.png" 
              alt="GitHub" 
              className="w-6 absolute bottom-2 right-2 hover:scale-110 transition-transform cursor-pointer"
            />
          </div>
          */}

        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-12 px-6">
        <h3 className="text-2xl md:text-4xl font-thin mb-4 mt-10 text-white text-center w-full">Contact Me</h3>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-3">
            <a 
              href="https://github.com/your-username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-blue-400 font-light text-base transition-all duration-300 hover:scale-110"
            >
              <img 
                src="/github-logo.png" 
                alt="GitHub" 
                className="h-32"
              />
            </a>
            <a 
              href="https://github.com/your-username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white hover:text-blue-400 font-light text-base transition-all duration-300 hover:scale-110"
            >
              <img 
                src="/linkedin-logo.png" 
                alt="LinkedIn" 
                className="h-32"
              />
            </a>
            <a 
              href="https://github.com/your-username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-blue-400 font-light text-base transition-all duration-300 hover:scale-110"
            >
              <img 
                src="/email2.png" 
                alt="Email"
                className="h-32"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}








