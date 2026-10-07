import { Code2, Server, Layout, Brain, Wrench, Workflow, Users, Mail, Phone, MapPin, Github, Linkedin, Sun, Moon, Menu, X, ArrowRight, Download, Send, Terminal, Cpu, Sparkles, Bot, GitBranch, Layers, Briefcase, Rocket, Lock, Check, AlertCircle, Loader2, Zap, ShieldCheck, RefreshCw, Globe, Code } from 'lucide-react';
export const icons = { code2: Code2, server: Server, layout: Layout, brain: Brain, wrench: Wrench, workflow: Workflow, users: Users, mail: Mail, phone: Phone, pin: MapPin, github: Github, linkedin: Linkedin, sun: Sun, moon: Moon, menu: Menu, x: X, arrow: ArrowRight, download: Download, send: Send, terminal: Terminal, cpu: Cpu, sparkles: Sparkles, bot: Bot, branch: GitBranch, layers: Layers, briefcase: Briefcase, rocket: Rocket, lock: Lock, check: Check, alert: AlertCircle, loader: Loader2, zap: Zap, shield: ShieldCheck, refresh: RefreshCw, globe: Globe, code: Code };
export default function Icon({ name, ...p }) {
  const C = icons[name] || Code2;
  return <C aria-hidden="true" {...p} />;
}
