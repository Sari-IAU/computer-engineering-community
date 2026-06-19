import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Typewriter from "typewriter-effect";
import teamPic from "../../assets/images/teamPhoto.jpg";

export default function HeroSection() {
  // انیمیشن ورود ترتیبی المان‌های متنی (Framer Motion)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  // انیمیشن ورود هر المان به صورت مجزا
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  return (
    <section
      dir="rtl"
      className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden bg-[var(--bg)] transition-colors duration-300"
    >
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src={teamPic}
          alt="تیم انجمن علمی"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[var(--bg)] opacity-65 dark:opacity-88 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)] opacity-70" />
      </div>

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 md:pt-28 md:pb-14 flex flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2.5 mb-3 bg-indigo-50 dark:bg-blue-500/10 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-blue-500/20 mt-2"
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600 dark:bg-blue-400" />
          </span>
          <span className="text-indigo-600 dark:text-blue-400 text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap">
            دانشکده مهندسی کامپیوتر | آزمایشگاه مرتا
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-h)] leading-[1.35] mb-5 md:mb-6 select-none flex flex-col items-center justify-center gap-y-2 text-center"
        >
          {/* خط اول: یادگیری و ماشین‌نویسی کنار هم */}
          <div className="flex items-center justify-center gap-x-3 whitespace-nowrap">
            <span>یادگیری،</span>
            <span className="text-indigo-600 dark:text-blue-400 min-w-[120px] sm:min-w-[180px] text-right inline-block">
              <Typewriter
                options={{
                  strings: ["همکاری", "توسعه", "نوآوری", "خلاقیت"],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                  cursor: "|",
                }}
              />
            </span>
          </div>

          {/* خط دوم: کاملاً مستقل در زیر خط اول */}
          <span className="block">و رشد در کنار هم</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-[var(--text)] text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-2xl"
        >
          جامعه‌ای از دانشجویان خلاق برای تبادل دانش، اجرای پروژه‌های بزرگ
          اوپن‌سورس و برگزاری رویدادهای علمی در سطح کشور.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col mt-6 sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 md:mb-16 w-full sm:w-auto"
        >
          <motion.a
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            href="#events"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold px-6 sm:px-3 py-3 sm:py-2.5 rounded-2xl transition-colors duration-300 shadow-xl shadow-indigo-500/20 text-sm sm:text-base"
          >
            رویدادهای پیش رو
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            href="#join"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[var(--border)] hover:border-indigo-600 dark:hover:border-blue-400 text-[var(--text-h)] font-bold px-6 py-3 sm:py-2.5 rounded-2xl transition-colors duration-300 bg-white/50 dark:bg-white/5 backdrop-blur-md text-sm sm:text-base"
          >
            عضویت در انجمن
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
