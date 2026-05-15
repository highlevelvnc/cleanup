import { WHATSAPP_URL } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Limpeza Residencial",
    text: "Casas e apartamentos sempre frescos, sem ter de pegar num pano.",
    tone: "from-sky-50 to-white",
    bullets: ["Quartos, salas e WC", "Cozinha completa", "Aspirar e lavar pavimentos"],
    icon: <path d="M3 12l9-9 9 9M5 10v10h14V10" strokeLinejoin="round" strokeLinecap="round" />,
  },
  {
    title: "Limpeza Comercial",
    text: "Lojas, clínicas e ginásios com a higiene que os seus clientes notam.",
    tone: "from-mint/10 to-white",
    bullets: ["Horário fora de expediente", "Equipa fixa atribuída", "Reposição de consumíveis"],
    icon: (
      <>
        <path d="M3 21h18M5 21V7l7-4 7 4v14" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M9 12h.01M15 12h.01M9 16h.01M15 16h.01" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Escritórios",
    text: "Postos de trabalho desinfectados todos os dias, antes de a equipa chegar.",
    tone: "from-sky-50 to-white",
    bullets: ["Secretárias e teclados", "Salas de reunião e copa", "Lixos e WCs"],
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 4v16" />
      </>
    ),
  },
  {
    title: "Pós-Obra",
    text: "Tira o pó, o gesso e os restos de tinta. Entregamos a chave pronta a habitar.",
    tone: "from-mint/10 to-white",
    bullets: ["Remoção de pó fino", "Vidros e azulejos", "Resíduos de tinta e cola"],
    icon: <path d="M14 7l3 3M5 19l3-9 8 8-9 3z" strokeLinejoin="round" strokeLinecap="round" />,
  },
  {
    title: "Limpeza Profunda",
    text: "Aquela limpeza a fundo que nunca tem tempo para fazer. Cantos, fugas, tudo.",
    tone: "from-sky-50 to-white",
    bullets: ["Forno e exaustor", "Rodapés e calhas", "Por trás dos electrodomésticos"],
    icon: (
      <>
        <path d="M9 3l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" />
        <path d="M19 14l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7z" />
      </>
    ),
  },
  {
    title: "Manutenção Regular",
    text: "Planos semanais ou quinzenais. Esquece a limpeza, nós tratamos.",
    tone: "from-mint/10 to-white",
    bullets: ["Mesma equipa todas as vezes", "Calendário fixo", "Desconto fidelidade"],
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
            <ServiceCard
              key={s.title}
              index={i}
              title={s.title}
              text={s.text}
              tone={s.tone}
              icon={s.icon}
              bullets={s.bullets}
              href={WHATSAPP_URL}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
