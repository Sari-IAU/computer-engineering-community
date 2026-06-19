import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface NavLink {
  label: string;
  to: string;
}

const navLinks: NavLink[] = [
  { label: "رویدادها", to: "/events" },
  { label: "پروژه‌ها", to: "/projects" },
  { label: "مقالات", to: "/blogs" },
  { label: "درباره ما", to: "/about-us" },
  { label: "تماس با ما", to: "/contact-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (to: string) => location.pathname === to;

  return (
    <header
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--bg)]/80 backdrop-blur-lg shadow-sm border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto px-6 max-w-[1600px]">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 dark:from-blue-500 dark:to-indigo-500 flex items-center justify-center shadow-sm">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.9" />
                  <rect x="10" y="2" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.5" />
                  <rect x="2" y="10" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.5" />
                  <rect x="10" y="10" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.9" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block text-[var(--text-h)] font-bold text-sm tracking-wide">
                  انجمن علمی
                </span>
                <span className="block text-indigo-600 dark:text-blue-400 text-[10px] tracking-widest font-semibold">
                  مهندسی کامپیوتر
                </span>
              </div>
            </Link>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3.5 py-2 text-sm rounded-lg transition-all duration-200 font-semibold group ${
                    isActive(link.to)
                      ? "text-[var(--accent)]"
                      : "text-[var(--text)] hover:text-[var(--text-h)] hover:bg-slate-200/50 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute bottom-0 right-3.5 left-3.5 h-0.5 rounded-full transition-all duration-300 ${
                      isActive(link.to)
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }`}
                    style={{ background: "var(--accent)" }}
                  />
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* دکمه تغییر تم */}
            <button
              onClick={toggleTheme}
              className={`h-9 px-3 rounded-lg text-[var(--text)] hover:text-[var(--text-h)] transition-all duration-300 flex items-center justify-center border shadow-sm ${
                scrolled
                  ? "bg-slate-200/60 dark:bg-white/5 border-[var(--border)]"
                  : "bg-white/40 dark:bg-white/5 border-[var(--border)] backdrop-blur-sm"
              }`}
              title={theme === "light" ? "حالت شب" : "حالت روز"}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <span className={`absolute transition-all duration-500 transform ${theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`}>
                  <Sun className="w-4 h-4 text-amber-500" />
                </span>
                <span className={`absolute transition-all duration-500 transform ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}>
                  <Moon className="w-4 h-4 text-blue-400" />
                </span>
              </div>
            </button>

            {/* دکمه عضویت */}
            <Link
              to="/login"
              className="hidden md:inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              عضویت در انجمن
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-[var(--text)] hover:text-[var(--text-h)] hover:bg-slate-200/60 dark:hover:bg-white/5 transition-all"
              aria-label="باز کردن منو"
            >
              <div className="w-5 flex flex-col gap-1">
                <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* منوی موبایل */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 text-sm rounded-lg transition-all font-semibold flex items-center justify-between ${
                isActive(link.to)
                  ? "text-[var(--accent)] bg-[var(--accent-bg)]"
                  : "text-[var(--text)] hover:text-[var(--text-h)] hover:bg-slate-200/50 dark:hover:bg-white/5"
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-indigo-600 dark:bg-blue-600 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            عضویت در انجمن
          </Link>
        </nav>
      </div>
    </header>
  );
}
