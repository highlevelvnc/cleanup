import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import Counter from "@/components/Counter";

const stats: { value: React.ReactNode; l: string }[] = [
  { value: <><Counter to={200} prefix="+" /></>, l: "Clientes satisfeitos" },
  { value: <><Counter to={5} prefix="+" /> anos</>, l: "De experiência" },
  { value: <><Counter to={100} suffix="%" /></>, l: "Garantia de qualidade" },
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
            Limpeza feita por gente daqui, para gente daqui
          </h2>
          <p data-reveal data-delay="140" className="mt-5 text-ink-soft">
            A {COMPANY.name} é uma empresa local de {COMPANY.region}.
            Conhecemos a sua zona, falamos a sua língua e tratamos a sua casa
            como se fosse a nossa.
          </p>
          <p data-reveal data-delay="200" className="mt-3 text-ink-soft">
            Equipa formada, segurada e identificada. Produtos de qualidade
            profissional. Orçamento fechado à partida — o preço que combinamos
            é o preço que paga.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                data-reveal
                data-delay={i * 90}
                className="rounded-2xl border border-ink-100 bg-gradient-to-b from-white to-sky-50/40 p-4 text-center"
              >
                <dt className="font-display text-2xl font-bold text-deep md:text-3xl">{s.value}</dt>
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
