import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Link2, GitBranch, ArrowDown, Send } from 'lucide-react';
import SectionHeader from './SectionHeader';

const contactLinks = [
  {
    icon: <Mail size={15} />,
    label: 'Email',
    display: 'princepatial20@gmail.com',
    href: 'mailto:princepatial20@gmail.com',
  },
  {
    icon: <Link2 size={15} />,
    label: 'LinkedIn',
    display: '/in/princepatial',
    href: 'https://www.linkedin.com/in/princepatial/',
  },
  {
    icon: <GitBranch size={15} />,
    label: 'GitHub',
    display: '/princepatial',
    href: 'https://github.com/princepatial',
  },
];

const inputBase =
  'w-full bg-bg border border-border rounded-lg px-4 py-3 text-text text-sm placeholder:text-subtle focus:outline-none focus:border-accent/60 transition-colors duration-200';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const fd = new FormData(e.currentTarget);
    fd.append('access_key', '3347ee3a-ab5e-4bf2-a10a-a00cced9859f');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
      if (data.success) setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Whether you have a project in mind or just want to talk — my inbox is open."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-muted mb-1.5">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="Your name"
                    value={form.name} onChange={onChange}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-muted mb-1.5">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="you@example.com"
                    value={form.email} onChange={onChange}
                    className={inputBase}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-muted mb-1.5">Message</label>
                <textarea
                  id="message" name="message" required rows={6}
                  placeholder="Tell me about your project or just say hello…"
                  value={form.message} onChange={onChange}
                  className={`${inputBase} resize-none`}
                />
              </div>

              <div className="flex items-center gap-4 pt-1">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-md hover:bg-accent-dim disabled:opacity-50 transition-colors duration-200"
                >
                  <Send size={13} />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <span className="text-green-400 text-sm">Sent successfully!</span>
                )}
                {status === 'error' && (
                  <span className="text-red-400 text-sm">Failed — try email directly.</span>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-accent/30 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-bg border border-border rounded-lg text-muted group-hover:text-accent group-hover:border-accent/30 transition-colors shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted mb-0.5">{item.label}</p>
                  <p className="text-sm text-text font-medium truncate">{item.display}</p>
                </div>
              </a>
            ))}

            <a
              href="/PrinceResume.pdf"
              download
              className="flex items-center gap-3 bg-accent/5 border border-accent/20 rounded-xl p-4 hover:bg-accent/10 transition-colors duration-200 mt-1"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-accent/10 border border-accent/30 rounded-lg text-accent shrink-0">
                <ArrowDown size={15} />
              </div>
              <div>
                <p className="text-xs text-muted mb-0.5">Resume</p>
                <p className="text-sm text-accent font-medium">Download PDF</p>
              </div>
            </a>

            <p className="text-xs text-subtle mt-2 leading-relaxed">
              Based in Himachal Pradesh, India — available globally for remote work.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
