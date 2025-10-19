// app/components/sections/About.tsx
import { MapPin, Phone, Mail, User } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-3xl"></div>

      {/* Animated geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-blue-500/20 dark:border-blue-400/20 rounded-xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 border-2 border-cyan-500/20 dark:border-cyan-400/20 rounded-full animate-float-medium"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="About Me" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact cards with glass-morphism */}
          <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-900/40 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all group">
            <div className="flex items-center justify-center mb-5">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-lg shadow-md transform transition-transform group-hover:scale-110">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Location
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Islamabad, Pakistan
            </p>
          </div>

          <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-900/40 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all group">
            <div className="flex items-center justify-center mb-5">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-lg shadow-md transform transition-transform group-hover:scale-110">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Phone
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              (+92) 316–7388373
            </p>
          </div>

          <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-900/40 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all group">
            <div className="flex items-center justify-center mb-5">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-lg shadow-md transform transition-transform group-hover:scale-110">
                <Mail className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Email
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              jjawadamn883@gmail.com
            </p>
          </div>
        </div>

        {/* Bio section with glass-morphism */}
        <div className="mt-12 backdrop-blur-sm bg-white/50 dark:bg-gray-900/40 p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-lg shadow-md">
              <User className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold">Who Am I?</h3>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              I am a highly motivated and results-driven <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineer</span> and 
              <span className="font-semibold text-emerald-600 dark:text-emerald-400"> Full Stack Developer</span> with hands-on experience in 
              <span className="font-semibold text-purple-600 dark:text-purple-400"> MERN Stack</span>, 
              <span className="font-semibold text-orange-600 dark:text-orange-400"> React Native</span>, 
              and <span className="font-semibold text-cyan-600 dark:text-cyan-400">Next.js</span>. 
              I have proven ability to develop and maintain robust mobile and web applications.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-blue-600 dark:text-blue-400">Education:</span> Bachelor&apos;s degree in Computer Science from
                <span className="font-medium"> Abdul Wali Khan University Mardan, Pakistan</span>, where I developed a solid foundation
                in programming principles, algorithms, and software development methodologies.
              </p>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Specialization:</span> With strong experience in leveraging 
                <span className="font-medium"> AI tools such as Cursor, GitHub Copilot, and Cloud-based AI solutions</span>, 
                I enhance productivity, accelerate development, and deliver smarter applications with cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
