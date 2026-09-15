import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const experience = [
  {
    company: 'Cyber Bells',
    role: 'Full-Stack Developer',
    period: 'March 2025 — Present',
    responsibilities: [
      'Working on new features and improvements for MERN-based applications, focusing on clean UI and smooth user experience.',
      'Handling backend logic, secure authentication, and performance updates to keep the application stable and efficient.',
    ],
  },
  {
    company: 'Oceana Smart Solutions',
    role: 'Full-Stack Developer',
    period: 'April 2024 — March 2025',
    responsibilities: [
      'Developed and maintained MERN applications for client projects, including dashboards, APIs, and database operations.',
      'Improved existing systems by fixing bugs, adding integrations, and optimizing code for better performance.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-section px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've Worked"
        />

        <div className="border-t border-border mt-10">
          {experience.map((exp, i) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              className="py-12 md:py-14 border-b border-border grid md:grid-cols-[64px_1fr] gap-6 md:gap-10"
            >
              <span className="label-caps text-border-dark pt-1">0{i + 1}</span>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-7">
                  <div>
                    <h3 className="text-text font-bold text-[1.375rem] tracking-tight">{exp.company}</h3>
                    <p className="text-muted text-[1.0625rem] mt-1">{exp.role}</p>
                  </div>
                  <p className="label-caps text-subtle shrink-0">{exp.period}</p>
                </div>

                <ul className="space-y-3 max-w-2xl" role="list">
                  {exp.responsibilities.map((point, j) => (
                    <li key={j} className="flex gap-3 text-muted text-[0.9375rem] leading-[1.7]">
                      <span className="w-1 h-1 rounded-full bg-warm mt-[0.6em] shrink-0" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
