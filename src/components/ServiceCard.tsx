"use client";

import { useRef } from "react";
import { isCoarsePointer, prefersReducedMotion } from "@/lib/gsapClient";

type Props = {
  index: number;
  title: string;
  text: string;
  tone: string;
  icon: React.ReactNode;
  bullets?: string[];
  href: string;
};

export default function ServiceCard({ index, title, text, tone, icon, bullets, href }: Props) {
  const card = useRef<HTMLElement>(null);
  const sheen = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.PointerEvent) => {
    if (isCoarsePointer() || prefersReducedMotion()) return;
    const el = card.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rx = (0.5 - y) * 6;
    const ry = (x - 0.5) * 8;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    if (sheen.current) {
      sheen.current.style.opacity = "1";
      sheen.current.style.background = `radial-gradient(420px circle at ${x * 100}% ${y * 100}%, rgba(0,174,239,0.18), transparent 45%)`;
    }
  };

  const onLeave = () => {
    const el = card.current;
    if (!el) return;
    el.style.transform = "";
    if (sheen.current) sheen.current.style.opacity = "0";
  };

  return (
    <article
      ref={card}
      data-reveal
      data-delay={index * 70}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`group relative overflow-hidden rounded-2xl border border-white bg-gradient-to-br ${tone} p-7 shadow-soft transition-[transform,box-shadow] duration-300 ease-out hover:shadow-lift will-change-transform`}
    >
      <span
        ref={sheen}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
      />
      <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white text-sky shadow-soft transition-colors group-hover:bg-brand-gradient group-hover:text-white">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
          {icon}
        </svg>
      </span>
      <h3 className="relative mt-5 font-display text-xl font-semibold text-deep">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
      {bullets && (
        <ul className="relative mt-4 space-y-1.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-xs text-ink-soft">
              <svg className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-mint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky transition-all group-hover:gap-2.5"
      >
        Pedir orçamento
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </article>
  );
}
