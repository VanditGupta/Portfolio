import { profile } from "../data";

const Footer = () => (
  <footer className="border-t border-line px-6 py-10">
    <div className="mx-auto flex max-w-[69rem] flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p>Built with React, Tailwind and Framer Motion.</p>
    </div>
  </footer>
);

export default Footer;
