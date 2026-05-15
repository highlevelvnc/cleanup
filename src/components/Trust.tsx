const items = [
  {
    title: "Resposta em 2h",
    text: "Falamos consigo no mesmo dia, mesmo aos sábados.",
    icon: (
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" strokeLinejoin="round" strokeLinecap="round" />
    ),
  },
  {
    title: "Equipa de confiança",
    text: "Profissionais identificados, formados e segurados.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Garantia de qualidade",
    text: "Não ficou perfeito? Voltamos sem custos. Simples assim.",
    icon: (
      <>
        <path d="M3 21h18M7 21V10l5-7 5 7v11" strokeLinejoin="round" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Preço fechado",
    text: "Orçamento claro à partida. Sem surpresas no fim.",
    icon: (
      <>
        <path d="M14 3v5h5M9 13h6M9 17h4" strokeLinecap="round" />
        <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function Trust() {
  return (
    <section className="border-y border-ink-100/70 bg-white py-14 md:py-20">
      <div className="mx-auto max-w-container px-5 md:px-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              data-reveal
              data-delay={i * 80}
              className="group rounded-2xl border border-ink-100 bg-white p-5 text-center transition-all hover:-translate-y-1 hover:border-sky-200 hover:shadow-soft md:p-7"
            >
              <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient-soft text-sky transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                  {it.icon}
                </svg>
              </span>
              <h3 className="font-display text-base font-semibold text-deep md:text-lg">{it.title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
