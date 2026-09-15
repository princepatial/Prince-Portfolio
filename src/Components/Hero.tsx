import { motion } from 'framer-motion';

// Shared easing for all section reveals
const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease },
});

const focusAreas = ['Full-Stack', 'Frontend', 'Backend', 'Systems'];

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 md:pt-28 pb-20 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-14 lg:gap-24 items-center">

          {/* — Main column — */}
          <div className="max-w-[42rem]">

            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0.05)}
              className="label-caps text-subtle mb-8"
            >
              Full-Stack Developer · Product Engineer
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease }}
              className="text-display font-bold text-text mb-6"
            >
              I build products,
              <br />
              not just interfaces.
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-muted text-[1.0625rem] leading-[1.75] max-w-[540px] mb-10"
            >
              I'm Prince Patial — a full-stack developer based in India.
              I build production-ready digital products across frontend, backend,
              data, and infrastructure. From the first screen to deployment.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.42)}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-text text-bg text-sm font-medium rounded hover:bg-muted transition-all duration-200 group"
              >
                View my work
                <span className="text-subtle transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true">↓</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-dark text-text text-sm font-medium rounded hover:border-muted hover:text-muted transition-all duration-200"
              >
                Let's talk
              </a>
            </motion.div>

            {/* Social / meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.58 }}
              className="flex flex-wrap items-center gap-5"
            >
              <span className="label-caps text-subtle">Based in India</span>
              <span className="hidden sm:block w-px h-3 bg-border-dark" aria-hidden="true" />
              <a
                href="https://github.com/princepatial"
                target="_blank"
                rel="noopener noreferrer"
                className="label-caps text-muted hover:text-text transition-colors link-underline"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/princepatial/"
                target="_blank"
                rel="noopener noreferrer"
                className="label-caps text-muted hover:text-text transition-colors link-underline"
              >
                LinkedIn
              </a>
              <a
                href="/PrinceResume.pdf"
                download
                className="label-caps text-muted hover:text-text transition-colors link-underline"
              >
                Resume ↓
              </a>
            </motion.div>
          </div>

          {/* — Editorial detail column — typography and rules only, no card, no photo — */}
          <motion.div
            {...fadeUp(0.5)}
            className="lg:w-[220px] pt-10 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border lg:pl-10"
          >
            <p className="label-caps text-subtle mb-4">Currently</p>
            <p className="text-text text-[1.0625rem] leading-[1.5] font-medium mb-8 max-w-[220px]">
              Building production-ready digital products.
            </p>
            <div className="h-px w-10 bg-border-dark mb-8" aria-hidden="true" />
            <ul className="space-y-2" role="list">
              {focusAreas.map((item) => (
                <li key={item} className="label-caps text-muted">{item}</li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
