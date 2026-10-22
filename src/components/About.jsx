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

          <div className="mt-12 space-y-7">
            {skills.map((skill, i) => (
              <Reveal key={skill.group} delay={0.05 * i}>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-ink">{skill.group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <li key={item} className="chip hover:border-accent hover:text-accent">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
