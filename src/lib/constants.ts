export const WHATSAPP_URL =
  "https://wa.me/351XXXXXXXXX?text=" +
  encodeURIComponent(
    "Olá CleanUp, gostaria de pedir um orçamento para um serviço de limpeza."
  );

export const COMPANY = {
  name: "CleanUp",
  fullName: "CleanUp — Limpeza Profissional",
  tagline: "Limpeza profissional em Vila Franca de Xira e arredores",
  region: "Vila Franca de Xira",
  email: "geral@cleanup.pt",
  phone: "+351 XXX XXX XXX",
  address: "Vila Franca de Xira, Portugal",
  serviceArea: [
    "Vila Franca de Xira",
    "Alverca",
    "Póvoa de Santa Iria",
    "Alhandra",
    "Castanheira do Ribatejo",
    "Vialonga",
  ],
} as const;

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#resultados", label: "Resultados" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
  { href: "#contactos", label: "Contactos" },
] as const;
