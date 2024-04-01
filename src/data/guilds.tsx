export type Guild = {
  label: string;
  image: string;
  color: string;
  linkId: string;
};

export const guilds: Array<Guild> = [
  {
    label: "LC",
    image: "/guilds/lc.png",
    color: "#FCC419",
    linkId: "#lc",
  },
  {
    label: "REPARTO",
    image: "/guilds/reparto.png",
    color: "#69B66B",
    linkId: "#eg",
  },
  {
    label: "CLAN",
    image: "/guilds/clan.png",
    color: "#D65959",
    linkId: "#rs",
  },
  {
    label: "CO.CA",
    image: "/guilds/coca.png",
    color: "#FFF",
    linkId: "",
  },
];
