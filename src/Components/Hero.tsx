import { motion } from 'framer-motion';
import { ArrowDown, Link2, GitBranch } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-24 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text column */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-accent text-xs font-semibold tracking-widest uppercase mb-6"
            >
              Full-Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-[4.5rem] font-bold text-text leading-[1.05] tracking-tight mb-6"
            >
              Prince
              <br />
              Patial<span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted text-base md:text-lg leading-relaxed max-w-md mb-10"
            >
              I build scalable, production-ready web applications — from database architecture to pixel-perfect interfaces. Specializing in the MERN stack with a focus on clean code and intuitive UX.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#projects"
                className="px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-md hover:bg-accent-dim transition-colors duration-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 border border-border text-text text-sm font-medium rounded-md hover:border-accent/60 hover:text-accent transition-all duration-200"
              >
                Get in Touch
              </a>
              <a
                href="/PrinceResume.pdf"
                download
                className="px-5 py-2.5 text-muted text-sm font-medium rounded-md hover:text-text transition-colors duration-200 flex items-center gap-1.5"
              >
                <ArrowDown size={13} />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-5"
            >
              <div className="h-px w-8 bg-border" />
              <a
                href="https://github.com/princepatial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted text-sm hover:text-text transition-colors"
              >
                <GitBranch size={14} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/princepatial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted text-sm hover:text-text transition-colors"
              >
                <Link2 size={14} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative border rings */}
              <div className="absolute -inset-[10px] rounded-[22px] border border-accent/15 pointer-events-none" />
              <div className="absolute -inset-[20px] rounded-[28px] border border-border/40 pointer-events-none" />

              {/* Photo */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-card">
                <img
                  src="/Prince.png"
                  alt="Prince Patial — Full-Stack Developer"
                   className="w-full h-full object-cover object-top scale-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating status chip */}
              <div className="absolute -bottom-3 left-4 bg-card border border-border rounded-lg px-4 py-2.5 shadow-lg shadow-bg/50">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-xs text-muted">Open to opportunities</p>
                </div>
                <p className="text-sm text-text font-semibold mt-0.5">2+ yrs · MERN stack</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
