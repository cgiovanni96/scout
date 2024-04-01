export type Page = { name: string; path: string; hideFromNav?: boolean };

export const pages: Array<Page> = [
  { name: "Home", path: "/" },
  { name: "Chi siamo", path: "/chi-siamo" },
  { name: "Contatti", path: "/contatti" },
  { name: "Iscrizioni", path: "/iscrizioni" },
  { name: "Servizi", path: "/servizi", hideFromNav: true },
  { name: "Branche", path: "/branche", hideFromNav: true },
];
