import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const categories = [
  {
    label: 'Frontend',
    color: 'text-blue-400',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'TanStack Query', 'Framer Motion', 'Shadcn/UI'],
  },
  {
    label: 'Backend',
    color: 'text-emerald-400',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Socket.IO', 'JWT Auth'],
  },
  {
    label: 'Databases',
    color: 'text-amber-400',
    skills: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Redis'],
  },
  {
    label: 'Cloud & DevOps',
    color: 'text-purple-400',
    skills: ['Docker', 'AWS', 'Vercel', 'Nginx', 'GitHub Actions'],
  },
  {
    label: 'AI & Automation',
    color: 'text-rose-400',
    skills: ['OpenAI API', 'Google Gemini API', 'n8n Automation'],
  },
  {
    label: 'Tools',
    color: 'text-cyan-400',
    skills: ['Git', 'GitHub', 'Postman', 'Figma', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="What I Work With"
          subtitle="A full-stack toolkit built across production projects — not just tutorials."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.06 }}
              className="bg-card p-6 hover:bg-card/80 transition-colors duration-200"
            >
              <p className={`text-xs font-semibold tracking-widest uppercase mb-4 ${cat.color}`}>
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-bg border border-border text-muted hover:text-text hover:border-subtle transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
