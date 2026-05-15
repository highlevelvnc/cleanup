import { WHATSAPP_URL } from "@/lib/constants";

export default function CTA() {
  return (
    <section id="contactos" className="bg-white px-5 pb-24 md:px-10 md:pb-32">
      <div
        data-reveal
        className="relative mx-auto max-w-container overflow-hidden rounded-[2rem] bg-brand-gradient bg-[length:200%_200%] px-6 py-14 text-center text-white shadow-lift motion-safe:animate-gradient-drift md:px-16 md:py-20"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -left-10 -top-10 h-60 w-60 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute -right-10 -bottom-10 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
        </div>

        <h2 className="relative font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
          A sua casa pode estar impecável já amanhã
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/90">
          Mande uma mensagem agora — orçamento em <strong>5 minutos</strong>, sem
          compromisso. Resposta normalmente em menos de 2 horas.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-8 inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-deep shadow-soft transition-transform hover:scale-[1.03] active:scale-95"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-mint" fill="currentColor" aria-hidden>
            <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2 0-.3 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1-1.1 2.5 1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.4 4.8 2 .9 2.8.9 3.8.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.2-.2-.5-.4zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.4 21.5 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          <span className="relative">Falar agora pelo WhatsApp</span>
          <span aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-[300%]" />
        </a>
      </div>
    </section>
  );
}
