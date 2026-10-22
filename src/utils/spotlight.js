// Spread onto an element with the `spotlight` class so its glow follows the cursor.
export const spotlightProps = {
  onMouseMove: (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  },
};
