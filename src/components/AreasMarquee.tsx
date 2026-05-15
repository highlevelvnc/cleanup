import { COMPANY } from "@/lib/constants";

export default function AreasMarquee() {
  const items = [...COMPANY.serviceArea, ...COMPANY.serviceArea];
  return (
    <section
      aria-label="Áreas de cobertura"
      className="relative overflow-hidden border-y border-ink-100 bg-white py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />

      <div className="flex items-center gap-10 motion-safe:animate-[marquee_28s_linear_infinite]">
        {items.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="flex flex-shrink-0 items-center gap-2 text-sm font-medium text-ink-soft"
          >
            <svg className="h-4 w-4 text-mint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {c}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
