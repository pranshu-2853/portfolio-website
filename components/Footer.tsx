export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-6">
      <div className="section-shell flex flex-col items-center justify-between gap-3 text-sm text-mist sm:flex-row">
        <p>© {new Date().getFullYear()} Pranshu Patel. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/pranshu-patel-gec-ldce-it-dte"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/pranshu-2853"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
