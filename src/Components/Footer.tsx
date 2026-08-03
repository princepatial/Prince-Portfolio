export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Prince Patial<span className="text-accent">.</span>
        </p>
        <p className="text-subtle text-xs">
        </p>
      </div>
    </footer>
  );
}
