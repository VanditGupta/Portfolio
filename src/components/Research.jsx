import { ArrowUpRight } from "lucide-react";

import { research } from "../data";
import { spotlightProps } from "../utils/spotlight";
import Reveal from "./Reveal";
import Section from "./Section";

const Research = () => (
  <Section
    id="research"
    eyebrow="Research"
    title={<>Published work<span className="text-accent">.</span></>}
    intro={research.note}
  >
    <ul className="divide-y divide-line border-y border-line">
      {research.papers.map((paper, i) => (
        <Reveal as="li" key={paper.link} delay={0.05 * i}>
          <a
            {...spotlightProps}
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="spotlight group -mx-4 grid gap-6 rounded-2xl px-4 py-9 md:grid-cols-12 md:items-center md:gap-8"
          >
            <span className="font-mono text-xs text-muted md:col-span-1">0{i + 1}</span>

            <div className="md:col-span-8">
              <h3 className="text-2xl leading-snug transition-colors duration-300 group-hover:text-accent md:text-3xl">
                {paper.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{paper.description}</p>
              <p className="mt-3 text-sm text-muted/80">{paper.authors}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-xl border border-line md:col-span-3 md:block">
              <img
                src={paper.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className={`h-full w-full grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 ${
                  paper.contain ? "bg-white object-contain p-3" : "object-cover"
                }`}
              />
              <span className="absolute right-2 top-2 rounded-full bg-paper/90 p-1.5 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowUpRight size={14} />
              </span>
            </div>
          </a>
        </Reveal>
      ))}
    </ul>
  </Section>
);

export default Research;
