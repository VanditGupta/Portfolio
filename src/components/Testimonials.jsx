import { Quote } from "lucide-react";

import { testimonials } from "../data";
import { spotlightProps } from "../utils/spotlight";
import Reveal from "./Reveal";
import Section from "./Section";

const Testimonials = () => (
  <Section id="kind-words" eyebrow="Kind words" title={<>What colleagues say<span className="text-accent">.</span></>}>
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={0.08 * i} className="h-full">
          <figure
            {...spotlightProps}
            className="spotlight flex h-full flex-col rounded-3xl border border-line bg-surface p-7"
          >
            <Quote size={26} className="text-accent" aria-hidden="true" />
            <blockquote className="mt-5 flex-1 leading-relaxed text-muted">{t.quote}</blockquote>
            <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-6">
              <img src={t.image} alt="" aria-hidden="true" loading="lazy" className="h-11 w-11 rounded-full object-cover" />
              <div className="min-w-0">
                <a
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-medium transition-colors hover:text-accent"
                >
                  {t.name}
                </a>
                <p className="text-xs leading-snug text-muted">{t.title}</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Testimonials;
