import SectionHeading from "../ui/SectionHeading";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-3xl"></div>

      {/* Animated geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-blue-500/20 dark:border-blue-400/20 rounded-xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 border-2 border-cyan-500/20 dark:border-cyan-400/20 rounded-full animate-float-medium"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Get In Touch" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact information card */}
          <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-900/40 p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
            {/* Top gradient bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mb-6"></div>

            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center group">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mr-4 shadow-md transform transition-transform group-hover:scale-110">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Email
                  </p>
                  <a
                    href="mailto:jjawadamn883@gmail.com"
                    className="font-medium hover:text-blue-600 transition-colors"
                  >
                    jjawadamn883@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center group">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mr-4 shadow-md transform transition-transform group-hover:scale-110">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Phone
                  </p>
                  <a
                    href="tel:+923167388373"
                    className="font-medium hover:text-blue-600 transition-colors"
                  >
                    (+92) 316–7388373
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center group">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mr-4 shadow-md transform transition-transform group-hover:scale-110">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Location
                  </p>
                  <p className="font-medium">Islamabad, Pakistan</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center group">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mr-4 shadow-md transform transition-transform group-hover:scale-110">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/muhammad-jawad-amin-a70389216/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-blue-600 transition-colors"
                  >
                    linkedin.com/in/muhammad-jawad-amin-a70389216
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center group">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mr-4 shadow-md transform transition-transform group-hover:scale-110">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/MJawadAmin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-blue-600 transition-colors"
                  >
                    github.com/MJawadAmin
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form card */}
          <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-900/40 p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
            {/* Top gradient bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mb-6"></div>

            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white shadow-sm transition-all"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white shadow-sm transition-all"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white shadow-sm transition-all"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white shadow-sm transition-all"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 shadow-md">
          <p className="text-gray-600 dark:text-gray-400">
            Looking for new opportunities. Feel free to reach out if you have
            any questions or want to work together.
          </p>
        </div>
      </div>
    </section>
  );
}
