import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const experience = [
  {
    company: 'UGive',
    role: 'Full-Stack Developer',
    period: '2023 — Present',
    location: 'Remote',
    type: 'Production',
    responsibilities: [
      'Built and maintained the core MERN stack platform serving university students across Australia.',
      'Designed the reward system architecture including digital card issuance and redemption flows.',
      'Implemented real-time social features and optimized database queries for scale.',
      'Collaborated directly with stakeholders to translate product requirements into technical solutions.',
    ],
    highlight: 'Shipped 4 major features in 6 months, increasing user retention by improving onboarding flow.',
  },
  {
    company: 'TALKBrush',
    role: 'Full-Stack Developer',
    period: '2023 — 2024',
    location: 'Remote',
    type: 'Production',
    responsibilities: [
      'Developed a WebSocket-based real-time chat system supporting multi-user rooms.',
      'Integrated accent customization features to improve communication accessibility.',
      'Built responsive React frontend with smooth state management via Redux.',
      'Deployed and managed Node.js backend with Express REST API endpoints.',
    ],
    highlight: 'Reduced message latency by 40% through efficient WebSocket event handling.',
  },
  {
    company: 'Freelance / Independent',
    role: 'Web Developer',
    period: '2022 — 2023',
    location: 'India',
    type: 'Freelance',
    responsibilities: [
      'Designed and built Church Translator — a live sermon broadcasting platform.',
      'Developed a full in-restaurant ordering system for a hospitality client.',
      'Handled complete project lifecycle from architecture to deployment.',
      'Maintained clear client communication and delivered within agreed timelines.',
    ],
    highlight: 'Delivered 2 production projects on schedule with zero critical bugs post-launch.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've Worked"
          subtitle="Real projects, real clients, real ownership."
        />

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-text font-semibold text-xl">{exp.company}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-muted text-sm">{exp.role}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-text text-sm font-medium">{exp.period}</p>
                  <p className="text-muted text-xs mt-0.5">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {exp.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-4">
                <p className="text-xs text-accent font-medium flex items-center gap-2">
                  <span className="text-text">↗</span> {exp.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
