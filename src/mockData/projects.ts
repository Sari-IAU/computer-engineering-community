export interface TeamMember {
    name: string;
    initials: string;
    color: string;
  }
  
 export  interface Project {
    id: number;
    title: string;
    description: string;
    techs: string[];
    team: TeamMember[];
    gradient: string;
    githubUrl?: string;
    demoUrl?: string;
  }
  
  export const PROJECTS: Project[] = [
    {
      id: 1,
      title: "ربات تشخیص چهره",
      description: "سیستم تشخیص چهره real-time با استفاده از شبکه‌های عصبی کانولوشنال، قابل اجرا روی Raspberry Pi.",
      techs: ["Python", "OpenCV", "TensorFlow", "Raspberry Pi"],
      team: [
        { name: "علی رضایی", initials: "ع.ر", color: "bg-blue-500" },
        { name: "سارا کریمی", initials: "س.ک", color: "bg-violet-500" },
        { name: "نگار تهرانی", initials: "ن.ت", color: "bg-emerald-500" },
      ],
      gradient: "from-blue-600 via-indigo-600 to-violet-700",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "پلتفرم آموزش آنلاین",
      description: "سیستم مدیریت یادگیری با قابلیت ویدیو، کوئیز و پیشرفت تحصیلی برای دانشجویان دانشکده.",
      techs: ["React", "Node.js", "PostgreSQL", "Redis"],
      team: [
        { name: "محمد احمدی", initials: "م.ا", color: "bg-amber-500" },
        { name: "علی رضایی", initials: "ع.ر", color: "bg-blue-500" },
        { name: "سارا کریمی", initials: "س.ک", color: "bg-violet-500" },
        { name: "نگار تهرانی", initials: "ن.ت", color: "bg-emerald-500" },
      ],
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: 3,
      title: "تحلیل داده بورس",
      description: "ابزار تحلیل تکنیکال بازار بورس ایران با مدل‌های پیش‌بینی ML و داشبورد تعاملی.",
      techs: ["Python", "Pandas", "scikit-learn", "Plotly"],
      team: [
        { name: "سارا کریمی", initials: "س.ک", color: "bg-violet-500" },
        { name: "محمد احمدی", initials: "م.ا", color: "bg-amber-500" },
      ],
      gradient: "from-amber-600 via-orange-600 to-rose-700",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "اپلیکیشن مدیریت وظایف",
      description: "اپ موبایل cross-platform برای مدیریت پروژه‌های تیمی با سیستم نوتیفیکیشن هوشمند.",
      techs: ["Flutter", "Dart", "Firebase", "Supabase"],
      team: [
        { name: "نگار تهرانی", initials: "ن.ت", color: "bg-emerald-500" },
        { name: "علی رضایی", initials: "ع.ر", color: "bg-blue-500" },
        { name: "محمد احمدی", initials: "م.ا", color: "bg-amber-500" },
      ],
      gradient: "from-rose-600 via-pink-600 to-fuchsia-700",
      githubUrl: "#",
      demoUrl: "#",
    },
  ];