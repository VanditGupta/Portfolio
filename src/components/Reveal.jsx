import { motion } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1];

// Fades and lifts children into place the first time they scroll into view.
const Reveal = ({ children, delay = 0, y = 24, as = "div", className = "" }) => {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default Reveal;
