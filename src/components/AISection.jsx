import { useEffect, useRef } from 'react';
import Section from './Section.jsx';
import Icon from './Icon.jsx';
import { Reveal } from '../hooks.jsx';
import { aiCards } from '../data/portfolioData.js';

function NetworkBg() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, x = c.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w, h, raf, run = true, P = [];
    const size = () => {
      w = c.width = c.offsetWidth; h = c.height = c.offsetHeight;
      const n = Math.min(48, Math.floor(w / 28));
      P = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 }));
    };
    const draw = () => {
      x.clearRect(0, 0, w, h);
      for (const p of P) {
        if (!reduce) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1; }
        x.fillStyle = 'rgba(34,211,238,.7)'; x.beginPath(); x.arc(p.x, p.y, 1.8, 0, 7); x.fill();
      }
      for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
        const d = Math.hypot(P[i].x - P[j].x, P[i].y - P[j].y);
        if (d < 130) { x.strokeStyle = `rgba(99,140,255,${0.25 * (1 - d / 130)})`; x.beginPath(); x.moveTo(P[i].x, P[i].y); x.lineTo(P[j].x, P[j].y); x.stroke(); }
      }
      if (run && !reduce) raf = requestAnimationFrame(draw);
    };
    const onResize = () => { size(); if (reduce) draw(); };
    size(); draw();
    const io = new IntersectionObserver(([e]) => { run = e.isIntersecting; if (run && !reduce) { cancelAnimationFrame(raf); draw(); } });
    io.observe(c);
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener('resize', onResize); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 w-full h-full opacity-50 pointer-events-none" />;
}

export default function AISection() {
  return (
    <div className="relative overflow-hidden">
      <NetworkBg />
      <Section id="ai" eyebrow="Modern Stack" title="AI & Python" sub="Exploring the Next Generation of Software Development">
        <Reveal><p className="mu text-center max-w-2xl mx-auto -mt-6 mb-10">I am expanding my full-stack development experience into Python and AI to build intelligent, automated and AI-powered applications.</p></Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCards.map((c, k) => (
            <Reveal key={c.t} delay={(k % 3) * 100}>
              <div className="glass lift p-6 h-full">
                <span className="w-11 h-11 rounded-xl grid place-items-center mb-4 bg-gradient-to-br from-blue-500/30 to-purple-500/30"><Icon name={c.icon} size={22} /></span>
                <h3 className="font-bold text-lg">{c.t}</h3>
                <p className="mu text-sm mt-2 leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
