import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";

import { profile, stats } from "../data";
import { ease } from "./Reveal";

const CountUp = ({ prefix = "", value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, prefix, value, suffix]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const socials = [
  { label: "GitHub", href: profile.github, Icon: Github },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

const Hero = () => (
  <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-16 pt-32">
    {/* Ambient background: two slow-drifting glows and a faded grid. */}
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <motion.div
        animate={{ x: [0, 70, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-24 top-1/4 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[110px]"
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 bottom-1/4 h-[26rem] w-[26rem] rounded-full bg-ink/10 blur-[110px]"
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--ink)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--ink)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
    </div>

    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
      className="mx-auto w-full max-w-[69rem]"
    >
      <motion.p variants={item} className="eyebrow mb-8 flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        {profile.role} · {profile.employer}
      </motion.p>

      <motion.h1
        variants={item}
        className="font-serif text-[clamp(3.75rem,13vw,10rem)] leading-[0.9] tracking-tight"
      >
        Vandit
        <br />
        <span className="italic text-accent">Gupta</span>
      </motion.h1>

      <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
        {profile.tagline}
      </motion.p>

      <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
        <a href="#experience" className="btn bg-ink text-paper hover:-translate-y-0.5 hover:shadow-lg">
          View my work
        </a>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn border border-ink/20 hover:bg-ink hover:text-paper"
        >
          <FileText size={16} /> Resume
        </a>
        <div className="-ml-3 flex items-center gap-1 sm:ml-1">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full p-3 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/[0.06] hover:text-ink"
            >
              <Icon size={19} />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8 md:mt-24 md:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-serif text-5xl md:text-6xl">
              <CountUp prefix={stat.prefix} value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>

    <motion.a
      href="#about"
      aria-label="Scroll to about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6 }}
      className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted md:block"
    >
      <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.2 }} className="block">
        <ArrowDown size={18} />
      </motion.span>
    </motion.a>
  </section>
);

export default Hero;
