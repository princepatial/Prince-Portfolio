export default function Footer() {
  return (
    <footer className="border-t border-border px-6 pt-16 pb-12 md:pt-20 md:pb-14">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">

          {/* Left — brand */}
          <div>
            <p className="text-text font-semibold text-sm mb-1">Prince Patial</p>
            <p className="text-muted text-[0.875rem]">
              Full-stack developer building digital products.
            </p>
          </div>

          {/* Right — links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-5" role="list">
              {[
                { label: 'GitHub',   href: 'https://github.com/princepatial',             external: true  },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/princepatial/',   external: true  },
                { label: 'Email',    href: 'mailto:princepatial20@gmail.com',             external: false },
                { label: 'Resume',   href: '/PrinceResume.pdf',                           external: false, download: true },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    download={link.download ? true : undefined}
                    className="text-muted text-sm hover:text-text transition-colors duration-200 link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom rule + copyright */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-subtle text-[0.8125rem]">
            © {new Date().getFullYear()} Prince Patial
          </p>
        </div>
      </div>
    </footer>
  );
}
