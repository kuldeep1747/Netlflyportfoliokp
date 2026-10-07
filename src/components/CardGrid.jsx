import Icon from './Icon.jsx';
import { Reveal } from '../hooks.jsx';
export default function CardGrid({ items }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((c, k) => (
        <Reveal key={c.t} delay={(k % 3) * 100}>
          <div className="glass lift p-6 h-full">
            <span className="w-11 h-11 rounded-xl grid place-items-center mb-4 bg-gradient-to-br from-blue-500/30 to-cyan-400/30"><Icon name={c.icon} size={22} /></span>
            <h3 className="font-bold text-lg">{c.t}</h3>
            <p className="mu text-sm mt-2 leading-relaxed">{c.d}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
