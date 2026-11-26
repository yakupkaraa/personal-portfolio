"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { ORBITS, STARS, type PlanetGradient } from "@/lib/ambient-data";

// Only a handful of particles keep moving. They are plain DOM nodes animated with
// transform/opacity (compositor only, no repaint). Everything else is painted once
// on a canvas and never touched again.
const MOVING_PLANETS = 3;
const MOVING_STARS = 10;

const PLANETS = ORBITS.flatMap((o) => o.planets.map((p) => ({ ...o, p })));

const PLANET_STOPS: Record<PlanetGradient, [string, string, string]> = {
  op1: ["#FFF1DE", "#F0A25C", "#C8662B"],
  op2: ["#E3ECFA", "#9DB6E0", "#5E78B0"],
  op3: ["#FBE9D2", "#E8B27E", "#8F5530"],
};

const planetBackground = (r: number, grad: PlanetGradient) => {
  const [a, b, c] = PLANET_STOPS[grad];
  return `radial-gradient(circle ${(1.6 * r).toFixed(1)}px at 35% 30%, ${a} 0%, ${b} 60%, ${c} 100%)`;
};

/**
 * Decorative background: a viewport-sized layer that stays put while the page
 * scrolls, with a static SVG underneath, a canvas painted once for the resting
 * particles and a few compositor-animated DOM particles on top.
 */
export function AmbientBackground() {
  const { resolvedTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !resolvedTheme) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dark = resolvedTheme === "dark";
    const small = window.matchMedia("(max-width: 767px)").matches;
    const keep = (n: number) => (small ? Math.ceil(n * 0.6) : n);

    const paint = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = rect.width;
      const h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      if (dark) {
        ctx.fillStyle = "#FFFFFF";
        for (const [cx, cy, r, dur, delay] of STARS.slice(MOVING_STARS, keep(STARS.length))) {
          const p = (((-delay / dur) % 1) + 1) % 1;
          ctx.globalAlpha = 0.2 + 0.65 * ((1 - Math.cos(p * Math.PI * 2)) / 2);
          ctx.beginPath();
          ctx.arc((cx / 100) * w, (cy / 100) * h, r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
        return;
      }

      for (const { ox, oy, p: [dx, dy, r, grad] } of PLANETS.slice(MOVING_PLANETS)) {
        const x = (ox / 100) * w + dx;
        const y = (oy / 100) * h + dy;
        const g = ctx.createRadialGradient(x - r + 0.7 * r, y - r + 0.6 * r, 0, x - r + 0.7 * r, y - r + 0.6 * r, 1.6 * r);
        const [a, b, c] = PLANET_STOPS[grad];
        g.addColorStop(0, a);
        g.addColorStop(0.6, b);
        g.addColorStop(1, c);
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    // Repaint only when the size really changes (rotation, window resize).
    let lastW = 0;
    let lastH = 0;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (Math.abs(width - lastW) < 1 && Math.abs(height - lastH) < 1) return;
      lastW = width;
      lastH = height;
      paint();
    });
    observer.observe(canvas);
    paint();

    return () => observer.disconnect();
  }, [resolvedTheme]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-clip rounded-[inherit]"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0 dark:hidden [background:radial-gradient(900px_520px_at_100%_0%,rgba(244,194,138,0.30),transparent_70%),radial-gradient(700px_480px_at_0%_38%,rgba(255,226,190,0.32),transparent_70%),radial-gradient(800px_520px_at_100%_72%,rgba(244,194,138,0.20),transparent_70%)]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/bg-day.svg" alt="" className="absolute inset-0 h-full w-full dark:hidden" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/bg-night.svg" alt="" className="absolute inset-0 hidden h-full w-full dark:block" />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        {/* Light: a few orbiting planets (rings are in bg-day.svg) */}
        <div className="absolute inset-0 dark:hidden">
          {PLANETS.slice(0, MOVING_PLANETS).map(({ ox, oy, dur, dir, p: [dx, dy, r, grad] }, i) => (
            <span
              key={`p${i}`}
              className="ambient-orbit"
              style={{
                left: `${ox}%`,
                top: `${oy}%`,
                animationDuration: `${dur}s`,
                animationDirection: dir < 0 ? "reverse" : "normal",
              }}
            >
              <span
                className="ambient-planet"
                style={{
                  left: dx - r,
                  top: dy - r,
                  width: r * 2,
                  height: r * 2,
                  background: planetBackground(r, grad),
                }}
              />
            </span>
          ))}
        </div>

        {/* Dark: a few twinkling stars */}
        <div className="absolute inset-0 hidden dark:block">
          {STARS.slice(0, MOVING_STARS).map(([cx, cy, r, dur, delay], i) => (
            <span
              key={`s${i}`}
              className="ambient-star"
              style={{
                left: `${cx}%`,
                top: `${cy}%`,
                width: r * 2,
                height: r * 2,
                marginLeft: -r,
                marginTop: -r,
                animationDuration: `${dur}s`,
                animationDelay: `${delay}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
