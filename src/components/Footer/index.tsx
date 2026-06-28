import { Mail, MapPin } from "lucide-react";
import { CONTACT_INFO, FOOTER_LINKS } from "../../mockData/footer";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="w-full transition-colors duration-300 border-t"
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
    >
      {/* بخش اصلی فوتر */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* ستون اول: توصیف انجمن */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {/* لوگوی فرضی انجمن */}
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 dark:from-blue-500 dark:to-indigo-500 flex items-center justify-center shadow-sm">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="6"
                    height="6"
                    rx="1.5"
                    fill="white"
                    fillOpacity="0.9"
                  />
                  <rect
                    x="10"
                    y="2"
                    width="6"
                    height="6"
                    rx="1.5"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <rect
                    x="2"
                    y="10"
                    width="6"
                    height="6"
                    rx="1.5"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <rect
                    x="10"
                    y="10"
                    width="6"
                    height="6"
                    rx="1.5"
                    fill="white"
                    fillOpacity="0.9"
                  />
                </svg>
              </div>
              <span
                className="font-black text-base"
                style={{ color: "var(--text-h)" }}
              >
                انجمن علمی کامپیوتر
              </span>
            </div>
            <p
              className="text-xs md:text-sm text-start leading-relaxed text-slate-500 dark:text-slate-400 font-medium"
              dir="rtl"
            >
              پلی میان دانشگاه و صنعت. ما در انجمن علمی با برگزاری رویدادها،
              کارگاه‌ها و پروژه‌های تیمی، فضای رشد مهارت‌های تخصصی دانشجویان را
              فراهم می‌کنیم.
            </p>
          </div>

          {/* ستون‌های دوم و سوم: لینک‌های دسترسی */}
          {FOOTER_LINKS.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h4
                className="font-bold text-sm md:text-base"
                style={{ color: "var(--text-h)" }}
              >
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.href}
                      className="text-xs md:text-sm text-slate-500 hover:text-[var(--accent)] dark:text-slate-400 dark:hover:text-[var(--accent)] transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ستون چهارم: اطلاعات تماس و شبکه‌های اجتماعی */}
          <div className="flex flex-col gap-4">
            <h4
              className="font-bold text-sm md:text-base"
              style={{ color: "var(--text-h)" }}
            >
              ارتباط با ما
            </h4>
            <div className="flex flex-col gap-3 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--accent)]" />
                <span className="leading-relaxed text-start" dir="rtl">
                  {CONTACT_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-[var(--accent)]" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-[var(--accent)]"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* آیکون‌های شبکه‌های اجتماعی فوتر با SVG اختصاصی */}
            <div className="flex items-center gap-3 mt-2">
              {/* تلگرام */}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={CONTACT_INFO.telegram}
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700/50 flex items-center justify-center text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                title="تلگرام"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </a>

              {/* اینستاگرام */}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={CONTACT_INFO.instagram}
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700/50 flex items-center justify-center text-slate-500 hover:text-pink-500 dark:text-slate-400 dark:hover:text-pink-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                title="اینستاگرام"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* گیت‌هاب */}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={CONTACT_INFO.github}
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700/50 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                title="گیت‌هاب"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* بخش کپی رایت پایین فوتر */}
      <div
        className="w-full border-t py-4 text-center text-xs text-slate-400 dark:text-slate-500 font-medium"
        style={{ borderColor: "var(--border)", background: "rgba(0,0,0,0.02)" }}
      >
        حقوق مادی و معنوی این وب‌سایت متعلق به انجمن علمی مهندسی کامپیوتر
        می‌باشد.
      </div>
    </footer>
  );
}
