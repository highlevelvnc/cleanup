"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { WHATSAPP_URL, COMPANY } from "@/lib/constants";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      raf || (raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (imgRef.current) imgRef.current.style.transform = `translate3d(0, ${y * -0.04}px, 0)`;
        if (blob1.current) blob1.current.style.transform = `translate3d(0, ${y * 0.08}px, 0)`;
        if (blob2.current) blob2.current.style.transform = `translate3d(0, ${y * -0.06}px, 0)`;
        raf = 0;
      }));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-white pt-28 md:pt-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div ref={blob1} className="absolute -left-24 top-24 h-[420px] w-[420px] rounded-full bg-sky/25 blur-[110px]" />
        <div ref={blob2} className="absolute -right-24 top-1/3 h-[360px] w-[360px] rounded-full bg-mint/25 blur-[100px]" />
      </div>

      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-12 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-10 md:pb-28">
        <div>
          <span
            data-reveal
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-deep shadow-soft ring-1 ring-sky-100"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint" /> {COMPANY.region} · Ribatejo
          </span>

          <h1
            data-reveal
            data-delay="80"
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-deep text-balance md:text-6xl"
          >
            Limpeza profissional em{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Vila Franca de Xira
            </span>{" "}
            e arredores
          </h1>

          <p
            data-reveal
            data-delay="160"
            className="mt-6 max-w-xl text-base text-ink-soft md:text-lg"
          >
            Limpeza residencial, comercial e pós-obra com rapidez, cuidado e qualidade superior.
            Transformamos o seu espaço — orçamento gratuito em minutos.
          </p>

          <div data-reveal data-delay="240" className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02] hover:shadow-lift active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2 0-.3 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1-1.1 2.5 1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.4 4.8 2 .9 2.8.9 3.8.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.2-.2-.5-.4zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.4 21.5 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
              Pedir orçamento pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-sky-200 bg-white/70 px-7 py-4 text-sm font-semibold text-deep transition-all hover:border-sky hover:bg-white"
            >
              Ver serviços
            </a>
          </div>

          <div data-reveal data-delay="320" className="mt-10 flex items-center gap-6 text-xs text-ink-muted">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-mint/15 text-mint">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span>100% Garantia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-sky/15 text-sky">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 8v4l3 2" strokeLinecap="round"/><circle cx="12" cy="12" r="9"/></svg>
              </span>
              <span>Resposta &lt; 2h</span>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-deep/10 text-deep">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z"/></svg>
              </span>
              <span>+200 clientes satisfeitos</span>
            </div>
          </div>
        </div>

        <div ref={imgRef} data-reveal="right" className="relative">
          <div className="relative overflow-hidden rounded-3xl border-[6px] border-white shadow-lift">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80"
              alt="Sala de estar moderna e impecavelmente limpa"
              width={1200}
              height={900}
              className="aspect-[4/3] h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-lift md:block">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-mint/15 text-mint">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-deep">100% Garantia</p>
                <p className="text-xs text-ink-muted">Qualidade CleanUp</p>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 hidden animate-float rounded-2xl bg-white p-4 shadow-lift sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-sky/15 text-sky">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z"/></svg>
              </div>
              <div>
                <p className="text-xs text-ink-muted">Avaliação</p>
                <p className="text-sm font-semibold text-deep">4.9 / 5.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
