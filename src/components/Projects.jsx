import { ArrowUpRight, Github } from "lucide-react";

import { projects } from "../data";
import { spotlightProps } from "../utils/spotlight";
import Reveal from "./Reveal";
import Section from "./Section";

const Tags = ({ tags }) => (
  <ul className="mt-5 flex flex-wrap gap-2">
    {tags.map((tag) => (
      <li key={tag} className="chip">
        {tag}
      </li>
    ))}
  </ul>
);

const Card = ({ project, index }) => (
  <Reveal delay={0.07 * (index % 3)} className="h-full">
    <a
      {...spotlightProps}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="spotlight group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper transition-all duration-500 hover:-translate-y-1 hover:border-accent/50"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-accent/20 via-accent/5 to-transparent p-6">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Featured</span>
            <span
              aria-hidden="true"
              className="select-none font-serif text-7xl italic leading-none text-ink/15 transition-transform duration-700 ease-out group-hover:translate-x-2 md:text-8xl"
            >
              0{index + 1}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-3xl">{project.name}</h3>
          <span className="mt-1.5 flex items-center gap-1 font-mono text-xs text-muted transition-colors group-hover:text-accent">
            <Github size={14} />
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>
        <p className="mt-3 flex-1 leading-relaxed text-muted">{project.description}</p>
        <Tags tags={project.tags} />
      </div>
    </a>
  </Reveal>
);

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Things I've built<span className="text-accent">.</span></>}
      className="bg-surface"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((project, i) => (
          <Card key={project.name} project={project} index={i} />
        ))}
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {rest.map((project, i) => (
          <Card key={project.name} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
