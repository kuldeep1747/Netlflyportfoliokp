import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import AISection from './components/AISection.jsx';
import GitHubSection from './components/GitHubSection.jsx';
import SDLC from './components/SDLC.jsx';
import Services from './components/Services.jsx';
import WhyHireMe from './components/WhyHireMe.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const initial = () => { try { return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'; } catch { return 'dark'; } };

export default function App() {
  const [theme, setTheme] = useState(initial);
  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    try { localStorage.setItem('theme', theme); } catch { /* ignore */ }
  }, [theme]);
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] btn btn-p">Skip to content</a>
      <Navbar theme={theme} toggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero /><About /><Skills /><Experience /><Projects /><AISection /><GitHubSection /><SDLC /><Services /><WhyHireMe /><Contact />
      </main>
      <Footer />
    </>
  );
}
