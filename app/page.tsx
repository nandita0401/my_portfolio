import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Hobbies from "./components/Hobbies";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      {/* <About /> */}
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Hobbies />
      <footer className="text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} Nandita Dilip Bharambe. All rights reserved.
      </footer>
    </main>
  );
}