import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-[3.75rem] flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Wordmark */}
        <a
          href="#hero"
          className="text-text font-semibold text-[0.9375rem] tracking-tight hover:text-muted transition-colors duration-200"
          aria-label="Prince Patial — back to top"
        >
          Prince Patial
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted text-sm hover:text-text transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/PrinceResume.pdf"
              download
              className="text-sm px-3.5 py-1.5 border border-border-dark text-text rounded hover:bg-text hover:text-bg transition-all duration-200"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-[5px] group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`h-px bg-text transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[7px] w-5' : 'w-5'
            }`}
          />
          <span
            className={`h-px bg-text transition-all duration-300 ${
              menuOpen ? 'opacity-0 w-4' : 'w-4'
            }`}
          />
          <span
            className={`h-px bg-text transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[7px] w-5' : 'w-5'
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden bg-bg border-b border-border"
          >
            <ul className="px-6 py-5 flex flex-col gap-4" role="list">
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
              <li className="pt-1 border-t border-border">
                <a
                  href="/PrinceResume.pdf"
                  download
                  className="inline-block text-sm px-4 py-2 border border-border-dark text-text rounded hover:bg-text hover:text-bg transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
