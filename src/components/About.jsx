import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";

import portrait from "../assets/profile/vandit.jpg";
import { about, profile, skills } from "../data";
import Reveal from "./Reveal";
import Section from "./Section";

const About = () => {
  const frame = useRef(null);
  const { scrollYProgress } = useScroll({ target: frame, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <Section id="about" eyebrow="About" title={<>Building AI that holds up in production<span className="text-accent">.</span></>}>
      <div className="grid gap-14 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-5">
          <div ref={frame} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-surface">
            <motion.img
              src={portrait}
              alt="Vandit Gupta on the Brooklyn Bridge with the Manhattan skyline behind"
              style={{ y: imageY, scale: 1.2 }}
              className="h-full w-full object-cover object-[50%_72%]"
              loading="lazy"
            />
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin size={14} className="text-accent" /> {profile.location}
          </p>
        </Reveal>

        <div className="md:col-span-7">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {about.map((paragraph, i) => (
              <Reveal key={i} delay={0.05 * i} as="p">
                {paragraph}
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-10">
            <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
              {skills.map((skill) => (
                <div key={skill.group} className="px-5 py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink">{skill.group}</dt>
                  <dd className="mt-2.5">
                    <ul className="flex flex-wrap gap-1.5">
                      {skill.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md bg-ink/[0.05] px-2.5 py-1 font-mono text-[11px] text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/10 hover:text-accent"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default About;
