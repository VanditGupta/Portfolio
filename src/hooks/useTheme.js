import { useCallback, useState } from "react";

const STORAGE_KEY = "vg-theme";

const readTheme = () =>
  document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";

export const useTheme = () => {
  const [theme, setTheme] = useState(readTheme);

  // The choice is saved only when the visitor toggles it, so first visits always start light.
  const toggle = useCallback(() => {
    const next = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }, []);

  return [theme, toggle];
};
