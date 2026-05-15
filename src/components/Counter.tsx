"use client";

import { useEffect, useRef, useState } from "react";
import { getGsap, prefersReducedMotion, refreshTriggers } from "@/lib/gsapClient";

export default function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    if (prefersReducedMotion()) {
      setVal(to);
      return;
    }
    const ctx = getGsap();
    if (!ctx) return;
    const { gsap, ScrollTrigger } = ctx;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to,
      duration,
      ease: "power2.out",
      onUpdate: () => setVal(obj.v),
      scrollTrigger: { trigger: ref.current!, start: "top 85%", once: true },
    });
    refreshTriggers();
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.vars.trigger === ref.current && t.kill());
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {Math.round(val)}
      {suffix}
    </span>
  );
}
