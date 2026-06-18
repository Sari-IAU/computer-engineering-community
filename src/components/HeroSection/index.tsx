import { Search, BookOpen, Calendar, GitBranch } from "lucide-react";
import teamPic from "../../assets/images/teamPhoto.jpg";

export default function HeroSection() {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen bg-slate-50 dark:bg-[#0A1628] flex items-center overflow-hidden transition-colors duration-300"
    >
      {/* پترن گرید خطوط مهندسی در پس‌زمینه */}
      <div
        className="absolute inset-0 opacity-[0.3] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 w-full z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          
          {/* سمت راست: محتوای متنی پروژه */}
          <div className="flex-1 flex flex-col items-start text-right">
            {/* ایبرو / عنوان کوچک */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-indigo-600 dark:bg-blue-400" />
              <span className="text-indigo-600 dark:text-blue-400 text-sm font-semibold tracking-wide">
                دانشکده مهندسی کامپیوتر | آزمایشگاه مرتا
              </span>
            </div>

            {/* تیتر اصلی */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              یادگیری، <span className="text-indigo-600 dark:text-blue-400">همکاری</span>
              <br />
              و رشد در بستر علمی
            </h1>

            {/* توضیحات آکادمیک */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg text-justify mb-10">
              پلتفرم جامع و رسمی انجمن علمی برای تبادل دانش، هدایت پروژه‌های مشترک تحقیقاتی، برگزاری رویدادهای تخصصی و آماده‌سازی دانشجویان برای ورود به دنیای فناوری.
            </p>

            {/* دکمه‌ها */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#events"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                رویدادهای پیش رو
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#join"
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-blue-400 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 bg-white dark:bg-transparent"
              >
                عضویت در انجمن
              </a>
            </div>

            {/* بخش آمار عددی */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-14 pt-8 border-t border-slate-200 dark:border-white/10 w-full">
              {[
                { value: "۴۸۰+", label: "عضو فعال" },
                { value: "۶۰+", label: "رویداد علمی" },
                { value: "۳۵+", label: "پروژه تخصصی" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</span>
                  <span className="text-slate-500 dark:text-slate-500 text-xs sm:text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* سمت چپ: تصویر تیمی که نصف صفحه را می‌گیرد با افکت سایه جذاب عکسی که فرستادی */}
          <div className="flex-1 w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-2xl group">
              
              {/* افکت Glow پشت عکس (در حالت روز نیلی و در شب آبی فلوئورسنتی) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-blue-500 dark:from-blue-600 dark:to-indigo-600 rounded-2xl blur-2xl opacity-20 dark:opacity-30 group-hover:opacity-40 dark:group-hover:opacity-50 transition-all duration-500" />
              
              {/* کادر خطی بیرونی بسیار ظریف */}
              <div className="absolute -inset-3 rounded-3xl border border-slate-200/60 dark:border-white/5 pointer-events-none" />

              {/* نمایش واقعی تصویر تیمی */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 z-10 bg-slate-900">
                {teamPic ? (
                  <img
                    src={teamPic}
                    alt="تیم انجمن علمی"
                    className="w-full h-full object-cover aspect-[4/3] scale-100 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full aspect-[4/3] bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <span className="text-slate-400">تصویر تیم انجمن علمی</span>
                  </div>
                )}
              </div>

              {/* کارت شناور هکاتون در پایین تصویر */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg transition-transform duration-300 group-hover:translate-y-[-2px]">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-blue-500/15 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-indigo-600 dark:text-blue-400">
                    <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white text-sm font-bold">رویداد هوش مصنوعی</p>
                  <p className="text-slate-500 dark:text-slate-500 text-xs font-semibold">ثبت‌نام فعال است</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}