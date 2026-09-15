import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const skillsData = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'TanStack Query', 'Framer Motion', 'shadcn/ui'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Socket.IO', 'JWT Auth'],
  },
  {
    category: 'Data',
    skills: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Redis'],
  },
  {
    category: 'Infrastructure',
    skills: ['Docker', 'AWS', 'Vercel', 'Nginx', 'GitHub Actions'],
  },
  {
    category: 'AI & Automation',
    skills: ['OpenAI API', 'Google Gemini API', 'n8n Automation'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Figma', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-section px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Capabilities"
          title="Skills"
        />

        <div className="mt-12">
          {skillsData.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start py-8 border-t border-border hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 pt-1">
                <span className="label-caps text-border-dark group-hover:text-accent/50 transition-colors">0{index + 1}</span>
                <h3 className="text-sm font-semibold tracking-wide uppercase text-text">{section.category}</h3>
              </div>
              
              <ul className="flex flex-wrap gap-x-6 gap-y-3" role="list">
                {section.skills.map((skill) => (
                  <li 
                    key={skill}
                    className="text-[1.0625rem] text-muted group-hover:text-text transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          {/* Closing rule */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
