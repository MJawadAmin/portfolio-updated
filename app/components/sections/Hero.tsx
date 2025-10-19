// app/components/sections/Hero.tsx
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--color-primary),0.15),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(var(--color-primary),0.15),transparent_50%)]"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-3xl"></div>

      {/* Animated geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-blue-500/20 dark:border-blue-400/20 rounded-xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-10 h-10 border-2 border-cyan-500/20 dark:border-cyan-400/20 rounded-full animate-float-medium"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-blue-600/20 dark:border-blue-500/20 rotate-45 animate-float-fast"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-8">
          {/* Name with gradient */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Muhammad Jawad Amin
            </span>
          </h1>

          {/* Job title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            Software Engineer || Full Stack Developer
          </h2>

          {/* Subtitle for mobile development */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-lg md:text-xl">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium border border-blue-200 dark:border-blue-700">
              Mobile App Developer
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium border border-emerald-200 dark:border-emerald-700">
              MERN Stack Expert
            </span>
          </div>

          {/* Description in a glass card */}
          <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Highly motivated and results-driven <span className="font-semibold text-blue-600 dark:text-blue-400">Mobile & Web App Developer</span> with hands-on experience in 
              <span className="font-semibold text-emerald-600 dark:text-emerald-400"> MERN Stack</span>, 
              <span className="font-semibold text-purple-600 dark:text-purple-400"> React Native</span>, 
              and <span className="font-semibold text-cyan-600 dark:text-cyan-400">Next.js</span>. 
              Proven ability to develop and maintain robust mobile and web applications, collaborate with cross-functional teams, 
              and contribute to digital transformation using cutting-edge technologies.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/MJawadAmin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-jawad-amin-a70389216/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:jjawadamn883@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-medium"
            >
              Contact Me
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm bg-white/50 dark:bg-gray-900/40 font-medium"
            >
              <Download size={20} />
              Resume
            </a>
          </div>
        </div>

        {/* Scroll down indicator */}
        {/* <div className="absolute -bottom-23 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            aria-label="Scroll down"
            className="flex items-center flex-col gap-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-sm font-medium">Explore</span>
            <ChevronDown size={24} />
          </a>
        </div> */}
      </div>
    </section>
  );
}
