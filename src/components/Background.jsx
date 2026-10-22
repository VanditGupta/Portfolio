import { education, recognition } from "../data";
import Reveal from "./Reveal";
import Section from "./Section";

const Background = () => (
  <Section
    id="background"
    eyebrow="Background"
    title={<>Education &amp; recognition<span className="text-accent">.</span></>}
    className="bg-surface"
  >
    <div className="grid gap-16 md:grid-cols-2 md:gap-14">
      <div>
        <Reveal>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-ink">Education</h3>
        </Reveal>
        <ul className="divide-y divide-line border-y border-line">
          {education.map((item, i) => (
            <Reveal as="li" key={item.school} delay={0.06 * i} className="py-6">
              <p className="font-serif text-2xl">{item.school}</p>
              <p className="mt-1 text-sm text-accent">
                {item.degree}
                {item.period && <span className="text-muted"> · {item.period}</span>}
              </p>
              {item.note && <p className="mt-3 leading-relaxed text-muted">{item.note}</p>}
            </Reveal>
          ))}
        </ul>
      </div>

      <div>
        <Reveal>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-ink">Recognition</h3>
        </Reveal>
        <ul className="divide-y divide-line border-y border-line">
          {recognition.map((item, i) => (
            <Reveal as="li" key={item.title} delay={0.06 * i} className="py-5">
              <p className="font-serif text-xl">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default Background;
