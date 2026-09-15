import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const projects = [
  {
    title: 'UGive',
    description: 'A reward-based student engagement platform where users send digital cards to friends, earn rewards, and grow their social network within their university ecosystem.',
    image: '/UGive.png',
    role: 'Full-stack development',
    tech: 'React · Node.js · MongoDB · Express',
    built: 'Digital reward system, Social network graph, University ecosystem integration',
    live: 'https://ugive.com.au',
  },
  {
    title: 'TALKBrush',
    description: 'A real-time communication platform enabling instant conversations with support for accent preferences, making interactions feel more natural and personalized.',
    image: '/TalkBrush.png',
    role: 'Full-stack development',
    tech: 'React · Node.js · MongoDB · Socket.IO',
    built: 'Real-time messaging, Accent customization, Multi-user rooms',
    live: 'https://talkbrush.com',
    privateRepo: true,
  },
  {
    title: 'OneLinguo',
    description: 'A real-time multilingual translation platform for live events, churches, and global audiences. Supports 100+ languages with live audio streaming and a pay-per-session model.',
    image: '/onelinguo.png',
    role: 'Full-stack development',
    tech: 'React · Node.js · Express · WebSockets · Streaming API',
    built: '25+ language support, Live audio translation, 200+ active users',
    live: 'https://onelinguo.com',
  },
  {
    title: 'Employee Management System',
    description: 'An employee management platform designed to streamline day-to-day workplace activities. Employees can manage tasks, track attendance, request leaves, and stay updated with events and activities.',
    image: '/employee.png',
    role: 'Full-stack development',
    tech: 'React · Node.js · MongoDB · Express',
    built: 'Daily task management, Attendance tracking, Leave management',
    live: 'https://cyberpulse360.com',
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8%' } as const,
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-44 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects"
        />

        <div className="mt-16 space-y-28 lg:space-y-44">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.title}
                {...fadeUp}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center`}
              >
                {/* Text Side */}
                <div className={`space-y-8 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div>
                    <span className="block text-6xl md:text-7xl font-bold text-border-dark/60 leading-none mb-7 tabular-nums">0{index + 1}</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-text tracking-tight mb-4">{project.title}</h3>
                    <p className="text-muted text-[1.0625rem] leading-[1.7] max-w-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-border/60">
                    <div className="grid grid-cols-[80px_1fr] gap-4">
                      <span className="label-caps">ROLE</span>
                      <span className="text-sm text-text font-medium">{project.role}</span>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-4">
                      <span className="label-caps">STACK</span>
                      <span className="text-sm text-text font-medium">{project.tech}</span>
                    </div>
                    <div className="grid grid-cols-[80px_1fr] gap-4">
                      <span className="label-caps">BUILT</span>
                      <span className="text-sm text-muted">{project.built}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-6">
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-text font-semibold text-sm hover:text-accent transition-colors group link-underline"
                      >
                        View project 
                        <span className="text-subtle transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                      </a>
                    )}
                    {project.privateRepo && (
                      <span className="text-xs text-subtle uppercase tracking-widest font-semibold border border-border-dark px-2.5 py-1 rounded-md">
                        Private Repository
                      </span>
                    )}
                  </div>
                </div>

                {/* Image Side — full, uncropped screenshot at its natural aspect ratio */}
                <div className={`relative group ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg border border-border bg-card">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      decoding="async"
                      className="block w-full h-auto transform transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />
                    {/* Subtle inner ring for framing */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-text/5 rounded-lg pointer-events-none" aria-hidden="true" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
