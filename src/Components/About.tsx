import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const stats = [
  { value: '2+', label: 'Years of Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '4', label: 'Production Apps' },
];

const strengths = [
  'Full-Stack Architecture',
  'REST API Design',
  'Database Modeling',
  'UI/UX Implementation',
  'Performance Optimization',
  'Clean Code Practices',
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A developer who cares as much about how code is written as what it does."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text */}
          <div className="lg:col-span-3 space-y-5">
            {[
              "I'm Prince Patial, a Full-Stack Developer based in Himachal Pradesh, India. I specialize in the MERN stack — building everything from RESTful APIs and database schemas to responsive React interfaces.",
              "I've shipped production applications across education, communication, and hospitality — each one handling real users with real expectations. I approach every project by thinking about the end user first and the stack second.",
              "When I'm not building, I'm exploring what's next — whether that's a new framework, a better way to structure data, or a cleaner API design pattern.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="text-muted text-base leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="pt-3"
            >
              <p className="text-text text-xs font-semibold tracking-wider uppercase mb-3">Core Strengths</p>
              <div className="flex flex-wrap gap-2">
                {strengths.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs text-muted border border-border rounded-md bg-card hover:border-accent/30 hover:text-text transition-all duration-150 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2 grid sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-accent/20 transition-colors duration-200"
              >
                <p className="text-3xl font-bold text-text mb-0.5">{stat.value}</p>
                <p className="text-muted text-sm">{stat.label}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="bg-accent/5 border border-accent/20 rounded-xl p-5 sm:col-span-3 lg:col-span-1"
            >
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">Available for</p>
              <p className="text-text text-sm font-semibold">Full-time & Freelance roles</p>
              <p className="text-muted text-xs mt-1">Remote-friendly · Worldwide</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
