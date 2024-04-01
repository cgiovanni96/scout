export type Guild = {
  label: string;
  image: string;
  color: string;
  linkId: string;
  hide?: boolean;
};

export const guilds: Array<Guild> = [
  {
    label: "Branca L/C",
    image: "/guilds/lc.png",
    color: "#FCC419",
    linkId: "#lc",
  },
  {
    label: "Branca E/G",
    image: "/guilds/reparto.png",
    color: "#69B66B",
    linkId: "#eg",
  },
  {
    label: "Branca R/S",
    image: "/guilds/clan.png",
    color: "#D65959",
    linkId: "#rs",
  },
  {
    label: "CO.CA",
    image: "/guilds/coca.png",
    color: "#FFF",
    linkId: "",
    hide: true,
  },
];
