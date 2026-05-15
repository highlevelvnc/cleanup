"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/constants";

const KEY = "cleanup_loader_seen";
const MIN_MS = 700;
const MAX_MS = 1500;

const bubbles = [
  { left: "12%", size: 18, delay: 0 },
  { left: "24%", size: 12, delay: 0.4 },
  { left: "38%", size: 22, delay: 0.9 },
  { left: "52%", size: 14, delay: 0.2 },
  { left: "66%", size: 20, delay: 0.7 },
  { left: "78%", size: 10, delay: 1.1 },
  { left: "88%", size: 16, delay: 0.5 },
];

export default function Loader() {
  const [done, setDone] = useState(false);
  const [unmount, setUnmount] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) {
      setSkip(true);
      return;
    }

    const start = performance.now();
    let dismissed = false;

    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_MS - elapsed);
      window.setTimeout(() => {
        sessionStorage.setItem(KEY, "1");
        document.body.style.overflow = "";
        setDone(true);
        window.setTimeout(() => setUnmount(true), 950);
      }, wait);
    };

    document.body.style.overflow = "hidden";

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
    }
    const cap = window.setTimeout(dismiss, MAX_MS);

    return () => {
      window.removeEventListener("load", dismiss);
      window.clearTimeout(cap);
      document.body.style.overflow = "";
    };
  }, []);

  if (skip || unmount) return null;

  return (
    <div className={`loader-mask ${done ? "is-done" : ""}`} aria-hidden={done}>
      {/* Bubbles a subir */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {bubbles.map((b, i) => (
          <span
            key={i}
            className="loader-bubble"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDelay: `${b.delay}s`,
              animationDuration: `${2.2 + (i % 3) * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center gap-5">
        <div className="relative">
          <span className="absolute inset-0 -z-10 rounded-full bg-brand-gradient opacity-25 blur-2xl motion-safe:animate-pulse" />
          <Image
            src="/logo.png"
            alt={COMPANY.name}
            width={180}
            height={50}
            priority
            className="h-12 w-auto motion-safe:animate-[float_3s_ease-in-out_infinite] md:h-14"
          />
        </div>

        <p className="text-xs font-medium uppercase tracking-[0.25em] text-deep/70">
          A polir os detalhes…
        </p>

        <div className="relative h-0.5 w-40 overflow-hidden rounded-full bg-sky-100">
          <span className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-brand-gradient motion-safe:animate-[loader-bar_1.2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes loader-bar {
          0%   { transform: translateX(-110%); }
          100% { transform: translateX(310%); }
        }
      `}</style>
    </div>
  );
}
