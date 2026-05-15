"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const PAIRS = [
  {
    before:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80",
    after:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
    label: "Sala — limpeza profunda",
  },
  {
    before:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    after:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    label: "Cozinha — pós-obra",
  },
];

function Slider({ before, after, label }: (typeof PAIRS)[number]) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <div
      ref={ref}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-soft select-none"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as Element).setPointerCapture?.(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
      role="slider"
      aria-label={`Antes e depois — ${label}`}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
      }}
    >
      <Image src={after} alt={`${label} — depois`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <Image src={before} alt={`${label} — antes`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
        Antes
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-mint px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
        Depois
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_18px_rgba(0,0,0,0.35)]"
        style={{ left: `${pos}%` }}
      >
        <div className="pointer-events-auto absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-11 w-11 cursor-ew-resize place-items-center rounded-full bg-white shadow-lift ring-2 ring-sky">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-deep" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 6l-4 6 4 6M15 6l4 6-4 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="resultados" className="bg-ink-50/40 py-24 md:py-32">
      <div className="mx-auto max-w-container px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">
            Antes & Depois
          </span>
          <h2
            data-reveal
            data-delay="80"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-deep text-balance md:text-4xl"
          >
            Resultados que falam por si
          </h2>
          <p data-reveal data-delay="140" className="mt-4 text-ink-soft">
            Arrasta o slider para veres a transformação real em cada serviço.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PAIRS.map((p, i) => (
            <div key={p.label} data-reveal="scale" data-delay={i * 120}>
              <Slider {...p} />
              <p className="mt-3 text-center text-sm font-medium text-ink-soft">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
