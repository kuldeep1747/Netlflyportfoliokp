import { useState } from 'react';
import Section from './Section.jsx';
import Icon from './Icon.jsx';
import { Reveal } from '../hooks.jsx';
import { siteConfig as s } from '../config/siteConfig.js';

const empty = { name: '', email: '', subject: '', message: '', 'bot-field': '' };
const fields = [['name', 'Name', 'text'], ['email', 'Email', 'email'], ['subject', 'Subject', 'text']];
const enc = (d) => Object.keys(d).map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(d[k])}`).join('&');

export default function Contact() {
  const [f, setF] = useState(empty);
  const [err, setErr] = useState({});
  const [st, setSt] = useState('idle');
  const info = [
    s.email && ['mail', 'Email', s.email, `mailto:${s.email}`],
    s.phone && ['phone', 'Phone', s.phone, `tel:${s.phone}`],
    s.location && ['pin', 'Location', s.location],
    s.linkedin && ['linkedin', 'LinkedIn', 'Connect on LinkedIn', s.linkedin],
    s.github && ['github', 'GitHub', 'View GitHub profile', s.github],
  ].filter(Boolean);

  const validate = () => {
    const e = {};
    if (!f.name.trim()) e.name = 'Name is required';
    if (!f.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email address';
    if (!f.subject.trim()) e.subject = 'Subject is required';
    if (f.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };
  const submit = async (ev) => {
    ev.preventDefault();
    const v = validate();
    setErr(v);
    if (Object.keys(v).length) return;
    setSt('loading');
    try {
      const r = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: enc({ 'form-name': 'contact', ...f }) });
      if (!r.ok) throw new Error('failed');
      setSt('success'); setF(empty);
    } catch { setSt('error'); }
  };
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build Something Great" sub="Have a project, job opportunity or idea? Let's connect and discuss how I can help build a reliable digital solution.">
      <div className="grid lg:grid-cols-5 gap-8">
        <Reveal className="lg:col-span-2 space-y-4">
          {info.map(([ic, l, v, href]) => {
            const body = <><span className="w-10 h-10 shrink-0 rounded-xl grid place-items-center bg-gradient-to-br from-blue-500/30 to-purple-500/30"><Icon name={ic} size={18} /></span><span className="min-w-0"><span className="mu text-xs block">{l}</span><span className="font-medium break-words">{v}</span></span></>;
            return href
              ? <a key={l} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="glass lift p-4 flex items-center gap-4">{body}</a>
              : <div key={l} className="glass p-4 flex items-center gap-4">{body}</div>;
          })}
          {s.availability && <p className="mu text-sm px-1">{s.availability}</p>}
        </Reveal>
        <Reveal className="lg:col-span-3" delay={100}>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} noValidate className="glass p-5 sm:p-8 space-y-5">
            <input type="hidden" name="form-name" value="contact" />
            <p hidden><label>Don't fill this out: <input name="bot-field" value={f['bot-field']} onChange={set('bot-field')} tabIndex={-1} autoComplete="off" /></label></p>
            {fields.map(([k, l, t]) => (
              <div key={k}>
                <label htmlFor={`f-${k}`} className="block text-sm font-medium mb-1.5">{l} <span aria-hidden="true">*</span></label>
                <input id={`f-${k}`} name={k} type={t} required value={f[k]} onChange={set(k)} className="field" aria-invalid={!!err[k]} aria-describedby={err[k] ? `e-${k}` : undefined} autoComplete={k === 'name' ? 'name' : k === 'email' ? 'email' : 'off'} />
                {err[k] && <p id={`e-${k}`} role="alert" className="text-red-400 text-xs mt-1">{err[k]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="f-message" className="block text-sm font-medium mb-1.5">Message <span aria-hidden="true">*</span></label>
              <textarea id="f-message" name="message" rows={5} required value={f.message} onChange={set('message')} className="field" aria-invalid={!!err.message} aria-describedby={err.message ? 'e-message' : undefined} />
              {err.message && <p id="e-message" role="alert" className="text-red-400 text-xs mt-1">{err.message}</p>}
            </div>
            <button type="submit" disabled={st === 'loading'} className="btn btn-p w-full sm:w-auto disabled:opacity-60">
              {st === 'loading' ? <><Icon name="loader" size={16} className="animate-spin" />Sending...</> : <><Icon name="send" size={16} />Send Message</>}
            </button>
            <div aria-live="polite">
              {st === 'success' && <p className="text-emerald-400 text-sm inline-flex items-center gap-2"><Icon name="check" size={16} />Thanks! Your message has been sent.</p>}
              {st === 'error' && <p className="text-red-400 text-sm inline-flex items-center gap-2"><Icon name="alert" size={16} />Something went wrong. Please try again{s.email ? ` or email ${s.email}` : ''}.</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
