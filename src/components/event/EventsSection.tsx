import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "./EventCard";
import {
  MOCK_EVENTS,
  CATEGORIES,
  type FilterCategory,
} from "../../mockData/enventData";
import { Link } from "react-router-dom";

export default function EventsSection() {
  const [active, setActive] = useState<FilterCategory>("همه");

  const filtered =
    active === "همه"
      ? MOCK_EVENTS
      : MOCK_EVENTS.filter((e) => e.category === active);

  return (
    <section
      id="events"
      dir="rtl"
      className="w-full bg-[var(--bg)] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-h)]">
              رویدادهای{" "}
              <span className="text-indigo-600 dark:text-blue-400">پیش رو</span>
            </h2>
          </div>

          <motion.div whileHover={{ x: -4 }}>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-blue-400 transition-all duration-200 flex-shrink-0"
            >
              مشاهده همه رویدادها
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative text-sm font-semibold px-4 py-2 rounded-xl border transition-colors duration-200 ${
                active === cat
                  ? "text-white border-transparent"
                  : "bg-[var(--bg)] text-[var(--text)] border-[var(--border)] hover:border-indigo-400 dark:hover:border-blue-400 hover:text-indigo-600 dark:hover:text-blue-400"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="activeEventCategoryBg"
                  className="absolute inset-0 bg-indigo-600 dark:bg-blue-600 rounded-xl z-0 shadow-lg shadow-indigo-500/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center">
                {cat}
                {cat !== "همه" && (
                  <span
                    className={`mr-1.5 text-xs transition-colors duration-200 ${
                      active === cat ? "text-white/80" : "opacity-60"
                    }`}
                  >
                    ({MOCK_EVENTS.filter((e) => e.category === cat).length})
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                  mass: 0.5,
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
