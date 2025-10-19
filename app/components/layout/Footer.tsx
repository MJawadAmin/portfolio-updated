// app/components/layout/Footer.tsx
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-50 dark:bg-gray-950 pt-12 pb-8">
      {/* Background elements */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-cyan-500/5 dark:bg-cyan-600/10 rounded-full blur-3xl"></div>

      {/* Animated geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-blue-500/10 dark:border-blue-400/20 rounded-xl animate-float-slow"></div>

      {/* Back to top button */}
      <div className="absolute top-8 right-1/2 transform translate-x-1/2">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="backdrop-blur-sm bg-white/40 dark:bg-gray-900/30 rounded-xl border border-gray-200/80 dark:border-gray-800/80 shadow-lg p-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Muhammad Jawad Amin
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Software Engineer || Full Stack Developer
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                  Mobile Dev
                </span>
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm rounded-full">
                  MERN Stack
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/MJawadAmin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-full shadow-md hover:shadow-lg transform transition-transform hover:scale-110"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-jawad-amin-a70389216/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-full shadow-md hover:shadow-lg transform transition-transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:jjawadamn883@gmail.com"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-full shadow-md hover:shadow-lg transform transition-transform hover:scale-110"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200/30 dark:border-gray-700/30 mt-8 pt-8 text-center">
            <div className="flex justify-center space-x-8 mb-6">
              <Link
                href="#about"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Muhammad Jawad Amin. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
