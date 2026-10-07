import { siteConfig as s } from '../config/siteConfig.js';
export default function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm mu" style={{ borderColor: 'var(--bd)' }}>
      <p>© {new Date().getFullYear()} {s.name}. All rights reserved.</p>
      <p className="mt-1">Built with React, Vite &amp; Tailwind CSS.</p>
    </footer>
  );
}
