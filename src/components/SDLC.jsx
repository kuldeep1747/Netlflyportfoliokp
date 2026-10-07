import Section from './Section.jsx';
import { Reveal } from '../hooks.jsx';
import { sdlc } from '../data/portfolioData.js';
export default function SDLC() {
  return (
    <Section id="sdlc" eyebrow="Process" title="How I Build Software" sub="A complete software development lifecycle, from idea to maintenance.">
      <ol className="relative max-w-2xl mx-auto pl-14">
        <span className="tl absolute left-5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500 in" aria-hidden="true" />
        {sdlc.map(([t, d], k) => (
          <li key={t} className="relative mb-6 last:mb-0">
            <span className="absolute -left-14 top-3 w-10 h-10 rounded-full glass grid place-items-center text-sm font-bold grad" aria-hidden="true">{String(k + 1).padStart(2, '0')}</span>
            <Reveal delay={k * 60}><div className="glass lift p-5"><h3 className="font-bold">{t}</h3><p className="mu text-sm mt-1">{d}</p></div></Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
