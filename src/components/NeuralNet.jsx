import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { MousePointerClick } from "lucide-react";

// A small neural network you can poke. Nodes drift and lean toward the cursor,
// and a click sends a signal through the layers to one of three outputs.
const LAYERS = [4, 6, 6, 3];
const OUTPUTS = ["RAG", "Voice", "Agents"];
const STEP_MS = 280;

const buildNodes = () =>
  LAYERS.flatMap((count, layer) =>
    Array.from({ length: count }, (_, i) => ({
      layer,
      i,
      // Normalised rest position; the drawing code scales it to the canvas.
      x: 0.1 + (layer / (LAYERS.length - 1)) * 0.66,
      y: (i + 1) / (count + 1),
      phase: Math.random() * Math.PI * 2,
      energy: 0,
    }))
  );

const readColors = () => {
  const css = getComputedStyle(document.documentElement);
  const rgb = (name) => css.getPropertyValue(name).trim().split(/\s+/).join(",");
  return { ink: rgb("--ink"), accent: rgb("--accent"), muted: rgb("--muted") };
};

const NeuralNet = () => {
  const reduceMotion = useReducedMotion();
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const [runs, setRuns] = useState(0);
  const [result, setResult] = useState(null);
  const api = useRef({});

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const nodes = buildNodes();
    const byLayer = LAYERS.map((_, l) => nodes.filter((n) => n.layer === l));
    const edges = [];
    byLayer.forEach((layer, l) => {
      if (l === 0) return;
      byLayer[l - 1].forEach((from) => layer.forEach((to) => edges.push({ from, to, l, pulse: -1 })));
    });

    let colors = readColors();
    let width = 0;
    let height = 0;
    let mouse = null;
    let raf = 0;
    let visible = true;
    let winner = -1;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = wrap.clientWidth;
      height = wrap.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const pos = (n, t) => {
      let x = n.x * width + Math.sin(t / 1800 + n.phase) * 6;
      let y = n.y * height + Math.cos(t / 2200 + n.phase) * 6;
      if (mouse) {
        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const d = Math.hypot(dx, dy);
        if (d < 140) {
          const pull = (1 - d / 140) * 14;
          x += (dx / (d || 1)) * pull;
          y += (dy / (d || 1)) * pull;
        }
      }
      return { x, y };
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      const p = new Map(nodes.map((n) => [n, pos(n, t)]));

      edges.forEach((e) => {
        const a = p.get(e.from);
        const b = p.get(e.to);
        let glow = 0;
        if (mouse) {
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          glow = Math.max(0, 1 - Math.hypot(mouse.x - mx, mouse.y - my) / 160);
        }
        ctx.strokeStyle = `rgba(${colors.ink},${0.07 + glow * 0.22})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        if (e.pulse >= 0) {
          const k = Math.min((t - e.pulse) / STEP_MS, 1);
          if (k >= 1) {
            e.pulse = -1;
          } else {
            ctx.fillStyle = `rgba(${colors.accent},${1 - k * 0.3})`;
            ctx.beginPath();
            ctx.arc(a.x + (b.x - a.x) * k, a.y + (b.y - a.y) * k, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      nodes.forEach((n) => {
        const { x, y } = p.get(n);
        n.energy = Math.max(0, n.energy - 0.012);
        const near = mouse ? Math.max(0, 1 - Math.hypot(mouse.x - x, mouse.y - y) / 90) : 0;
        const glow = Math.max(n.energy, near * 0.6);
        const isWinner = n.layer === LAYERS.length - 1 && n.i === winner;

        if (glow > 0.02) {
          ctx.fillStyle = `rgba(${colors.accent},${glow * 0.22})`;
          ctx.beginPath();
          ctx.arc(x, y, 8 + glow * 12, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = glow > 0.05 ? `rgba(${colors.accent},${0.55 + glow * 0.45})` : `rgba(${colors.ink},0.75)`;
        ctx.beginPath();
        ctx.arc(x, y, n.layer === LAYERS.length - 1 ? 7 : 5, 0, Math.PI * 2);
        ctx.fill();

        if (n.layer === LAYERS.length - 1) {
          ctx.font = '500 12px "JetBrains Mono", monospace';
          ctx.textBaseline = "middle";
          ctx.fillStyle = isWinner && n.energy > 0.05 ? `rgb(${colors.accent})` : `rgba(${colors.muted},0.9)`;
          ctx.fillText(OUTPUTS[n.i], x + 16, y);
        }
      });
    };

    const loop = (t) => {
      draw(t);
      if (visible) raf = requestAnimationFrame(loop);
    };

    // Fire a signal layer by layer, ending on one randomly chosen output.
    const last = LAYERS.length - 1;
    const fire = () => {
      winner = Math.floor(Math.random() * OUTPUTS.length);
      // Decide up front which nodes light up, so pulses never depend on timer order.
      const lit = byLayer.map((layer, l) => (l === 0 || l === last ? layer : layer.filter(() => Math.random() > 0.35)));
      lit[0].forEach((n) => (n.energy = 0.6 + Math.random() * 0.4));

      for (let l = 1; l < LAYERS.length; l++) {
        setTimeout(() => {
          const now = performance.now();
          edges.filter((e) => e.l === l && lit[l - 1].includes(e.from)).forEach((e) => (e.pulse = now));
          setTimeout(() => {
            byLayer[l].forEach((n) => {
              if (l === last) n.energy = n.i === winner ? 1 : 0.15;
              else n.energy = lit[l].includes(n) ? 0.5 + Math.random() * 0.5 : 0;
            });
            if (reduceMotion) {
              draw(performance.now());
              setTimeout(() => {
                nodes.forEach((n) => (n.energy = 0));
                draw(performance.now());
              }, 1500);
            }
          }, STEP_MS);
        }, (l - 1) * STEP_MS);
      }

      const score = 0.9 + Math.random() * 0.09;
      setTimeout(() => {
        setRuns((r) => r + 1);
        setResult({ label: OUTPUTS[winner], score: score.toFixed(2) });
      }, last * STEP_MS);
    };

    api.current.fire = fire;

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouse = null;
    };

    const ro = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    ro.observe(wrap);

    const mo = new MutationObserver(() => {
      colors = readColors();
      draw(performance.now());
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    // Pause the animation loop while the hero is scrolled out of view.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduceMotion) raf = requestAnimationFrame(loop);
    });
    io.observe(wrap);

    resize();
    draw(performance.now());
    if (!reduceMotion) {
      wrap.addEventListener("pointermove", onMove);
      wrap.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mo.disconnect();
      io.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [reduceMotion]);

  return (
    <div className="relative">
      <button
        ref={wrapRef}
        type="button"
        onClick={() => api.current.fire?.()}
        aria-label="Run an inference through the neural network"
        className="block h-[26rem] w-full cursor-pointer overflow-hidden rounded-3xl border border-line bg-surface/70 backdrop-blur-sm transition-colors duration-300 hover:border-accent/40"
      >
        <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
      </button>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-5 pb-4 font-mono text-xs text-muted">
        <span className="flex items-center gap-2">
          <MousePointerClick size={14} className={runs === 0 ? "animate-pulse text-accent" : ""} />
          {runs === 0 ? "Click to run inference" : `inference #${runs}`}
        </span>
        <span aria-live="polite" className="text-ink">
          {result && (
            <>
              → <span className="text-accent">{result.label}</span> {result.score}
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default NeuralNet;
