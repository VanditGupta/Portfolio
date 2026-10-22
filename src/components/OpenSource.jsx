import { ArrowUpRight, GitMerge } from "lucide-react";

import { openSource } from "../data";
import { spotlightProps } from "../utils/spotlight";
import Reveal from "./Reveal";
import Section from "./Section";

const OpenSource = () => (
  <Section
    id="open-source"
    eyebrow="Open Source"
    title={<>Giving back<span className="text-accent">.</span></>}
    intro="Merged contributions to projects I rely on, across infrastructure-as-code, backend libraries and docs."
  >
    <div className="grid gap-10 md:grid-cols-12 md:gap-12">
      <Reveal className="md:col-span-4">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-ink">Projects & organizations</p>
        <ul className="flex flex-wrap gap-2">
          {openSource.orgs.map((org) => (
            <li key={org} className="chip">
              {org}
            </li>
          ))}
        </ul>
      </Reveal>

      <ul className="space-y-3 md:col-span-8">
        {openSource.contributions.map((pr, i) => (
          <Reveal as="li" key={pr.url} delay={0.06 * i}>
            <a
              {...spotlightProps}
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="spotlight group flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
            >
              <GitMerge size={20} className="mt-1 shrink-0 text-accent" />
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs text-muted">
                  {pr.org} · {pr.date}
                </p>
                <p className="mt-1.5 leading-snug">{pr.title}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </a>
          </Reveal>
        ))}
      </ul>
    </div>
  </Section>
);

export default OpenSource;
