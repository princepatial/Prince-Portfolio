import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const stats = [
  { value: '2.5+', label: 'Years' },
  { value: '25+',  label: 'Projects' },
  { value: '10+',  label: 'In production' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8%' } as const,
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function About() {
  return (
    <section id="about" className="py-section px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="About"
          title="Who I Am"
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-start">

          {/* — Text — */}
          <div className="space-y-5 lg:pt-2">
            {[
              "I'm Prince Patial, a full-stack developer based in Himachal Pradesh, India. I specialize in the MERN stack — building everything from RESTful APIs and database schemas to responsive React interfaces.",
              "I've shipped production applications in education, communication, and hospitality — each handling real users with real expectations. I approach every project by thinking about the end user first and the stack second.",
              "When I'm not building, I'm learning — whether that's a new framework, a better way to structure data, or a cleaner API design pattern. I care as much about how code is written as what it does.",
            ].map((text, i) => (
              <motion.p
                key={i}
                {...fadeUp(i * 0.08)}
                className="text-muted text-[1.0625rem] leading-[1.8]"
              >
                {text}
              </motion.p>
            ))}

            <motion.p {...fadeUp(0.3)} className="text-[0.875rem] text-subtle pt-3">
              Available for full-time and freelance roles — remote-friendly.
            </motion.p>
          </div>

          {/* — Portrait & stats — */}
          <div className="max-w-[360px] lg:max-w-none">
            <motion.div
              {...fadeUp(0.15)}
              className="relative overflow-hidden mx-auto lg:mx-0"
              style={{ aspectRatio: '3 / 4', maxWidth: '360px' }}
            >
              <img
                src="/Prince.png"
                alt="Prince Patial, full-stack developer"
                className="w-full h-full object-cover object-top"
                style={{ filter: 'contrast(1.02) brightness(1.01)' }}
                loading="lazy"
                decoding="async"
              />
              {/* Subtle warm tint overlay — editorial feel */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.06]"
                style={{ background: '#B86B4B' }}
                aria-hidden="true"
              />
            </motion.div>

            {/* Stats — typographic */}
            <motion.div
              {...fadeUp(0.28)}
              className="grid grid-cols-3 gap-0 mt-10 border-t border-border pt-8 max-w-[360px] mx-auto lg:mx-0"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`${i < stats.length - 1 ? 'pr-4 mr-4 border-r border-border' : ''}`}
                >
                  <p className="text-[2rem] font-bold text-text leading-none tracking-tight mb-2">
                    {stat.value}
                  </p>
                  <p className="label-caps text-subtle">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
