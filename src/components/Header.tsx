"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_URL, COMPANY } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,95,115,0.06)]"
          : "bg-white/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#top" className="flex items-center gap-2.5" aria-label={COMPANY.name}>
          <Image
            src="/logo.png"
            alt={`${COMPANY.name} logo`}
            width={140}
            height={40}
            className="h-8 w-auto md:h-10"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-sky"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.03] active:scale-95 md:inline-flex"
        >
          Pedir Orçamento
        </a>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative grid h-10 w-10 place-items-center rounded-full bg-white/70 shadow-soft md:hidden"
        >
          <span className={`block h-0.5 w-5 bg-deep transition-all ${open ? "translate-y-0 rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute block h-0.5 w-5 bg-deep transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-5 bg-deep transition-all ${open ? "translate-y-0 -rotate-45" : "translate-y-1.5"}`} />
        </button>
      </div>

      <div
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"} fixed inset-x-0 top-16 origin-top transition-all duration-300 ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="mx-4 mt-2 rounded-2xl bg-white p-6 shadow-lift">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-sky-50"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-soft"
          >
            Pedir Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
