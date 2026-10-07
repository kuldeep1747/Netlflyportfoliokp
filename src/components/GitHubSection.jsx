import Section from './Section.jsx';
import Icon from './Icon.jsx';
import { Reveal } from '../hooks.jsx';
import { practices } from '../data/portfolioData.js';
import { siteConfig } from '../config/siteConfig.js';

// Purely decorative, deterministic pattern. Not real contribution data.
const cells = Array.from({ length: 26 * 7 }, (_, i) => ((i * 37 + (i % 7) * 11 + Math.floor(i / 7) * 5) % 9));

export default function GitHubSection() {
  return (
    <Section id="practices" eyebrow="Workflow" title="Development Practices" sub="Collaborative version control and delivery habits.">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <Reveal>
          <div className="flex flex-wrap gap-3">{practices.map((p) => <span key={p} className="chip lift !text-sm !px-4 !py-2"><Icon name="branch" size={14} />{p}</span>)}</div>
          <div className="mt-8">
            {siteConfig.github
              ? <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="btn btn-p"><Icon name="github" size={16} />View GitHub</a>
              : <span role="link" aria-disabled="true" className="btn btn-g"><Icon name="github" size={16} />View GitHub (add link in siteConfig.js)</span>}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="glass p-5">
            <div className="grid grid-flow-col grid-rows-7 gap-[3px]" role="img" aria-label="Conceptual GitHub-style activity grid (illustration only)">
              {cells.map((v, i) => <i key={i} className="aspect-square rounded-[2px]" style={{ background: v > 6 ? 'var(--a2)' : v > 4 ? 'var(--a1)' : v > 2 ? 'color-mix(in srgb,var(--a1) 40%,transparent)' : 'var(--bd)' }} />)}
            </div>
            <p className="mu text-xs mt-3">Conceptual visualization — not real contribution data.</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
