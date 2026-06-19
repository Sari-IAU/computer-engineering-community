import { ArrowLeft } from "lucide-react";
import teamPic from "../../assets/images/teamPhoto.jpg";
import HeroSearchBox from "./HeroSearchBox";

export default function HeroSection() {
  return (
    <section
      dir="rtl"
      className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden bg-[var(--bg)] transition-colors duration-300"
    >
      {/* ۱. تصویر پس‌زمینه و لایه‌های روی آن */}
      <div className="absolute inset-0 z-0">
        <img
          src={teamPic}
          alt="تیم انجمن علمی"
          className="w-full h-full object-cover object-center scale-105"
        />
        
        {/* اصلاح باگ شفافیت: متغیر اصلی را می‌گذاریم و شفافیت را با کلس opacity کنترل می‌کنیم */}
        <div className="absolute inset-0 bg-[var(--bg)] opacity-65 dark:opacity-88 backdrop-blur-[2px]" />
        
        {/* اصلاح گرادینت بالا و پایین به شکل استاندارد */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)] opacity-70" />
      </div>

      {/* ۲. محتوا — pt برای فاصله از navbar */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 md:pt-28 md:pb-14 flex flex-col items-center text-center">

        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-3 bg-indigo-50 dark:bg-blue-500/10 px-4 py-1.5 rounded-full border border-indigo-100 dark:border-blue-500/20 mt-2">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600 dark:bg-blue-400" />
          </span>
          <span className="text-indigo-600 dark:text-blue-400 text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap">
            دانشکده مهندسی کامپیوتر | آزمایشگاه مرتا
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-h)] leading-[1.25] mb-5 md:mb-6">
          یادگیری،{" "}
          <span className="text-indigo-600 dark:text-blue-400">همکاری</span>
          <br className="hidden sm:block" />
          {" "}و رشد در کنار هم
        </h1>

        {/* Subtext */}
        <p className="text-[var(--text)] text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-2xl">
          جامعه‌ای از دانشجویان خلاق برای تبادل دانش، اجرای پروژه‌های بزرگ اوپن‌سورس
          و برگزاری رویدادهای علمی در سطح کشور.
        </p>

        {/* CTAs */}
        <div className="flex flex-col mt-6 sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 md:mb-16 w-full sm:w-auto">
          <a
            href="#events"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold px-6 sm:px-3 py-3 sm:py-2.5 rounded-2xl transition-all duration-300 shadow-xl shadow-indigo-500/20 hover:-translate-y-1 text-sm sm:text-base"
          >
            رویدادهای پیش رو
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="#join"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[var(--border)] hover:border-indigo-600 dark:hover:border-blue-400 text-[var(--text-h)] font-bold px-6 py-3 sm:py-2.5 rounded-2xl transition-all duration-300 bg-white/50 dark:bg-white/5 backdrop-blur-md hover:-translate-y-1 text-sm sm:text-base"
          >
            عضویت در انجمن
          </a>
        </div>

      </div>
    </section>
  );
}