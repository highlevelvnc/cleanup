"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "Que zonas é que cobrem?",
    a: "Vila Franca de Xira e toda a zona envolvente: Alverca, Póvoa de Santa Iria, Alhandra, Castanheira do Ribatejo e Vialonga. Se vive perto e não vê a sua localidade, mande mensagem na mesma — costumamos arranjar maneira.",
  },
  {
    q: "Quanto custa uma limpeza?",
    a: "O preço depende do tipo de serviço, da área e da frequência. Por isso fazemos sempre orçamento personalizado e gratuito — basta mandar fotos ou descrever o espaço pelo WhatsApp e tem resposta em horas.",
  },
  {
    q: "Levam o material e os produtos?",
    a: "Sim. A equipa chega com tudo o que é preciso: aspiradores profissionais, mopas, panos de microfibra e produtos eficazes mas seguros para crianças e animais. Não tem de comprar nada.",
  },
  {
    q: "Em quanto tempo conseguem agendar?",
    a: "Para limpezas regulares, normalmente em 2 a 5 dias. Para urgências (mudanças, pós-obra, visitas) tentamos sempre dar resposta no próprio dia ou no seguinte.",
  },
  {
    q: "E se eu não gostar do resultado?",
    a: "Voltamos sem custos adicionais para resolver o que não ficou bem. A nossa garantia é simples: ou fica satisfeito, ou nós voltamos.",
  },
  {
    q: "Posso confiar a chave da minha casa à equipa?",
    a: "Sim. Toda a equipa é identificada, contratada formalmente e segurada. Trabalhamos com vários clientes que nos deixam a chave todas as semanas — a confiança é a base do nosso negócio.",
  },
  {
    q: "Aceitam pagamento por MB Way?",
    a: "Sim. MB Way, transferência bancária ou dinheiro. O que for mais cómodo para si.",
  },
  {
    q: "Têm planos de manutenção regular?",
    a: "Sim. Planos semanais, quinzenais ou mensais com a mesma equipa atribuída. Quem faz manutenção tem desconto sobre o preço da limpeza avulsa.",
  },
];

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const update = () => setH(ref.current!.scrollHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white transition-shadow hover:shadow-soft">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
      >
        <span className="font-display text-base font-semibold text-deep md:text-lg">{q}</span>
        <span
          className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-sky-50 text-sky transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        style={{ height: open ? h : 0 }}
        className="transition-[height] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        <div ref={ref} className="px-5 pb-5 text-sm leading-relaxed text-ink-soft md:px-7 md:pb-6">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="bg-ink-50/40 py-24 md:py-32">
      <div className="mx-auto max-w-container px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">
            Perguntas Frequentes
          </span>
          <h2
            data-reveal
            data-delay="80"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-deep text-balance md:text-4xl"
          >
            Tudo o que precisa de saber antes de marcar
          </h2>
          <p data-reveal data-delay="140" className="mt-4 text-ink-soft">
            E se ainda tiver dúvidas, mande mensagem — respondemos sempre.
          </p>
        </div>

        <div data-reveal data-delay="180" className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </section>
  );
}
