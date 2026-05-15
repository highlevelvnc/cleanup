import Image from "next/image";
import { COMPANY, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="mx-auto max-w-container px-5 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image src="/logo.png" alt={COMPANY.name} width={140} height={40} className="h-10 w-auto" />
            <p className="mt-4 max-w-sm text-sm text-ink-soft">
              Limpeza profissional residencial, comercial e pós-obra em {COMPANY.region} e
              arredores. Resultados impecáveis, equipa de confiança.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-deep">Navegação</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a className="transition-colors hover:text-sky" href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-deep">Contactos</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>
                <a className="transition-colors hover:text-sky" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-sky" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </li>
              <li>{COMPANY.phone}</li>
              <li>{COMPANY.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-100 pt-6 text-xs text-ink-muted md:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.</p>
          <p>Feito com cuidado em Portugal.</p>
        </div>
      </div>
    </footer>
  );
}
