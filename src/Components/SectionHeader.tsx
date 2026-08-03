import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight mb-4">
        {title}<span className="text-accent">.</span>
      </h2>
      {subtitle && (
        <p className="text-muted text-base max-w-xl leading-relaxed">{subtitle}</p>
      )}
      <div className="mt-6 flex items-center gap-3">
        <div className="h-px w-12 bg-accent" />
        <div className="h-px flex-1 bg-border" />
      </div>
    </motion.div>
  );
}
