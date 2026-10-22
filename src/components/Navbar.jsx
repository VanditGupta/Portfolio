import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";

import { navLinks, profile } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";

const sectionIds = navLinks.map((link) => link.id);
const mobileLinks = [...navLinks, { id: "resume", title: "Resume" }];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ThemeIcon = theme === "dark" ? Sun : Moon;

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        open
          ? "border-line bg-paper"
          : scrolled
          ? "border-line bg-paper/85 backdrop-blur-md"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-page items-center justify-between px-6 py-4" aria-label="Primary">
        <a href="#top" className="font-serif text-2xl tracking-tight" aria-label="Back to top">
          VG<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative block rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                  active === link.id ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-ink/[0.06]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2.5 text-muted transition-colors hover:bg-ink/[0.06] hover:text-ink"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            <ThemeIcon size={18} />
          </button>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn hidden border border-ink/20 py-2 hover:bg-ink hover:text-paper md:inline-flex"
          >
            <FileText size={15} /> Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2.5 text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6">
              {mobileLinks.map((link) => {
                const external = link.id === "resume";
                return (
                  <li key={link.id}>
                    <a
                      href={external ? profile.resume : `#${link.id}`}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-3 font-serif text-2xl ${
                        active === link.id ? "text-accent" : "text-ink"
                      }`}
                    >
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
