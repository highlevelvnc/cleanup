import Image from "next/image";
import { COMPANY } from "@/lib/constants";

const stats = [
  { v: "+200", l: "Clientes satisfeitos" },
  { v: "+5 anos", l: "De experiência" },
  { v: "100%", l: "Garantia de qualidade" },
];

export default function About() {
  return (
    <section id="sobre" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-12 px-5 md:grid-cols-[1fr_1.1fr] md:gap-16 md:px-10">
        <div data-reveal="left" className="relative">
          <div className="absolute inset-0 -z-10 -translate-x-4 -translate-y-4 rounded-[2rem] bg-brand-gradient opacity-20 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border-[6px] border-white shadow-lift">
            <Image
              src="https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?auto=format&fit=crop&w=900&q=80"
              alt="Profissional CleanUp em serviço"
              width={900}
              height={1100}
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
        </div>

        <div>
          <span data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
            Sobre Nós
          </span>
          <h2
            data-reveal
            data-delay="80"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-deep text-balance md:text-4xl"
          >
            Excelência em cada detalhe, orgulhosamente local
          </h2>
          <p data-reveal data-delay="140" className="mt-5 text-ink-soft">
            A {COMPANY.name} nasceu em {COMPANY.region} com uma missão simples:
            transformar a forma como as pessoas vivem o seu espaço através de uma
            limpeza profissional, fiável e descomplicada.
          </p>
          <p data-reveal data-delay="200" className="mt-3 text-ink-soft">
            Servimos famílias, empresas e construtores em todo o Ribatejo com
            equipa formada, produtos cuidadosamente seleccionados e total
            transparência em cada orçamento.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.l}
                data-reveal
                data-delay={i * 90}
                className="rounded-2xl border border-ink-100 bg-gradient-to-b from-white to-sky-50/40 p-4 text-center"
              >
                <dt className="font-display text-2xl font-bold text-deep md:text-3xl">{s.v}</dt>
                <dd className="mt-1 text-xs text-ink-muted">{s.l}</dd>
              </div>
            ))}
          </dl>

          <div data-reveal data-delay="320" className="mt-8 flex flex-wrap gap-2">
            {COMPANY.serviceArea.map((c) => (
              <span
                key={c}
                className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-medium text-deep ring-1 ring-sky-100"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
