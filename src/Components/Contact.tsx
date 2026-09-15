import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto border-t border-border pt-24">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left — Messaging & Form */}
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="label-caps mb-6"
            >
              Contact
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl md:text-[2.75rem] leading-[1.15] font-bold text-text mb-6 tracking-tight"
            >
              Let's build something<br />worth using.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-muted text-[1.0625rem] mb-12 max-w-md"
            >
              Have a project in mind? Let's talk. I'm open to full-time roles, freelance work, and interesting collaborations.
            </motion.p>

            <motion.form 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              onSubmit={handleSubmit} 
              className="space-y-8"
            >
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="68c740a8-b6ff-4bd2-97cc-9e198642a8b3" />
              
              <div className="relative">
                <label htmlFor="name" className="label-caps block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-border py-3 text-text placeholder:text-border-dark focus:border-accent focus:outline-none transition-colors duration-200"
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="label-caps block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-b border-border py-3 text-text placeholder:text-border-dark focus:border-accent focus:outline-none transition-colors duration-200"
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="label-caps block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full bg-transparent border-b border-border py-3 text-text placeholder:text-border-dark focus:border-accent focus:outline-none transition-colors duration-200 resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-6 py-3 bg-text text-bg text-sm font-medium rounded hover:bg-muted transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-sm text-green-700 mt-4 font-medium" role="alert">
                  Thank you. Your message has been sent successfully.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-700 mt-4 font-medium" role="alert">
                  Something went wrong. Please try emailing me directly.
                </p>
              )}
            </motion.form>
          </div>

          {/* Right — Details */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:pt-[7.5rem] space-y-12"
          >
            <div className="space-y-8">
              {[
                { label: 'EMAIL', value: 'princepatial20@gmail.com', href: 'mailto:princepatial20@gmail.com' },
                { label: 'LINKEDIN', value: '/in/princepatial', href: 'https://www.linkedin.com/in/princepatial/' },
                { label: 'GITHUB', value: '/princepatial', href: 'https://github.com/princepatial' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="label-caps mb-1">{item.label}</p>
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-[1.0625rem] text-text hover:text-accent transition-colors link-underline font-medium"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
              
              <div>
                <p className="label-caps mb-1">RESUME</p>
                <a 
                  href="/PrinceResume.pdf" 
                  download
                  className="text-[1.0625rem] text-text hover:text-accent transition-colors link-underline font-medium inline-flex items-center gap-1"
                >
                  Download PDF <span className="text-subtle text-sm">↓</span>
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="label-caps text-subtle">
                BASED IN HIMACHAL PRADESH, INDIA · AVAILABLE GLOBALLY
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
