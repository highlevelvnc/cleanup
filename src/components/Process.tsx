import Image from "next/image";

const steps = [
  {
    n: 1,
    title: "Contacto via WhatsApp",
    text: "Mande uma mensagem com fotos ou descrição do que precisa. Simples e rápido.",
  },
  {
    n: 2,
    title: "Orçamento imediato",
    text: "Recebe uma proposta clara e transparente, sem compromisso, no mesmo dia.",
  },
  {
    n: 3,
    title: "Agendamento à medida",
    text: "Marcamos o serviço ao seu ritmo, com horário que se adapta à sua rotina.",
  },
  {
    n: 4,
    title: "Limpeza executada",
    text: "Equipa profissional a entregar resultados impecáveis, com garantia de qualidade.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="relative overflow-hidden bg-white py-24 md:py-32">
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
            4 passos simples até ao seu espaço impecável
          </h2>

          <ol className="mt-10 space-y-8">
            {steps.map((s, i) => (
              <li
                key={s.n}
                data-reveal="left"
                data-delay={i * 90}
                className="group flex gap-5"
              >
                <span className="relative flex-shrink-0">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-gradient text-base font-bold text-white shadow-soft">
                    {s.n}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="absolute left-1/2 top-12 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-sky/40 to-transparent" />
                  )}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-lg font-semibold text-deep">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div data-reveal="right" className="relative">
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
