import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-text font-semibold text-sm tracking-wide hover:text-accent transition-colors">
          PP<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-muted text-sm hover:text-text transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/PrinceResume.pdf"
              download
              className="text-sm px-4 py-2 border border-accent/60 text-accent rounded-md hover:bg-accent hover:text-white hover:border-accent transition-all duration-200"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-muted hover:text-text transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg/95 backdrop-blur-md border-b border-border px-6 py-6"
          >
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted text-base hover:text-text transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/PrinceResume.pdf"
                  download
                  className="inline-block text-sm px-4 py-2 border border-accent/60 text-accent rounded-md hover:bg-accent hover:text-white transition-all duration-200"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
