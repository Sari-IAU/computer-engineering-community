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
      name: "امین رئیسی",
      role: "دبیر انجمن علمی",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=60",
      socials: { linkedin: "#", github: "#", telegram: "#" },
    },
    {
      id: 2,
      name: "ثنا صبوری",
      role: "مسئول روابط عمومی",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60",
      socials: { linkedin: "#", telegram: "#" },
    },
    {
      id: 3,
      name: "سینا کریمی",
      role: "توسعه‌دهنده فرانت‌اند",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60",
      socials: { linkedin: "#", github: "#" },
    },
    {
      id: 4,
      name: "آیدا نوری",
      role: "مدیر بخش مسابقات و هکاتون",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=60",
      socials: { linkedin: "#", telegram: "#" },
    },
  ];