"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  {
    quote:
      "Marcaram para o sábado de manhã, chegaram à hora e a cozinha ficou irreconhecível. Vou passar a contratar todos os meses.",
    name: "Joana M.",
    role: "Apartamento · Alverca",
    initials: "JM",
  },
  {
    quote:
      "Pedi limpeza pós-obra à última hora e responderam em menos de uma hora. Equipa simpática e trabalho impecável.",
    name: "Rui P.",
    role: "Construtor · Vila Franca de Xira",
    initials: "RP",
  },
  {
    quote:
      "Tenho uma clínica e mudei várias vezes de empresa. A CleanUp é a primeira em que não preciso de andar a verificar nada.",
    name: "Dra. Sofia C.",
    role: "Clínica · Póvoa de Santa Iria",
    initials: "SC",
  },
  {
    quote:
      "Preço justo e transparente. Disseram o valor à partida e foi exactamente esse. Recomendo a 100%.",
    name: "André F.",
    role: "Moradia · Castanheira",
    initials: "AF",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!paused.current) setI((v) => (v + 1) % items.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-container px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
            Quem confia
          </span>
          <h2
            data-reveal
            data-delay="80"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-deep text-balance md:text-4xl"
          >
            Histórias reais de clientes locais
          </h2>
          <div data-reveal data-delay="140" className="mt-3 flex items-center justify-center gap-1.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, k) => (
              <svg key={k} className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
              </svg>
            ))}
            <span className="ml-2 text-sm font-medium text-ink-soft">4.9 / 5 · +50 avaliações</span>
          </div>
        </div>

        <div
          data-reveal
          data-delay="200"
          className="relative mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
          onFocus={() => (paused.current = true)}
          onBlur={() => (paused.current = false)}
        >
          <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br from-sky-50/60 to-white p-8 shadow-soft md:p-12">
            <svg
              aria-hidden
              className="absolute -top-2 left-6 h-20 w-20 text-sky/15"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2H4v2h1a4 4 0 004-4V7zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2h-1v2h1a4 4 0 004-4V7z" />
            </svg>

            <div ref={track} className="relative min-h-[180px]">
              {items.map((t, k) => (
                <article
                  key={t.name}
                  aria-hidden={k !== i}
                  className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    k === i
                      ? "translate-x-0 opacity-100"
                      : k < i
                      ? "-translate-x-6 opacity-0"
                      : "translate-x-6 opacity-0"
                  }`}
                >
                  <p className="font-display text-lg leading-relaxed text-deep md:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-deep">{t.name}</p>
                      <p className="text-xs text-ink-muted">{t.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Testemunhos">
            {items.map((_, k) => (
              <button
                key={k}
                role="tab"
                aria-selected={k === i}
                aria-label={`Testemunho ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-brand-gradient" : "w-1.5 bg-ink-200 hover:bg-ink-soft"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
