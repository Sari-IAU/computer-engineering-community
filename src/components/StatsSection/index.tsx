import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Calendar, Rocket, Trophy } from "lucide-react";

const stats = [
  {
    targetValue: 480,
    suffix: "+",
    label: "عضو فعال",
    description: "دانشجوی فعال در انجمن",
    icon: <Users className="w-6 h-6" />,
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    border: "border-blue-100 dark:border-blue-500/20",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    targetValue: 60,
    suffix: "+",
    label: "رویداد علمی",
    description: "کارگاه، سمینار و هکاتون",
    icon: <Calendar className="w-6 h-6" />,
    color: "text-violet-500 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-500/10",
    border: "border-violet-100 dark:border-violet-500/20",
    glow: "group-hover:shadow-violet-500/10",
  },
  {
    targetValue: 35,
    suffix: "+",
    label: "پروژه مشترک",
    description: "پروژه اوپن‌سورس دانشجویی",
    icon: <Rocket className="w-6 h-6" />,
    color: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    border: "border-emerald-100 dark:border-emerald-500/20",
    glow: "group-hover:shadow-emerald-500/10",
  },
  {
    targetValue: 12,
    suffix: "",
    label: "سال فعالیت",
    description: "سابقه درخشان در دانشگاه",
    icon: <Trophy className="w-6 h-6" />,
    color: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-500/10",
    border: "border-amber-100 dark:border-amber-500/20",
    glow: "group-hover:shadow-amber-500/10",
  },
];

function Counter({ from, to }: { from: number; to: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, to]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  return <span ref={ref}>{displayValue.toLocaleString("fa-IR", { useGrouping: false })}</span>;
}

export default function StatsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, 
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <section
      dir="rtl"
      className="w-full bg-[var(--bg)] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-indigo-600 dark:text-blue-400 text-sm font-bold tracking-widest uppercase mb-3">
            انجمن در اعداد
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-h)]">
            یک جامعه{" "}
            <span className="text-indigo-600 dark:text-blue-400">پویا</span>{" "}
            و در حال رشد
          </h2>
        </motion.div>

        {/* Cards container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }} 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                transition: { duration: 0.2, ease: "easeInOut" } 
              }}
              className={`group relative flex flex-col items-center text-center gap-4 p-6 md:p-8 rounded-2xl border bg-[var(--bg)] border-[var(--border)] shadow-sm hover:shadow-xl ${stat.glow} transition-all duration-300`}
            >
              {/* آیکون */}
              <div className={`p-3 rounded-xl border ${stat.bg} ${stat.border} ${stat.color}`}>
                {stat.icon}
              </div>

              {/* عدد و متون */}
              <div>
                <p className={`text-4xl md:text-5xl font-black tracking-tight ${stat.color}`}>
                  {/* اعمال کامپوننت انیمیشن شمارشگر */}
                  <Counter from={0} to={stat.targetValue} />
                  {stat.suffix}
                </p>
                <p className="text-base font-bold text-[var(--text-h)] mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-[var(--text)] opacity-80 mt-1.5 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* خط تزئینی پایین کارت */}
              <div className={`absolute bottom-0 right-6 left-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${stat.bg}`} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}