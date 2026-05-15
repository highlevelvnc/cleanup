import { WHATSAPP_URL } from "@/lib/constants";

const services = [
  {
    title: "Limpeza Residencial",
    text: "Mantenha o seu lar impecável com limpeza regular ou profunda adaptada à sua rotina.",
    tone: "from-sky-50 to-white",
    icon: (
      <path d="M3 12l9-9 9 9M5 10v10h14V10" strokeLinejoin="round" strokeLinecap="round" />
    ),
  },
  {
    title: "Limpeza Comercial",
    text: "Espaços que transmitem profissionalismo e higiene aos clientes e colaboradores.",
    tone: "from-mint/10 to-white",
    icon: (
      <>
        <path d="M3 21h18M5 21V7l7-4 7 4v14" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M9 12h.01M15 12h.01M9 16h.01M15 16h.01" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Escritórios",
    text: "Ambiente de trabalho limpo e organizado para maximizar produtividade e bem-estar.",
    tone: "from-sky-50 to-white",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 4v16" />
      </>
    ),
  },
  {
    title: "Pós-Obra",
    text: "Eliminamos pó e resíduos após obras ou remodelações, deixando tudo pronto a habitar.",
    tone: "from-mint/10 to-white",
    icon: (
      <>
        <path d="M14 7l3 3M5 19l3-9 8 8-9 3z" strokeLinejoin="round" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Limpeza Profunda",
    text: "Intervenção minuciosa em todos os cantos, ideal para mudanças ou limpezas de época.",
    tone: "from-sky-50 to-white",
    icon: (
      <>
        <path d="M9 3l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" />
        <path d="M19 14l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7z" />
      </>
    ),
  },
  {
    title: "Manutenção Regular",
    text: "Planos semanais ou quinzenais para manter a frescura constante do seu espaço.",
    tone: "from-mint/10 to-white",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 11h18" strokeLinecap="round" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-ink-50/40 py-24 md:py-32">
      <div className="mx-auto max-w-container px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">
            Nossos Serviços
          </span>
          <h2
            data-reveal
            data-delay="80"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-deep text-balance md:text-4xl"
          >
            Soluções de limpeza para todas as necessidades
          </h2>
          <p data-reveal data-delay="140" className="mt-4 text-ink-soft">
            Da casa de família ao escritório corporativo, adaptamos cada serviço ao espaço, à
            agenda e ao orçamento.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              data-delay={i * 70}
              className={`group relative overflow-hidden rounded-2xl border border-white bg-gradient-to-br ${s.tone} p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-lift`}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-sky shadow-soft transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
                  {s.icon}
                </svg>
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-deep">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky transition-all group-hover:gap-2.5"
              >
                Pedir orçamento
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
