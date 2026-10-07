import Section from './Section.jsx';
import { Reveal } from '../hooks.jsx';
import { experience } from '../data/portfolioData.js';
export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience" sub="Professional journey in Laravel, PHP and full-stack development.">
      <ol className="relative max-w-3xl mx-auto pl-8 sm:pl-10">
        <span className="tl absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500 in" aria-hidden="true" />
        {experience.map((e, k) => (
          <li key={e.company} className="relative mb-10 last:mb-0">
            <span className="absolute -left-8 sm:-left-10 top-6 w-6 h-6 sm:w-8 sm:h-8 rounded-full glass grid place-items-center" aria-hidden="true"><i className="w-2.5 h-2.5 rounded-full bg-cyan-400" /></span>
            <Reveal delay={k * 100}>
              <article className="glass lift p-5 sm:p-7">
                <p className="text-xs font-semibold" style={{ color: 'var(--a2)' }}>{e.period}</p>
                <h3 className="text-xl font-bold mt-1">{e.role}</h3>
                <p className="mu font-medium">{e.company}</p>
                <p className="mu mt-3 leading-relaxed text-sm sm:text-base">{e.desc}</p>
                {e.projects && <p className="mt-3 text-sm"><span className="font-semibold">Projects: </span><span className="mu">{e.projects.join(' · ')}</span></p>}
                <div className="mt-4 flex flex-wrap gap-2">{e.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
