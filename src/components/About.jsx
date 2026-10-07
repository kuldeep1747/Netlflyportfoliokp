import Section from './Section.jsx';
import { Reveal, Counter } from '../hooks.jsx';
import { about, stats } from '../data/portfolioData.js';
export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="About Me" sub="3.5+ Years of Real-World Development Experience">
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <Reveal className="lg:col-span-3 space-y-4 leading-relaxed mu">{about.map((p) => <p key={p}>{p}</p>)}</Reveal>
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="glass lift p-5 text-center h-full flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl font-extrabold grad">{s.v ? <Counter to={s.v} suffix={s.suffix} /> : s.t}</div>
                <div className="mu text-sm mt-1">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
