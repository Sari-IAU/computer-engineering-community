import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Rocket, FileText, ArrowLeft, X } from "lucide-react";

type Category = "همه" | "رویدادها" | "پروژه‌ها" | "بلاگ";

interface SearchResult {
  id: number;
  title: string;
  category: Exclude<Category, "همه">;
  meta: string;
}

const MOCK_DATA: SearchResult[] = [
  { id: 1, title: "هکاتون بهار ۱۴۰۴", category: "رویدادها", meta: "۲۰–۲۲ خرداد • حضوری" },
  { id: 2, title: "کارگاه Deep Learning", category: "رویدادها", meta: "۱۵ خرداد • آنلاین" },
  { id: 3, title: "سمینار امنیت شبکه", category: "رویدادها", meta: "۸ خرداد • دانشکده" },
  { id: 4, title: "ربات تشخیص چهره", category: "پروژه‌ها", meta: "Python · OpenCV" },
  { id: 5, title: "پلتفرم آموزش آنلاین", category: "پروژه‌ها", meta: "React · Node.js" },
  { id: 6, title: "تحلیل داده بورس", category: "پروژه‌ها", meta: "Python · Pandas · ML" },
  { id: 7, title: "مقدمه‌ای بر Transformers", category: "بلاگ", meta: "۳ روز پیش · ۵ دقیقه" },
  { id: 8, title: "بهترین منابع یادگیری DSA", category: "بلاگ", meta: "۱ هفته پیش · ۸ دقیقه" },
  { id: 9, title: "گزارش هکاتون زمستان ۱۴۰۳", category: "بلاگ", meta: "۲ هفته پیش · ۴ دقیقه" },
];

const CATEGORY_ICON: Record<Exclude<Category, "همه">, React.ReactNode> = {
  "رویدادها": <Calendar className="w-3.5 h-3.5" />,
  "پروژه‌ها": <Rocket className="w-3.5 h-3.5" />,
  "بلاگ": <FileText className="w-3.5 h-3.5" />,
};

const CATEGORY_COLOR: Record<Exclude<Category, "همه">, string> = {
  "رویدادها": "bg-blue-500/10 text-blue-500 dark:text-blue-400",
  "پروژه‌ها": "bg-violet-500/10 text-violet-500 dark:text-violet-400",
  "بلاگ": "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400",
};

const CATEGORIES: Category[] = ["همه", "رویدادها", "پروژه‌ها", "بلاگ"];

export default function HeroSearchBox() {
  const [query, setQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<Category>("همه");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // --- منطق انیمیشن تایپ‌پلیس‌هولدر عمیق و بومی ---
  const placeholders = [
    "جستجو در کارگاه‌های هوش مصنوعی...",
    "جستجو در پروژه‌های اوپن‌سورس پایتون...",
    "جستجو در مقالات دیتاساینس...",
    "جستجو در هکاتون‌های پیش‌رو...",
  ];

  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = placeholders[placeholderIndex];
    
    // تنظیم سرعت بر اساس حالت تایپ یا پاک شدن
    const speed = isDeleting ? 40 : 80; 

    const handleType = () => {
      if (!isDeleting && charIndex < currentFullText.length) {
        // حالت تایپ شدن کاراکترها
        setCurrentPlaceholder(currentFullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // حالت پاک شدن کاراکترها
        setCurrentPlaceholder(currentFullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentFullText.length) {
        // مکث بعد از اتمام تایپ کامل جمله (مثلاً ۲ ثانیه مکس)
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        // رفتن به کلمه بعدی بعد از پاک شدن کامل
        setIsDeleting(false);
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
      }
    };

    const timeout = setTimeout(handleType, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, placeholderIndex]);
  // ----------------------------------------------------

  const results: SearchResult[] = query.trim().length > 0
    ? MOCK_DATA.filter((item) => {
        const matchCategory = activeCategory === "همه" || item.category === activeCategory;
        const matchQuery = item.title.includes(query) || item.meta.includes(query);
        return matchCategory && matchQuery;
      })
    : [];

  const showDropdown = isFocused && query.trim().length > 0;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  } as const;

  return (
    <div dir="rtl" ref={wrapperRef} className="flex flex-col gap-5 w-full max-w-2xl mx-auto relative z-10">
      {/* دکمه‌های فیلتر دسته‌بندی بالای باکس */}
      <div className="flex items-center gap-2 mt-3 justify-center flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative text-xs font-medium px-3.5 py-1.5 rounded-full border transition-colors duration-200 ${
              activeCategory === cat
                ? "text-white border-transparent"
                : "bg-[var(--bg)] text-[var(--text)] border-[var(--border)] hover:border-indigo-400 dark:hover:border-blue-400 hover:text-indigo-600 dark:hover:text-blue-400"
            }`}
          >
            {activeCategory === cat && (
              <motion.span
                layoutId="activeCategoryBg"
                className="absolute inset-0 bg-indigo-600 dark:bg-blue-600 rounded-full z-0 shadow-md shadow-indigo-500/20"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* Search box */}
      <div
        className={`flex items-center gap-3 bg-[var(--bg)] border rounded-2xl px-4 py-3 transition-all duration-300 ${
          isFocused
            ? "border-indigo-400 dark:border-blue-400 shadow-xl shadow-indigo-500/10 dark:shadow-blue-500/10 scale-[1.01]"
            : "border-[var(--border)] shadow-lg"
        }`}
      >
        <Search
          className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${
            isFocused ? "text-indigo-500 dark:text-blue-400" : "text-[var(--text)] opacity-60"
          }`}
        />

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={currentPlaceholder} // اعمال خودکار افکت تایپ روی پلیس‌هولدر
          className="flex-1 bg-transparent text-sm md:text-base text-[var(--text-h)] placeholder:text-[var(--text)] placeholder:opacity-50 outline-none text-right"
        />

        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.7, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1 }}
              onClick={handleClear}
              className="text-[var(--text)] flex-shrink-0"
              aria-label="پاک کردن"
            >
              <X className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

        <div className="w-px h-5 bg-[var(--border)] flex-shrink-0" />

        <motion.button 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-sm font-semibold px-4 py-1.5 rounded-xl transition-colors duration-200 flex items-center gap-1.5 shadow-md"
        >
          جستجو
          <ArrowLeft className="w-3.5 h-3.5" />
        </motion.button>
      </div>

      {/* Dropdown نتایج */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full mt-2 right-0 left-0 z-50 bg-[var(--bg)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden"
          >
            {results.length > 0 ? (
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                {results.map((item, index) => (
                  <motion.li variants={itemVariants} key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group"
                      onClick={() => setIsFocused(false)}
                    >
                      <span className={`flex-shrink-0 p-1.5 rounded-lg ${CATEGORY_COLOR[item.category]}`}>
                        {CATEGORY_ICON[item.category]}
                      </span>

                      <div className="flex-1 text-right min-w-0">
                        <p className="text-sm font-medium text-[var(--text-h)] truncate group-hover:text-indigo-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-[var(--text)] opacity-70 truncate mt-0.5">{item.meta}</p>
                      </div>

                      <span className={`flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLOR[item.category]}`}>
                        {item.category}
                      </span>
                    </a>
                    {index < results.length - 1 && (
                      <div className="mx-4 border-t border-[var(--border)]" />
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                className="flex flex-col items-center gap-2 py-8 text-[var(--text)]"
              >
                <Search className="w-8 h-8 opacity-40" />
                <p className="text-sm">نتیجه‌ای پیدا نشد</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}