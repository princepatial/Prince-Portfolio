import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  github: string | null;
  live: string | null;
}

const projects: Project[] = [
  {
    title: 'UGive',
    description: 'A reward-based student engagement platform where users send digital cards to friends, earn rewards, and grow their social network within their university ecosystem.',
    image: '/UGive.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    features: ['Digital reward system', 'Social network graph', 'University ecosystem integration'],
    github: null,
    live: 'https://ugive.com.au',
  },
  {
    title: 'TALKBrush',
    description: 'A real-time communication platform enabling instant conversations with support for accent preferences, making interactions feel more natural and personalized.',
    image: '/TalkBrush.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    features: ['Real-time messaging', 'Accent customization', 'Multi-user rooms'],
    github: null,
    live: 'https://talkbrush.com',
  },
  {
    title: 'OneLinguo',
    description: 'A real-time multilingual translation platform for live events, churches, and global audiences. Supports 100+ languages with live audio streaming and a pay-per-session model.',
    image: '/onelinguo.png',
    tech: ['React', 'Node.js', 'Express', 'WebSockets', 'Streaming API'],
    features: ['25+ language support', 'Live audio translation', '200+ active users'],
    github: null,
    live: 'https://onelinguo.com',
  },
  {
    title: 'Employee Management System',
    description: 'An employee management platform designed to streamline day-to-day workplace activities. Employees can manage tasks, track attendance, request leaves, and stay updated with events and activities happening within their organization.',
    image: '/employee.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    features: [
      'Daily task management',
      'Attendance tracking',
      'Leave management',
      'Organization events & updates'
    ],
    github: null,
    live: 'https://cyberpulse360.com',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-bg shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
        {project.live && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-bg/80 backdrop-blur-sm border border-border/80 rounded-full px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-muted">Live</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-text font-semibold text-base mb-2">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Features */}
        <ul className="space-y-1.5 mb-5">
          {project.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-muted">
              <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pb-5 border-b border-border">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-bg border border-border text-muted">
              {t}
            </span>
          ))}
        </div>

        {/* CTA row — always visible, one action per type */}
        <div className="flex items-center justify-between pt-5">
          {/* Left: GitHub source code link (only if exists) */}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted hover:text-text transition-colors"
            >
              <GitBranch size={13} />
              Source Code
            </a>
          ) : (
            <span className="text-xs text-subtle italic">Private repo</span>
          )}

          {/* Right: Live demo button (filled if live, ghost if not) */}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-accent text-white rounded-md hover:bg-accent-dim transition-colors"
            >
              Live Demo
              <ArrowUpRight size={12} />
            </a>
          ) : (
            <span className="text-xs text-subtle italic">No live demo</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Projects"
          title="Featured Work"
          subtitle="Production applications serving real users — not just practice projects."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
