import Section from './Section.jsx';
import CardGrid from './CardGrid.jsx';
import { why } from '../data/portfolioData.js';
export default function WhyHireMe() {
  return <Section id="why" eyebrow="Why Me" title="Why Work With Me?"><CardGrid items={why} /></Section>;
}
