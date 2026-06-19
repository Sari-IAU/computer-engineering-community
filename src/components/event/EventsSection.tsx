import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import EventCard from "./EventCard";
import { MOCK_EVENTS, CATEGORIES, FilterCategory } from "../../mockData/enventData"; // ایمپورت داده‌ها و فیلترها

export default function EventsSection() {
  const [active, setActive] = useState<FilterCategory>("همه");

  const filtered = active === "همه"
    ? MOCK_EVENTS
    : MOCK_EVENTS.filter((e) => e.category === active);

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
                  ({MOCK_EVENTS.filter((e) => e.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

      </div>
    </section>
  );
}