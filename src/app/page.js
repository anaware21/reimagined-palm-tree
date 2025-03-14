"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0); // Forces scroll to top on refresh
        gsap.utils.toArray(".fade-in").forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 50 }, // Start: Invisible & Below
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 80%", // When 80% of the element is visible
                end: "top 30%",   // When scrolled past this, it starts fading out
                toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
              },
            }
          );
        });
      }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full p-4 bg-black text-white shadow-md flex justify-between items-center z-50">
        {/* Left-Aligned Logo */}
        <h1 className="text-xl sm:text-2xl font-bold">MyPortfolio</h1>

        {/* Centered Navigation Links */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Button (Hidden on Desktop) */}
        <button className="md:hidden">☰</button>
        </nav>


      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6 
                    bg-[url('/images/home-bg.jpg')] bg-cover bg-bottom bg-no-repeat"
        >
        {/* Translucent Box */}
        <div className="fade-box bg-transparent bg-opacity-10 rounded-2xl p-8 backdrop-blur-3xl border border-white border-opacity-1 shadow-lg">
            <motion.h1
            className="text-6xl font-extrabold fade-in"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
            Welcome to My Portfolio
            </motion.h1>
            <p className="text-xl text-gray-200 mt-4 fade-in">
            Sleek. Minimal. Inspired by Apple.
            </p>
        </div>
        </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900">
        <h2 className="text-4xl font-bold fade-in">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg fade-in hover:scale-105 transition transform duration-300"
            >
              <h3 className="text-2xl font-bold">Project {project}</h3>
              <p className="text-gray-400 mt-2">A sleek and modern design.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex flex-col justify-center items-center text-center px-6 bg-black">
        <h2 className="text-4xl font-bold fade-in">Contact Me</h2>
        <p className="text-gray-400 mt-4">Let's work together! Reach out via email or social media.</p>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500">
        <p>© 2025 MyPortfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
