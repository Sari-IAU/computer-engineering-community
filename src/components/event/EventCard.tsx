import { Calendar, MapPin, Clock, Users } from "lucide-react";
import type { Event } from "../../mockData/enventData";
 

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const fillPercent = Math.round((event.registered / event.capacity) * 100);
  const isFull = event.registered >= event.capacity;

  return (
    <article className="group flex flex-col bg-[var(--bg)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300">
      <div className={`relative h-44 bg-gradient-to-br ${event.imageColor} flex-shrink-0`}>
        <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-lg border backdrop-blur-sm bg-white/10 text-white border-white/20">
          {event.category}
        </span>
        <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm bg-white/10 text-white border border-white/20">
          {event.locationType}
        </span>
        <div className="absolute bottom-3 right-3 flex gap-1.5 flex-wrap">
          {event.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-black/20 text-white/90 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 gap-4">
        <h3 className="text-base font-bold text-[var(--text-h)] leading-snug group-hover:text-indigo-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {event.title}
        </h3>

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
                isFull ? "bg-rose-500" : fillPercent > 75 ? "bg-amber-500" : "bg-indigo-500 dark:bg-blue-500"
              }`}
              style={{ width: `${fillPercent}%` }}
            />
          </div>
        </div>

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
}