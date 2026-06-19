import { useState } from "react";
import { Calendar, MapPin, Clock, ArrowLeft, Users } from "lucide-react";

type Category = "همه" | "هکاتون" | "کارگاه" | "سمینار";

interface Event {
  id: number;
  title: string;
  category: Exclude<Category, "همه">;
  date: string;
  time: string;
  location: string;
  locationType: "حضوری" | "آنلاین";
  capacity: number;
  registered: number;
  imageColor: string;
  tags: string[];
}

const EVENTS: Event[] = [
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

const CATEGORIES: Category[] = ["همه", "هکاتون", "کارگاه", "سمینار"];

export default function EventsSection() {
  const [active, setActive] = useState<Category>("همه");

  const filtered = active === "همه"
    ? EVENTS
    : EVENTS.filter((e) => e.category === active);

  return (
    <section id="events" dir="rtl" className="w-full bg-[var(--bg)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-h)]">
              رویدادهای{" "}
              <span className="text-indigo-600 dark:text-blue-400">پیش رو</span>
            </h2>
          </div>

          <a
            href="#all-events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-blue-400 hover:gap-3 transition-all duration-200 flex-shrink-0"
          >
            مشاهده همه رویدادها
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm font-semibold px-4 py-2 rounded-xl border transition-all duration-200 ${
                active === cat
                  ? "bg-indigo-600 dark:bg-blue-600 text-white border-transparent shadow-lg shadow-indigo-500/20"
                  : "bg-[var(--bg)] text-[var(--text)] border-[var(--border)] hover:border-indigo-400 dark:hover:border-blue-400 hover:text-indigo-600 dark:hover:text-blue-400"
              }`}
            >
              {cat}
              {cat !== "همه" && (
                <span className="mr-1.5 text-xs opacity-60">
                  ({EVENTS.filter((e) => e.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((event) => {
            const fillPercent = Math.round((event.registered / event.capacity) * 100);
            const isFull = event.registered >= event.capacity;

            return (
              <article
                key={event.id}
                className="group flex flex-col bg-[var(--bg)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300"
              >
                {/* تصویر placeholder */}
                <div className={`relative h-44 bg-gradient-to-br ${event.imageColor} flex-shrink-0`}>
                  {/* Badge دسته */}
                  <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-lg border backdrop-blur-sm bg-white/10 text-white border-white/20">
                    {event.category}
                  </span>

                  {/* Badge حضوری/آنلاین */}
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm bg-white/10 text-white border border-white/20">
                    {event.locationType}
                  </span>

                  {/* Tag‌ها */}
                  <div className="absolute bottom-3 right-3 flex gap-1.5 flex-wrap">
                    {event.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-black/20 text-white/90 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* محتوا */}
                <div className="flex flex-col flex-1 p-5 gap-4">
                  <h3 className="text-base font-bold text-[var(--text-h)] leading-snug group-hover:text-indigo-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {event.title}
                  </h3>

                  {/* اطلاعات رویداد */}
                  <div className="flex flex-col gap-2 text-sm text-[var(--text)] opacity-90">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 flex-shrink-0 text-indigo-500 dark:text-blue-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 flex-shrink-0 text-indigo-500 dark:text-blue-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0 text-indigo-500 dark:text-blue-400" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>

                  {/* وضعیت ظرفیت */}
                  <div className="mt-auto flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs text-[var(--text)] opacity-80">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {event.registered} نفر ثبت‌نام کردند
                      </span>
                      <span className={isFull ? "text-rose-500 font-bold" : "font-medium"}>
                        {isFull ? "تکمیل ظرفیت" : `${fillPercent}%`}
                      </span>
                    </div>
                    <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isFull
                            ? "bg-rose-500"
                            : fillPercent > 75
                            ? "bg-amber-500"
                            : "bg-indigo-500 dark:bg-blue-500"
                        }`}
                        style={{ width: `${fillPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* دکمه اکشن */}
                  <a
                    href={`#event-${event.id}`}
                    className={`w-full text-center text-sm font-bold py-2.5 rounded-xl transition-all duration-200 ${
                      isFull
                        ? "bg-[var(--border)] text-[var(--text)] opacity-40 cursor-not-allowed"
                        : "bg-indigo-50 dark:bg-blue-500/10 text-indigo-600 dark:text-blue-400 hover:bg-indigo-600 dark:hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    {isFull ? "ظرفیت تکمیل شده" : "ثبت‌نام"}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}