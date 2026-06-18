import { Users, Calendar, Rocket, Trophy } from "lucide-react";

const stats = [
  {
    value: "۴۸۰+",
    label: "عضو فعال",
    description: "دانشجوی فعال در انجمن",
    icon: <Users className="w-6 h-6" />,
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    border: "border-blue-100 dark:border-blue-500/20",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    value: "۶۰+",
    label: "رویداد علمی",
    description: "کارگاه، سمینار و هکاتون",
    icon: <Calendar className="w-6 h-6" />,
    color: "text-violet-500 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-500/10",
    border: "border-violet-100 dark:border-violet-500/20",
    glow: "group-hover:shadow-violet-500/10",
  },
  {
    value: "۳۵+",
    label: "پروژه مشترک",
    description: "پروژه اوپن‌سورس دانشجویی",
    icon: <Rocket className="w-6 h-6" />,
    color: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    border: "border-emerald-100 dark:border-emerald-500/20",
    glow: "group-hover:shadow-emerald-500/10",
  },
  {
    value: "۱۲",
    label: "سال فعالیت",
    description: "سابقه درخشان در دانشگاه",
    icon: <Trophy className="w-6 h-6" />,
    color: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-500/10",
    border: "border-amber-100 dark:border-amber-500/20",
    glow: "group-hover:shadow-amber-500/10",
  },
];

export default function StatsSection() {
  return (
    <section
      dir="rtl"
      className="w-full bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300"
    >
      {/* فاصله از سرچ‌باکس که نصفش روی hero قراره */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-indigo-600 dark:text-blue-400 text-sm font-bold tracking-widest uppercase mb-3">
            انجمن در اعداد
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            یک جامعه{" "}
            <span className="text-indigo-600 dark:text-blue-400">پویا</span>{" "}
            و در حال رشد
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`group relative flex flex-col items-center text-center gap-4 p-6 md:p-8 rounded-2xl border bg-white dark:bg-white/[0.03] ${stat.border} shadow-sm hover:shadow-xl ${stat.glow} transition-all duration-300 hover:-translate-y-1`}
            >
              {/* آیکون */}
              <div className={`p-3 rounded-xl border ${stat.bg} ${stat.border} ${stat.color}`}>
                {stat.icon}
              </div>

              {/* عدد */}
              <div>
                <p className={`text-4xl md:text-5xl font-black tracking-tight ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-base font-bold text-slate-800 dark:text-white mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1.5 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* خط تزئینی پایین کارت */}
              <div className={`absolute bottom-0 right-6 left-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${stat.bg}`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
