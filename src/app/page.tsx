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
    <main className="min-h-screen animated-gradient-bg text-white font-inter transition-all duration-500">
      {/* Hero Section */}
      <div id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6 text-white glow-text transition-all duration-300">
            {displayedText}
            <span className="animate-pulse text-blue-300">|</span>
          </h1>
          <button
            onClick={() => {
              const el = document.getElementById('about');
              if (el) {
                el.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            className="relative px-6 py-3 text-base font-light text-white border border-white rounded-xl hover:text-blue-400 hover:border-blue-400 cursor-pointer transition-all duration-300 mb-12">
            Learn About Me
          </button>


        </div>
      </div>

      {/* About Section */}
      <div id="about" className="relative min-h-screen flex items-center justify-center px-4">
        {/* Centered Text */}
        <div className="text-left text-white font-light text-base leading-relaxed max-w-xl z-10 mb-12">
          <h2 className="w-full text-2xl md:text-4xl font-semibold mb-12 text-white text-center glow-text">About Me</h2>
          <p>
            Hello, my name is Noah Scott, and I’m a rising fourth-year Computer Science major at 
            California Polytechnic State University, San Luis Obispo. I’m passionate about learning new 
            skills and constantly seeking out new challenges.
            <br /><br />

            I enjoy exploring emerging technologies and finding opportunities to grow both as a student 
            and a developer. Outside of software development, I love traveling and discovering great places 
            to eat. I also stay active by playing sports—leading intramural and IFC teams in softball, 
            football, basketball, and volleyball at Cal Poly.
            <br /><br />

            I’m excited to keep expanding my knowledge and contributing to meaningful, impactful projects.
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
        <h3 className="w-full text-2xl md:text-4xl font-semibold mb-12 text-white text-center glow-text">Projects</h3>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Project 1 */}
          <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors relative cursor-pointer">
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
              A comprehensive React-based web application for NFL fantasy football enthusiasts. 
              Features an intelligent chatbot assistant, player statistics, 2025 projections, and 
              advanced analytics powered by ESPN&rsquo;s API.
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
                className="w-8"
              />
            </a>
          </div>


          {/* Project 2*/}
          <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors relative cursor-pointer">
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
              href="https://github.com/pchen50/SLOmotion"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src="/github2.png"
                alt="GitHub"
                className="w-8"
              />
            </a>
          </div>


          {/* Project 3 */}
          <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors relative cursor-pointer">
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
              href="https://github.com/Omarcione/WorkoutPlanner"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src="/github2.png"
                alt="GitHub"
                className="w-8"
              />
            </a>
          </div>


          {/* Project 4 */}
          <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors relative cursor-pointer">
            {/* Top-Left Static Logo */}
            <img 
              src="/typescript.svg" 
              alt="GitHub" 
              className="w-6 absolute top-4 left-4"
            />

            <h4 className="text-base font-bold mb-2 text-white text-left mt-8">Ranking Challenge</h4>
            <p className="text-sm text-gray-300 mb-4 text-left">
              A fun and educational React game that challenges players to identify which categories different topics rank best in. Currently, there is a U.S. states game implemented.
            </p>

            {/* Bottom-Right Linked Logo */}
            <a
              href="https://github.com/noahscott23/us-states-game"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src="/github2.png"
                alt="GitHub"
                className="w-8"
              />
            </a>
          </div>


          {/* Project 5 */}
          <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors relative cursor-pointer">
            {/* Top-Left Static Logo */}
            <div className="absolute top-4 left-4 flex gap-3">
            <img 
              src="/typescript.svg" 
              alt="java" 
              className="w-5"
            />
            <img 
              src="/javascript.png" 
              alt="ts" 
              className="w-5"
            />
            </div>

            <h4 className="text-base font-bold mb-2 text-white text-left mt-8">Personal Portfolio Website</h4>
            <p className="text-sm text-gray-300 mb-4 text-left">
              The website you are on right now! Made with Next.js. Github linked below.
            </p>

            {/* Bottom-Right Linked Logo */}
            <a
              href="https://github.com/noahscott23/Personal-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src="/github2.png"
                alt="GitHub"
                className="w-8"
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
        <h3 className="w-full text-2xl md:text-4xl font-semibold mt-24 text-white text-center glow-text">Contact Me</h3>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-12">
            <a 
              href="https://github.com/noahscott23" 
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
              href="https://www.linkedin.com/in/noah-scott23/" 
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
              href="mailto:noahs2355@gmail.com" 
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






