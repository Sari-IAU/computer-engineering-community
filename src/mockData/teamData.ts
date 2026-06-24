export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin?: string;
    github?: string;
    telegram?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "علیرضا برزگر",
    role: "دبیر انجمن علمی",
    image: "",
    socials: { linkedin: "#", github: "#", telegram: "#" },
  },
  {
    id: 2,
    name: "عرفان علا",
    role: "عضو شورا",
    image: "",
    socials: { linkedin: "#", telegram: "#" },
  },
  {
    id: 3,
    name: "آرش نوکنده",
    role: "عضو شورا",
    image: "",
    socials: { linkedin: "#", telegram: "#" },
  },
  {
    id: 4,
    name: "مهدی آقاگلی",
    role: "عضو شورا",
    image: "",
    socials: { linkedin: "#", telegram: "#" },
  },
  {
    id: 5,
    name: "هستی نوحی",
    role: "عضو شورا",
    image: "",
    socials: { linkedin: "#", telegram: "#" },
  },
];