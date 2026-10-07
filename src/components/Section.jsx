import { Reveal } from '../hooks.jsx';
export default function Section({ id, eyebrow, title, sub, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-28 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-12 text-center">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{title}</h2>
          {sub && <p className="mu mt-3 max-w-2xl mx-auto">{sub}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
