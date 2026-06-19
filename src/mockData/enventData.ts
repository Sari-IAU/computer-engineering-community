export type EventCategory = "هکاتون" | "کارگاه" | "سمینار";
export type FilterCategory = "همه" | EventCategory;

export interface Event {
  id: number;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  location: string;
  locationType: "حضوری" | "آنلاین";
  capacity: number;
  registered: number;
  imageColor: string;
  tags: string[];
}

export const MOCK_EVENTS: Event[] = [
  {
    id: 1,
    title: "هکاتون بهار ۱۴۰۴",
    category: "هکاتون",
    date: "۲۰–۲۲ خرداد ۱۴۰۴",
    time: "۹:۰۰ صبح",
    location: "دانشکده مهندسی",
    locationType: "حضوری",
    capacity: 120,
    registered: 98,
    imageColor: "from-blue-600 to-indigo-700",
    tags: ["AI", "Web", "Mobile"],
  },
  {
    id: 2,
    title: "کارگاه Deep Learning با PyTorch",
    category: "کارگاه",
    date: "۱۵ خرداد ۱۴۰۴",
    time: "۱۴:۰۰",
    location: "Google Meet",
    locationType: "آنلاین",
    capacity: 60,
    registered: 45,
    imageColor: "from-violet-600 to-purple-700",
    tags: ["Python", "PyTorch", "ML"],
  },
  {
    id: 3,
    title: "سمینار امنیت شبکه و رمزنگاری",
    category: "سمینار",
    date: "۸ خرداد ۱۴۰۴",
    time: "۱۶:۰۰",
    location: "آمفی‌تئاتر دانشکده",
    locationType: "حضوری",
    capacity: 200,
    registered: 134,
    imageColor: "from-emerald-600 to-teal-700",
    tags: ["Security", "Network", "Crypto"],
  },
];

export const CATEGORIES: FilterCategory[] = ["همه", "هکاتون", "کارگاه", "سمینار"];