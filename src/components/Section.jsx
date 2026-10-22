import Reveal from "./Reveal";

const Section = ({ id, eyebrow, title, intro, children, className = "" }) => (
  <section id={id} className={`py-24 md:py-32 ${className}`}>
    <div className="mx-auto max-w-page px-6">
      <Reveal className="mb-14 max-w-2xl md:mb-20">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
      </Reveal>
      {children}
    </div>
  </section>
);

export default Section;
