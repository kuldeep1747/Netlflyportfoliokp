import Section from './Section.jsx';
import Icon from './Icon.jsx';
import { Reveal } from '../hooks.jsx';
import { projects } from '../data/portfolioData.js';
export default function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Projects" sub="Selected professional and concept projects.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, k) => (
          <Reveal key={p.title} delay={(k % 3) * 100}>
            <article className="glass lift p-6 h-full flex flex-col group">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`chip ${p.concept ? '' : ''}`} style={{ color: p.concept ? '#f59e0b' : 'var(--a2)' }}>{p.status}</span>
                <span className="mu text-xs">{String(k + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">{p.title}</h3>
              {p.role && <p className="text-xs mt-1 mu">Role: {p.role}</p>}
              <p className="mu text-sm mt-3 leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              <p className="mt-5 text-xs mu inline-flex items-center gap-2"><Icon name="lock" size={13} />Private Project</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
