import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { NAV } from '../data/portfolioData.js';
import { siteConfig } from '../config/siteConfig.js';
import { useActive } from '../hooks.jsx';

export default function Navbar({ theme, toggle }) {
  const [open, setOpen] = useState(false);
  const [sc, setSc] = useState(false);
  const active = useActive(NAV.map((n) => n[1]));
  useEffect(() => {
    const f = () => setSc(window.scrollY > 10);
    f();
    window.addEventListener('scroll', f, { passive: true });
    const k = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', k);
    return () => { window.removeEventListener('scroll', f); window.removeEventListener('keydown', k); };
  }, []);
  const go = (id) => (e) => { e.preventDefault(); setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${sc || open ? 'glass !rounded-none border-x-0 border-t-0' : ''}`}>
      <nav aria-label="Main" className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" onClick={go('home')} className="text-xl font-extrabold grad" aria-label={`${siteConfig.name} - home`}>{siteConfig.shortName}</a>
        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map(([l, id]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={go(id)} aria-current={active === id ? 'page' : undefined}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${active === id ? '' : 'mu hover:opacity-100'}`}>
                {l}
                <span className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded bg-gradient-to-r from-blue-500 to-cyan-400 transition-transform origin-left ${active === id ? 'scale-x-100' : 'scale-x-0'}`} />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="btn btn-g !p-0 w-11" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <button onClick={() => setOpen(!open)} className="btn btn-g !p-0 w-11 lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
            <Icon name={open ? 'x' : 'menu'} size={20} />
          </button>
        </div>
      </nav>
      <div id="mobile-menu" aria-hidden={!open} className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0 invisible'}`}>
        <ul className="px-4 pb-4 grid gap-1">
          {NAV.map(([l, id]) => (
            <li key={id}><a href={`#${id}`} onClick={go(id)} tabIndex={open ? 0 : -1} className={`block rounded-lg px-4 py-3 font-medium ${active === id ? 'glass' : 'mu'}`}>{l}</a></li>
          ))}
        </ul>
      </div>
    </header>
  );
}
