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
        { label: "صفحه اصلی", href: "#" },
        { label: "رویدادها و کارگاه‌ها", href: "#events" },
        { label: "پروژه‌های فعال", href: "#projects" },
        { label: "مقالات علمی", href: "#blog" },
        { label: "درباره ما", href: "/about" },
      ],
    },
    {
      title: "لینک‌های دانشگاهی",
      links: [
        { label: "سایت اصلی دانشگاه", href: "https://example.ac.ir" },
        { label: "سامانه آموزشی (گلستان)", href: "#" },
        { label: "سایت دانشکده مهندسی", href: "#" },
        { label: "کتابخانه مرکزی", href: "#" },
      ],
    },
  ];
  
  export const CONTACT_INFO = {
    address: "تهران، دانشگاه فلانی، دانشکده مهندسی کامپیوتر، طبقه همکف، اتاق انجمن علمی",
    email: "ssc@example.ac.ir",
    telegram: "https://t.me/example",
    instagram: "https://instagram.com/example",
    github: "https://github.com/example",
  };