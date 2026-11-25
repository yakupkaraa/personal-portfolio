"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

// Loads only the animation features we use (animate, whileInView, hover/tap, exit)
// instead of the full framer-motion bundle.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
