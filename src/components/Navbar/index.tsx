import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "رویدادها", href: "#events" },
  { label: "پروژه‌ها", href: "#projects" },
  { label: "بلاگ", href: "#blog" },
  { label: "درباره ما", href: "#about" },
  { label: "تماس با ما", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme(); // دریافت وضعیت تم و تابع تغییر آن

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0A1628]/95 backdrop-blur-md shadow-md dark:shadow-lg dark:shadow-black/20 border-b border-slate-200/50 dark:border-white/5"
          : "bg-white dark:bg-[#0A1628] border-b border-slate-100 dark:border-transparent"
      }`}
    >
      <div className="mx-auto px-6 max-w-[1600px]">
        <div className="flex items-center justify-between h-16">
          {/* سمت راست: لوگو و لینک‌ها */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 flex items-center justify-center shadow-sm">
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
              <div className="leading-tight">
                <span className="block text-slate-900 dark:text-white font-bold text-sm tracking-wide">
                  انجمن علمی
                </span>
                <span className="block text-blue-600 dark:text-blue-400 text-[10px] tracking-widest font-semibold">
                  مهندسی کامپیوتر
                </span>
              </div>
            </a>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="h-9 px-3 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 flex items-center justify-center border border-slate-200 dark:border-white/5 shadow-sm"
              title={theme === "light" ? "حالت شب" : "حالت روز"}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <span
                  className={`absolute transition-all duration-500 transform ${
                    theme === "light"
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 rotate-90 scale-50"
                  }`}
                >
                  <Sun className="w-4 h-4 text-amber-500" />
                </span>

                <span
                  className={`absolute transition-all duration-500 transform ${
                    theme === "dark"
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-50"
                  }`}
                >
                  <Moon className="w-4 h-4 text-blue-400" />
                </span>
              </div>
            </button>

            {/* دکمه عضویت در انجمن */}
            <a
              href="#join"
              className="hidden md:inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-sm"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v12M1 7h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              عضویت در انجمن
            </a>

            {/* Hamburger — موبایل */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
              aria-label="باز کردن منو"
            >
              <div className="w-5 flex flex-col gap-1">
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                    menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* منوی موبایل ریسپانسیو با پشتیبانی از هر دو تم */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white dark:bg-[#0A1628] ${
          menuOpen
            ? "max-h-96 border-t border-slate-100 dark:border-white/10"
            : "max-h-0"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            className="mt-3 flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1v12M1 7h12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            عضویت در انجمن
          </a>
        </nav>
      </div>
    </header>
  );
}
