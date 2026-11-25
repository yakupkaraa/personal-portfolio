"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { DUST, ORBITS, STARS, type PlanetGradient } from "@/lib/ambient-data";

const FRAME_MS = 1000 / 30;

const PLANET_STOPS: Record<PlanetGradient, [string, string, string]> = {
  op1: ["#FFF1DE", "#F0A25C", "#C8662B"],
  op2: ["#E3ECFA", "#9DB6E0", "#5E78B0"],
  op3: ["#FBE9D2", "#E8B27E", "#8F5530"],
};

/**
 * Decorative background: a viewport-sized layer that stays put while the page
 * scrolls (so only one screen is ever painted), with a static SVG underneath
 * and every moving particle (dust, orbiting planets, twinkling stars) drawn on
 * one canvas instead of hundreds of individually animated SVG nodes.
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
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    // Fewer particles on phones; the layer is dense enough that nobody notices.
    const keep = (n: number) => (small ? Math.ceil(n * 0.6) : n);
    const dust = DUST.slice(0, keep(DUST.length));
    const stars = STARS.slice(0, keep(STARS.length));

    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      if (dark) {
        ctx.fillStyle = "#FFFFFF";
        for (const [cx, cy, r, dur, delay] of stars) {
          const p = (((t - delay) / dur) % 1 + 1) % 1;
          ctx.globalAlpha = 0.2 + 0.65 * ((1 - Math.cos(p * Math.PI * 2)) / 2);
          ctx.beginPath();
          ctx.arc((cx / 100) * w, (cy / 100) * h, r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
        return;
      }

      for (const [cx, cy, r, color, alpha, dur, delay] of dust) {
        const p = (((t - delay) / dur) % 1 + 1) % 1;
        const fade = p < 0.2 ? p / 0.2 : p < 0.8 ? 1 : (1 - p) / 0.2;
        ctx.globalAlpha = alpha * fade;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc((cx / 100) * w - 16 * p, (cy / 100) * h - 130 * p, r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const { ox, oy, dur, dir, planets } of ORBITS) {
        const angle = dir * ((t / dur) % 1) * Math.PI * 2;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const centerX = (ox / 100) * w;
        const centerY = (oy / 100) * h;
        for (const [dx, dy, r, grad] of planets) {
          const x = centerX + dx * cos - dy * sin;
          const y = centerY + dx * sin + dy * cos;
          const g = ctx.createRadialGradient(
            x - r + 0.35 * 2 * r,
            y - r + 0.3 * 2 * r,
            0,
            x - r + 0.35 * 2 * r,
            y - r + 0.3 * 2 * r,
            0.8 * 2 * r
          );
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
      }
      ctx.globalAlpha = 1;
    };

    const frame = (ts: number) => {
      raf = requestAnimationFrame(frame);
      if (ts - last < FRAME_MS) return;
      last = ts;
      draw(ts / 1000);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now() / 1000);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    if (!reduceMotion) raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
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
      </div>
    </div>
  );
}
