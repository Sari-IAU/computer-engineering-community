export interface FooterLink {
    label: string;
    href: string;
  }
  
  export interface FooterSection {
    title: string;
    links: FooterLink[];
  }
  
  export const FOOTER_LINKS: FooterSection[] = [
    {
      title: "دسترسی سریع",
      links: [
        { label: "صفحه اصلی", href: "/" },
        { label: "رویدادها و کارگاه‌ها", href: "/events" },
        { label: "پروژه‌های فعال", href: "/projects" },
        { label: "مقالات علمی", href: "/blogs" },
        { label: "درباره ما", href: "/about-us" },
      ],
    },
    {
      title: "لینک‌های دانشگاهی",
      links: [
        { label: "سایت اموزشیار ", href: "https://edu.iau.ac.ir" },
        { label: "سامانه وادانا", href: "https://vadamap.ec.iau.ir" },
        { label: "سایت دانشکده مهندسی", href: "#" },
        { label: "کتابخانه مرکزی", href: "#" },
      ],
    },
  ];
  
  export const CONTACT_INFO = {
    address: "دانشگاه آزاد واحد ساری، دانشکده علوم و تربیت، طبقه سوم",
    email: "Info@scsa.ir",
    telegram: "https://t.me/Sari_CSA",
    instagram: "http://instagram.com/sari_computer",
    github: "https://github.com/Sari-IAU",
  };