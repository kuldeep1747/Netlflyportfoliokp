import Icon from './Icon.jsx';
import { roles, summary } from '../data/portfolioData.js';
import { siteConfig } from '../config/siteConfig.js';
import { useTyped, useResume } from '../hooks.jsx';

const badges = [
  ['Laravel', 'top-0 -left-1 sm:-left-6', '0s'], ['Node.js', 'top-16 -right-1 sm:-right-6', '.8s'],
  ['React', 'bottom-24 -left-1 sm:-left-8', '1.6s'], ['Python', 'bottom-4 right-2 sm:-right-4', '.4s'],
  ['AI', '-top-4 right-12', '1.2s'], ['GitHub', '-bottom-4 left-10', '2s'],
];

export default function Hero() {
  const typed = useTyped(roles);
  const hasResume = useResume(siteConfig.resume);
  const go = (id) => (e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center w-full">
        <div>
          <span className="chip eyebrow !mb-5 !tracking-widest"><span className="w-2 h-2 rounded-full bg-emerald-400" />3.5+ YEARS EXPERIENCE</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">Hi, I'm <span className="grad">{siteConfig.name}</span></h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold min-h-[2rem]" aria-label={roles.join(', ')}><span aria-hidden="true">{typed}<span className="caret grad">|</span></span></p>
          <p className="mt-5 text-lg sm:text-xl font-medium">Building Scalable Web Applications &amp; Intelligent Digital Solutions</p>
          <p className="mu mt-4 max-w-xl leading-relaxed">{summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" onClick={go('projects')} className="btn btn-p">VIEW MY WORK <Icon name="arrow" size={16} /></a>
            {hasResume
              ? <a href={siteConfig.resume} download className="btn btn-g"><Icon name="download" size={16} />DOWNLOAD RESUME</a>
              : <span role="link" aria-disabled="true" className="btn btn-g"><Icon name="download" size={16} />Resume coming soon</span>}
            <a href="#contact" onClick={go('contact')} className="btn btn-g">LET'S CONNECT</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md px-3 sm:px-0" role="img" aria-label="Illustration of a code editor and terminal surrounded by technology badges">
          <div className="glass overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'var(--bd)' }}>
              <i className="w-3 h-3 rounded-full bg-red-400" /><i className="w-3 h-3 rounded-full bg-yellow-400" /><i className="w-3 h-3 rounded-full bg-green-400" />
              <span className="mu text-xs ml-2">routes/api.php</span>
            </div>
            <pre className="p-4 text-[11px] sm:text-xs leading-6 overflow-x-auto font-mono"><code>
              <span style={{ color: '#a855f7' }}>Route</span>::<span style={{ color: '#22d3ee' }}>middleware</span>(<span style={{ color: '#f59e0b' }}>'auth:sanctum'</span>)<br />
              {'  '}-&gt;<span style={{ color: '#22d3ee' }}>group</span>(<span style={{ color: '#a855f7' }}>function</span> () {'{'}<br />
              {'    '}<span style={{ color: '#a855f7' }}>Route</span>::<span style={{ color: '#22d3ee' }}>apiResource</span>(<span style={{ color: '#f59e0b' }}>'projects'</span>, ...);<br />
              {'    '}<span style={{ color: '#a855f7' }}>Route</span>::<span style={{ color: '#22d3ee' }}>post</span>(<span style={{ color: '#f59e0b' }}>'/ai/assist'</span>, ...);<br />
              {'  '}{'}'});
            </code></pre>
            <div className="p-4 font-mono text-[11px] sm:text-xs" style={{ background: 'rgba(0,0,0,.25)' }}>
              <div className="flex items-center gap-2 mu mb-1"><Icon name="terminal" size={12} />terminal</div>
              <div><span style={{ color: '#22d3ee' }}>$</span> php artisan serve</div>
              <div><span style={{ color: '#22d3ee' }}>$</span> npm run dev<span className="caret"> ▍</span></div>
            </div>
          </div>
          {badges.map(([n, pos, d]) => (
            <span key={n} className={`chip glass float absolute ${pos} !px-3 !py-1.5 font-semibold`} style={{ animationDelay: d }}>{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
