import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import { earlierExperiences, experiences } from "../data";
import { spotlightProps } from "../utils/spotlight";
import Reveal, { ease } from "./Reveal";
import Section from "./Section";

// Logos sit on a white tile so they read in both themes; wordmarks get a wider tile.
const Logo = ({ src, name, wide }) => (
  <img
    src={src}
    alt=""
    aria-hidden="true"
    title={name}
    className={`h-11 shrink-0 rounded-xl border border-line bg-white object-contain ${
      wide ? "w-28 px-2 py-1.5" : "w-11 p-1"
    }`}
  />
);

const Role = ({ job }) => (
  <article
    {...spotlightProps}
    className="spotlight -mx-4 grid gap-5 rounded-2xl px-4 py-9 md:grid-cols-12 md:gap-8"
  >
    <div className="md:col-span-3">
      <p className="font-mono text-xs uppercase tracking-wider text-muted">{job.period}</p>
      {job.location && <p className="mt-1 text-sm text-muted">{job.location}</p>}
    </div>

    <div className="md:col-span-9">
      <div className="flex items-center gap-4">
        <Logo src={job.logo} name={job.company} wide={job.wideLogo} />
        <div>
          <h3 className="text-2xl leading-tight md:text-3xl">{job.role}</h3>
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm text-accent"
          >
            {job.company}
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {job.points.map((point) => (
          <li key={point} className="relative pl-5 leading-relaxed text-muted before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-3 before:bg-accent">
            {point}
          </li>
        ))}
      </ul>

      {job.tags && (
        <ul className="mt-6 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  </article>
);

const Experience = () => {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Where I've shipped<span className="text-accent">.</span></>}
      className="bg-surface"
    >
      <div className="divide-y divide-line border-y border-line">
        {experiences.map((job, i) => (
          <Reveal key={job.company} delay={Math.min(i, 2) * 0.05}>
            <Role job={job} />
          </Reveal>
        ))}

        <AnimatePresence initial={false}>
          {showEarlier && (
            <motion.div
              key="earlier"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className="divide-y divide-line overflow-hidden"
            >
              {earlierExperiences.map((job) => (
                <Role key={job.company} job={job} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={() => setShowEarlier((v) => !v)}
        aria-expanded={showEarlier}
        className="btn mt-8 border border-ink/20 hover:bg-ink hover:text-paper"
      >
        {showEarlier ? "Hide earlier roles" : "Show earlier roles"}
        <ChevronDown size={16} className={`transition-transform duration-300 ${showEarlier ? "rotate-180" : ""}`} />
      </button>
    </Section>
  );
};

export default Experience;
