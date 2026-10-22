import { ArrowUpRight, GitMerge, GitPullRequest } from "lucide-react";

import { openSource } from "../data";
import { spotlightProps } from "../utils/spotlight";
import Reveal from "./Reveal";
import Section from "./Section";

const statusStyle = {
  merged: { label: "Merged", Icon: GitMerge, className: "border-accent/40 bg-accent/10 text-accent" },
  open: { label: "Open", Icon: GitPullRequest, className: "border-line text-muted" },
};

const OpenSource = () => {
  const merged = openSource.contributions.filter((pr) => pr.status === "merged").length;

  return (
    <Section
      id="open-source"
      eyebrow="Open Source"
      title={<>Giving back<span className="text-accent">.</span></>}
      intro="Pull requests to projects I rely on, across infrastructure-as-code, backend libraries, cloud tooling and docs."
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-4">
          <p className="font-serif text-6xl">
            {openSource.contributions.length}
            <span className="ml-3 font-sans text-base text-muted">pull requests, {merged} merged</span>
          </p>
          <p className="mb-4 mt-8 font-mono text-xs uppercase tracking-[0.18em] text-ink">Projects & organizations</p>
          <ul className="flex flex-wrap gap-2">
            {openSource.orgs.map((org) => (
              <li key={org} className="chip">
                {org}
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="space-y-3 md:col-span-8">
          {openSource.contributions.map((pr, i) => {
            const { label, Icon, className } = statusStyle[pr.status];
            return (
              <Reveal as="li" key={pr.url} delay={0.04 * (i % 4)}>
                <a
                  {...spotlightProps}
                  href={pr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spotlight group flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs text-muted">
                      {pr.org} · {pr.date}
                    </p>
                    <p className="mt-1.5 leading-snug">{pr.title}</p>
                  </div>
                  <span
                    className={`mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] ${className}`}
                  >
                    <Icon size={13} /> {label}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="mt-0.5 hidden shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:block"
                  />
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default OpenSource;
