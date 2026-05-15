"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { getGsap, prefersReducedMotion, refreshTriggers } from "@/lib/gsapClient";

const steps = [
  { n: 1, title: "Diga-nos o que precisa", text: "Uma mensagem no WhatsApp com 2 ou 3 fotos chega. Se preferir falar, ligamos." },
  { n: 2, title: "Recebe o orçamento", text: "Preço fechado em poucas horas. Sem letras pequenas, sem custos escondidos." },
  { n: 3, title: "Marcamos quando der jeito", text: "Manhã, tarde, fim-de-semana. Adaptamo-nos à sua agenda e ao seu espaço." },
  { n: 4, title: "Tratamos de tudo", text: "A equipa chega à hora, com tudo o que é preciso. Você só tem de aproveitar o resultado." },
];

export default function Process() {
  const root = useRef<HTMLElement>(null);
  const list = useRef<HTMLOListElement>(null);
  const line = useRef<HTMLSpanElement>(null);
  const img = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = getGsap();
    if (!ctx || prefersReducedMotion() || !root.current) return;
    const { gsap } = ctx;

    const scope = gsap.context(() => {
      // Linha vertical desenha-se com scrub conforme se entra na lista
      if (line.current && list.current) {
        gsap.fromTo(
          line.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: list.current,
              start: "top 75%",
              end: "bottom 75%",
              scrub: 0.6,
            },
          }
        );
      }

      // Imagem com leve parallax
      if (img.current) {
        gsap.to(img.current, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: root.current!,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }
    }, root);

    refreshTriggers();
    return () => scope.revert();
  }, []);

  return (
    <section ref={root} id="processo" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-14 px-5 md:grid-cols-2 md:gap-20 md:px-10">
        <div>
          <span data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
            Como Funciona
          </span>
          <h2
            data-reveal
            data-delay="80"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-deep text-balance md:text-4xl"
          >
            Da primeira mensagem ao &ldquo;que limpeza!&rdquo; em 4 passos
          </h2>

          <ol ref={list} className="relative mt-10 space-y-8">
            <span
              aria-hidden
              className="pointer-events-none absolute left-6 top-6 bottom-6 w-px origin-top -translate-x-1/2 bg-gradient-to-b from-sky via-mint to-mint/0"
              ref={line}
            />
            {steps.map((s, i) => (
              <li key={s.n} data-reveal="left" data-delay={i * 90} className="group relative flex gap-5">
                <span className="relative z-10 flex-shrink-0">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-gradient text-base font-bold text-white shadow-soft ring-4 ring-white">
                    {s.n}
                  </span>
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-lg font-semibold text-deep">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div ref={img} data-reveal="right" className="relative will-change-transform">
          <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2rem] bg-brand-gradient opacity-25 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border-[6px] border-white shadow-lift">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1100&q=80"
              alt="Equipa CleanUp com equipamento profissional"
              width={1100}
              height={1300}
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
