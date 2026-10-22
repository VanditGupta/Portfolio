import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { profile } from "../data";
import Reveal from "./Reveal";
import Section from "./Section";

const SERVICE_ID = "service_49r0dno";
const TEMPLATE_ID = "template_msf6l03";
const PUBLIC_KEY = "srNZxeFq_DT59du6r";

const fieldClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/60 transition-colors duration-300 focus:border-accent focus:outline-none";

const links = [
  { label: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "GitHub", href: profile.github, Icon: Github },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const onChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Vandit",
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's build something<span className="text-accent">.</span></>} className="bg-surface">
      <div className="grid gap-14 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-5">
          <p className="text-lg leading-relaxed text-muted">
            I'm always up for talking about AI infrastructure, open source or new opportunities. The fastest way to
            reach me is email.
          </p>
          <ul className="mt-8 space-y-2">
            {links.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-line bg-paper px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} className="text-accent" /> {label}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7">
          <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-line bg-paper p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-muted">Name</span>
                <input name="name" value={form.name} onChange={onChange} required autoComplete="name" placeholder="Your name" className={fieldClass} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-muted">Email</span>
                <input name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm text-muted">Message</span>
              <textarea name="message" rows={6} value={form.message} onChange={onChange} required placeholder="What would you like to talk about?" className={`${fieldClass} resize-none`} />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn bg-ink text-paper hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <p role="status" aria-live="polite" className={`text-sm ${status === "error" ? "text-red-600" : "text-accent"}`}>
                {status === "sent" && "Thanks! I'll get back to you soon."}
                {status === "error" && `Something went wrong. Please email ${profile.email} instead.`}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
