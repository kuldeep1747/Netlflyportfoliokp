import { useState } from 'react';
import Section from './Section.jsx';
import Icon from './Icon.jsx';
import { Reveal } from '../hooks.jsx';
import { skillCategories, skillLevels, highlights } from '../data/portfolioData.js';

const lvlOf = (n) => Object.keys(skillLevels).find((k) => skillLevels[k].names.includes(n)) || 'strong';

export default function Skills() {
  const [i, setI] = useState(0);
  const cat = skillCategories[i];
  return (
    <Section id="skills" eyebrow="Skills" title="Technical Skills" sub="Organised by area, with honest proficiency labels instead of fake percentages.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {highlights.map((h, k) => (
          <Reveal key={h.t} delay={k * 80}>
            <div className="glass lift p-5 h-full">
              <p className="text-xs font-bold tracking-widest uppercase" style={{ color: h.c }}>{h.t}</p>
              <div className="mt-3 flex flex-wrap gap-2">{h.s.map((s) => <span key={s} className="chip">{s}</span>)}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <div role="group" aria-label="Skill categories" className="flex flex-wrap justify-center gap-2 mb-8">
        {skillCategories.map((c, k) => (
          <button key={c.name} onClick={() => setI(k)} aria-pressed={i === k} className={`btn ${i === k ? 'btn-p' : 'btn-g'} !py-2 !px-4`}>
            <Icon name={c.icon} size={15} />{c.name}
          </button>
        ))}
      </div>
      <div key={cat.name} className="glass p-6 sm:p-8 reveal in">
        <div className="flex flex-wrap gap-3">
          {cat.skills.map((s) => {
            const l = cat.plain ? null : skillLevels[lvlOf(s)];
            return (
              <span key={s} className="chip lift !text-sm !px-4 !py-2">
                {l && <i className="w-2 h-2 rounded-full" style={{ background: l.color }} />}
                <span className="font-medium">{s}</span>
                {l && <span className="mu text-[11px] hidden sm:inline">· {l.label}</span>}
              </span>
            );
          })}
        </div>
        {!cat.plain && (
          <div className="mt-6 pt-5 border-t flex flex-wrap gap-x-5 gap-y-2 text-xs mu" style={{ borderColor: 'var(--bd)' }}>
            {Object.values(skillLevels).map((l) => <span key={l.label} className="inline-flex items-center gap-2"><i className="w-2 h-2 rounded-full" style={{ background: l.color }} />{l.label}</span>)}
          </div>
        )}
      </div>
    </Section>
  );
}
