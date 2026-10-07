import Section from './Section.jsx';
import CardGrid from './CardGrid.jsx';
import { services } from '../data/portfolioData.js';
export default function Services() {
  return <Section id="services" eyebrow="Services" title="What I Can Build" sub="Reliable, scalable solutions for businesses and teams."><CardGrid items={services} /></Section>;
}
