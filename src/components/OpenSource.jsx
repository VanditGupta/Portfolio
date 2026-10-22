import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, GitMerge, GitPullRequest } from "lucide-react";

import { openSource } from "../data";
import { spotlightProps } from "../utils/spotlight";
import Reveal, { ease } from "./Reveal";
import Section from "./Section";

const statusStyle = {
  merged: { label: "Merged", Icon: GitMerge, className: "border-accent/40 bg-accent/10 text-accent" },
  open: { label: "Open", Icon: GitPullRequest, className: "border-line text-muted" },
};

const PullRequest = ({ pr }) => {
  const { label, Icon, className } = statusStyle[pr.status];

  return (
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
  );
};

const OpenSource = () => {
  const [showAll, setShowAll] = useState(false);
  const { contributions, visible, orgs } = openSource;
  const merged = contributions.filter((pr) => pr.status === "merged").length;
  const extra = contributions.length - visible;

  return (
    <Section
      id="open-source"
      eyebrow="Open Source"
      title={<>Giving back<span className="text-accent">.</span></>}
      intro="Pull requests to projects I rely on, across cloud tooling, backend libraries and docs."
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-4">
          <p className="font-serif text-6xl">
            {contributions.length}
            <span className="ml-3 font-sans text-base text-muted">pull requests, {merged} merged</span>
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {orgs.map((org) => (
              <li key={org} className="chip">
                {org}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="md:col-span-8">
          <ul className="space-y-3">
            {contributions.slice(0, visible).map((pr, i) => (
              <Reveal as="li" key={pr.url} delay={0.04 * (i % 4)}>
                <PullRequest pr={pr} />
              </Reveal>
            ))}
          </ul>

          <AnimatePresence initial={false}>
            {showAll && (
              <motion.ul
                key="more"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                className="space-y-3 overflow-hidden"
              >
                {contributions.slice(visible).map((pr, i) => (
                  <li key={pr.url} className={i === 0 ? "pt-3" : ""}>
                    <PullRequest pr={pr} />
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <button
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="btn mt-6 border border-ink/20 hover:bg-ink hover:text-paper"
          >
            {showAll ? "Show fewer" : `Show ${extra} more`}
            <ChevronDown size={16} className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default OpenSource;
