import { ArrowUpRight } from "lucide-react";

import { research } from "../data";
import { spotlightProps } from "../utils/spotlight";
import Reveal from "./Reveal";
import Section from "./Section";

const Research = () => (
  <Section id="research" eyebrow="Research" title={<>Published work<span className="text-accent">.</span></>} intro={research.note}>
    <ul className="divide-y divide-line border-y border-line">
      {research.papers.map((paper, i) => (
        <Reveal as="li" key={paper.link} delay={0.05 * i}>
          <a
            {...spotlightProps}
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="spotlight group -mx-4 grid gap-3 rounded-2xl px-4 py-8 md:grid-cols-12 md:items-center md:gap-8"
          >
            <span className="font-mono text-xs text-muted md:col-span-1">0{i + 1}</span>
            <div className="md:col-span-10">
              <h3 className="text-2xl leading-snug transition-colors duration-300 group-hover:text-accent md:text-3xl">
                {paper.title}
              </h3>
              <p className="mt-2 text-muted">{paper.description}</p>
            </div>
            <ArrowUpRight
              size={22}
              className="hidden justify-self-end text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:col-span-1 md:block"
            />
          </a>
        </Reveal>
      ))}
    </ul>
  </Section>
);

export default Research;
