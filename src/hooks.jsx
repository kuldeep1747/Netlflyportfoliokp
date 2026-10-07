import { useEffect, useRef, useState } from 'react';

export function Reveal({ children, className = '', delay = 0 }) {
  const r = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = r.current;
    if (!el || !('IntersectionObserver' in window)) { setV(true); return; }
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.12 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return <div ref={r} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${v ? 'in' : ''} ${className}`}>{children}</div>;
}

export function useTyped(words) {
  const [t, setT] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let i = 0, j = 0, del = false, id;
    const tick = () => {
      const w = words[i];
      j += del ? -1 : 1;
      setT(w.slice(0, j));
      let d = del ? 40 : 80;
      if (!del && j === w.length) { del = true; d = 1400; }
      else if (del && j === 0) { del = false; i = (i + 1) % words.length; d = 300; }
      id = setTimeout(tick, d);
    };
    tick();
    return () => clearTimeout(id);
  }, []);
  return t;
}

export function useActive(ids) {
  const [a, setA] = useState(ids[0]);
  useEffect(() => {
    const o = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setA(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) o.observe(el); });
    return () => o.disconnect();
  }, []);
  return a;
}

export function Counter({ to, decimals = 1, suffix = '' }) {
  const r = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setN(to); return; }
    const o = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      o.disconnect();
      const s = performance.now();
      const step = (t) => { const p = Math.min((t - s) / 1200, 1); setN(to * p); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
    o.observe(r.current);
    return () => o.disconnect();
  }, [to]);
  return <span ref={r}>{n.toFixed(decimals)}{suffix}</span>;
}

export function useResume(url) {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    if (!url) return;
    fetch(url, { method: 'HEAD' })
      .then((r) => setOk(r.ok && !(r.headers.get('content-type') || '').includes('text/html')))
      .catch(() => setOk(false));
  }, [url]);
  return ok;
}
