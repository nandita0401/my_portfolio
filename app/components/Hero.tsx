"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const skills = [
    "Java", "Python", "SQL", "Git", "Next.js", "React",
    "Tailwind CSS", "AWS", "Flask", "Machine Learning",
    "Data Analysis", "Artificial Intelligence", "Tableau"
  ];

  return (
    <>
      {/* Skills Marquee at the very top */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-blue-900 py-2">
        <div className="flex whitespace-nowrap w-full marquee">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="text-teal-300 text-lg py-1 px-4 mx-2 whitespace-nowrap"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-around px-4 py-10 gap-y-12 text-left">
        {/* Left: Text Info */}
        <motion.div
          className="md:w-1/2 w-full mb-10 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hey hi,
          </h1>
          <h2 className="text-4xl md:text-4xl font-bold text-gray-200 mb-4">
            I'm <span className="text-blue-500">Nandita Bharambe</span>
            <br />
            <span className="text-blue-500">
              <Typewriter
                words={["Software Developer", "Data Analyst", "AI/ML Engineer", "Data Scientist"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-4">
            Crafting Scalable Tech. Driving Smart Solutions.
          </p>
          <p className="text-2xl text-gray-400">
            I’m a results-driven developer blending code, data, and cloud to solve real-world problems. With 2.5+ years of experience at Barclays and a strong foundation in AI/ML and full-stack development, I turn complex challenges into streamlined, scalable solutions. I recently wrapped a 50-day LeetCode streak to sharpen problem-solving discipline.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
            >
              Download Resume
            </a>
            {/* <a
              href="#contact"
              className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Let's Connect
            </a> */}
          </div>
        </motion.div>

        {/* Right: Image + Social Icons */}
        <div className="md:w-1/3 w-full flex flex-col items-center justify-center text-center space-y-6">
          <img
            src="/profile_1.jpeg"
            alt="Portrait of Nandita Bharambe, Software Developer"
            className="w-70 h-70 object-cover rounded-full border-2 border-blue-600 animate-float"
          />
          <div className="flex justify-center space-x-6 w-full">
            {/* GitHub */}
            <a
              href="https://github.com/nandita0401"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-14 h-14 border-2 border-blue-500 rounded-full transition-all duration-300 ease-in-out hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            >
              <svg
                className="w-6 h-6 mx-auto text-white transition-transform duration-300 group-hover:scale-125 hover-wiggle animate-float"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.55 0-.27-.01-1.16-.01-2.1-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.29-1.73-1.29-1.73-1.05-.71.08-.7.08-.7 1.17.08 1.78 1.21 1.78 1.21 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.44.11-3.01 0 0 .98-.31 3.2 1.18a11.1 11.1 0 012.92-.39c.99 0 1.98.13 2.92.39 2.22-1.49 3.19-1.18 3.19-1.18.63 1.57.23 2.72.11 3.01.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.67.41.35.77 1.03.77 2.07 0 1.5-.01 2.71-.01 3.08 0 .3.21.66.8.55A10.99 10.99 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/nanditabharambe"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-14 h-14 border-2 border-blue-500 rounded-full transition-all duration-300 ease-in-out hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            >
              <svg
                className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-125 hover-wiggle animate-float"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.54v2.09h.05c.49-.93 1.7-1.92 3.51-1.92 3.76 0 4.45 2.47 4.45 5.68V24h-4v-8.01c0-1.91-.03-4.38-2.67-4.38-2.67 0-3.08 2.09-3.08 4.25V24h-4V8z" />
              </svg>
            </a>

            {/* Gmail */}
            <a
              href="mailto:nanditabharambe@gmail.com"
              className="group relative flex items-center justify-center w-14 h-14 border-2 border-blue-500 rounded-full transition-all duration-300 ease-in-out hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            >
              <HiOutlineMail className="text-white w-6 h-6 group-hover:scale-125 transition-transform duration-300 hover-wiggle animate-float" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
