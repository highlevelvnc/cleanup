"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { WHATSAPP_URL, COMPANY } from "@/lib/constants";
import {
  getGsap,
  isCoarsePointer,
  prefersReducedMotion,
  refreshTriggers,
} from "@/lib/gsapClient";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const imgWrap = useRef<HTMLDivElement>(null);
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const cta = useRef<HTMLAnchorElement>(null);
  const cardA = useRef<HTMLDivElement>(null);
  const cardB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = getGsap();
    if (!ctx || prefersReducedMotion() || !root.current) return;
    const { gsap } = ctx;

    const scope = gsap.context(() => {
      // Parallax discreto — usa scrub para ligar ao scroll, não ao tempo
      if (imgWrap.current) {
        gsap.to(imgWrap.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: root.current!,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }
      if (blob1.current) {
        gsap.to(blob1.current, {
          yPercent: 22,
          ease: "none",
          scrollTrigger: { trigger: root.current!, start: "top top", end: "bottom top", scrub: 0.8 },
        });
      }
      if (blob2.current) {
        gsap.to(blob2.current, {
          yPercent: -18,
          ease: "none",
          scrollTrigger: { trigger: root.current!, start: "top top", end: "bottom top", scrub: 0.8 },
        });
      }

      // Floating cards — entrada subtil em loop (já tem CSS animate-float, aqui adicionamos rotação ténue)
      if (cardA.current) {
        gsap.to(cardA.current, {
          y: "-=6",
          rotate: -1.5,
          duration: 4.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
      if (cardB.current) {
        gsap.to(cardB.current, {
          y: "+=8",
          rotate: 1.2,
          duration: 5.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
    }, root);

    refreshTriggers();
    return () => scope.revert();
  }, []);

  // Magnetic CTA — apenas em pointer fino (desktop), sem custo em mobile
  useEffect(() => {
    if (isCoarsePointer() || prefersReducedMotion() || !cta.current) return;
    const ctx = getGsap();
    if (!ctx) return;
    const { gsap } = ctx;
    const el = cta.current;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, { x: x * 0.18, y: y * 0.22, duration: 0.4, ease: "power3.out" });
    };
    const reset = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative isolate overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-white pt-28 md:pt-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div ref={blob1} className="absolute -left-24 top-24 h-[420px] w-[420px] rounded-full bg-sky/25 blur-[110px] will-change-transform" />
        <div ref={blob2} className="absolute -right-24 top-1/3 h-[360px] w-[360px] rounded-full bg-mint/25 blur-[100px] will-change-transform" />
        {/* Bolhas subtis em loop — CSS-only, max 4 elementos */}
        <span className="bubble" style={{ left: "8%", bottom: "-10%", width: 14, height: 14, animationDelay: "0s", animationDuration: "16s" }} />
        <span className="bubble" style={{ left: "32%", bottom: "-15%", width: 10, height: 10, animationDelay: "4s", animationDuration: "18s" }} />
        <span className="bubble hidden md:block" style={{ left: "62%", bottom: "-8%", width: 18, height: 18, animationDelay: "2s", animationDuration: "20s" }} />
        <span className="bubble hidden md:block" style={{ left: "85%", bottom: "-12%", width: 12, height: 12, animationDelay: "6s", animationDuration: "17s" }} />
      </div>

      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-12 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-10 md:pb-28">
        <div>
          <span
            data-reveal
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-deep shadow-soft ring-1 ring-sky-100"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-mint" />
            </span>
            Disponível esta semana · {COMPANY.region}
          </span>

          <h1
            data-reveal
            data-delay="80"
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-deep text-balance md:text-6xl"
          >
            A sua casa{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              impecável
            </span>{" "}
            sem mexer um dedo
          </h1>

          <p
            data-reveal
            data-delay="160"
            className="mt-6 max-w-xl text-base text-ink-soft md:text-lg"
          >
            Limpeza profissional em Vila Franca de Xira e arredores. Equipa de
            confiança, produtos próprios e resultados garantidos. Orçamento
            <strong className="font-semibold text-deep"> gratuito em 5 minutos</strong> pelo WhatsApp.
          </p>

          <div data-reveal data-delay="240" className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              ref={cta}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold text-white shadow-soft transition-shadow hover:shadow-lift active:scale-95 will-change-transform"
            >
              <span aria-hidden className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <svg viewBox="0 0 24 24" className="relative h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2 0-.3 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1-1.1 2.5 1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.4 4.8 2 .9 2.8.9 3.8.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.2-.2-.5-.4zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.4 21.5 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
              <span className="relative">Pedir orçamento pelo WhatsApp</span>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-sky-200 bg-white/70 px-7 py-4 text-sm font-semibold text-deep transition-all hover:border-sky hover:bg-white"
            >
              Ver serviços
            </a>
          </div>

          <div data-reveal data-delay="320" className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-ink-muted">
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
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-deep/10 text-deep">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z"/></svg>
              </span>
              <span>+200 clientes satisfeitos</span>
            </div>
          </div>
        </div>

        <div ref={imgWrap} data-reveal="right" className="relative will-change-transform">
          <div className="relative overflow-hidden rounded-3xl border-[6px] border-white shadow-lift">
            <Image
              src="https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?auto=format&fit=crop&w=1200&q=80"
              alt="Profissional CleanUp a polir uma superfície brilhante"
              width={1200}
              height={900}
              className="aspect-[4/3] h-auto w-full object-cover"
              priority
            />
            {/* Sparkles overlay — CSS-only, pausa em reduced-motion */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <span className="sparkle absolute left-[12%] top-[18%] h-3 w-3" style={{ animationDelay: "0.2s" }} />
              <span className="sparkle absolute right-[18%] top-[28%] h-4 w-4" style={{ animationDelay: "1.1s" }} />
              <span className="sparkle absolute left-[28%] bottom-[20%] h-2.5 w-2.5" style={{ animationDelay: "0.6s" }} />
              <span className="sparkle absolute right-[12%] bottom-[30%] h-3 w-3" style={{ animationDelay: "1.6s" }} />
              <span className="sparkle absolute left-[55%] top-[48%] h-3.5 w-3.5" style={{ animationDelay: "0.9s" }} />
            </div>
          </div>

          <div ref={cardA} className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-lift md:block will-change-transform">
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

          <div ref={cardB} className="absolute -top-6 -right-6 hidden rounded-2xl bg-white p-4 shadow-lift sm:block will-change-transform">
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
