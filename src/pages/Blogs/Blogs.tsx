import { useState, useMemo } from "react";
import { Search, Grid, List, ChevronDown, SlidersHorizontal, User, Calendar, Clock, ArrowLeft } from "lucide-react";
import { POSTS, type Post } from "../../mockData/blogData"; 

type SortType = "asc" | "desc";
type SortField = "id" | "readTime";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("همه");
  
  const [sortField, setSortField] = useState<SortField>("id");
  const [sortType, setSortType] = useState<SortType>("desc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [openSection, setOpenSection] = useState<{ [key: string]: boolean }>({
    categories: true,
  });

  // استخراج خودکار تمام دسته‌بندی‌های یونیک موجود در مقالات
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    POSTS.forEach(p => categories.add(p.category));
    return ["همه", ...Array.from(categories)];
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const filteredPosts = useMemo(() => {
    let result = [...POSTS];

    // ۱. فیلتر بر اساس دسته‌بندی
    if (activeCategory !== "همه") {
      result = result.filter(p => p.category === activeCategory);
    }

    // ۲. فیلتر متنی (سرچ در عنوان، خلاصه و نام نویسنده)
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.excerpt.toLowerCase().includes(query) ||
        p.author.toLowerCase().includes(query)
      );
    }

    // ۳. منطق مرتب‌سازی (تبدیل زمان مطالعه مثل "۱۲ دقیقه" به عدد برای سورت دقیق)
    result.sort((a, b) => {
      let factorA = sortField === "id" ? a.id : parseInt(a.readTime) || 0;
      let factorB = sortField === "id" ? b.id : parseInt(b.readTime) || 0;
      
      return sortType === "asc" ? factorA - factorB : factorB - factorA;
    });

    return result;
  }, [searchQuery, activeCategory, sortField, sortType]);

  return (
    <div className="w-full min-h-screen bg-[var(--bg)] pt-24 pb-16 transition-colors duration-300" dir="rtl">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* کانتینر اصلی دو ستونه */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* ================= سایدبار فیلترها ================= */}
          <aside className="w-full lg:w-80 flex flex-col gap-4">
            
            {/* باکس جستجو */}
            <div className="relative w-full">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500" />
              <input
                type="text"
                placeholder="جستجو در عنوان، متن یا نویسنده..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-11 py-3 bg-slate-100/70 dark:bg-slate-800/50 border border-[var(--border)] rounded-2xl text-sm focus:outline-none focus:border-indigo-500 text-[var(--text-h)] transition-all"
              />
            </div>

            {/* آکاردئون دسته‌بندی‌ها */}
            <div className="bg-slate-50 dark:bg-slate-800/30 border border-[var(--border)] rounded-2xl overflow-hidden">
              <button 
                onClick={() => toggleSection("categories")}
                className="w-full flex items-center justify-between p-4 text-sm font-bold text-[var(--text-h)] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span>دسته‌بندی موضوعی</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSection.categories ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${openSection.categories ? "max-h-60 border-t border-[var(--border)]" : "max-h-0"}`}>
                <div className="p-4 flex flex-col gap-2">
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-right px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        activeCategory === cat 
                          ? "bg-indigo-600 text-white shadow-sm" 
                          : "text-[var(--text)] hover:bg-slate-200/50 dark:hover:bg-white/5"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </aside>

          {/* ================= بخش اصلی لیست مقالات ================= */}
          <main className="flex-1 flex flex-col gap-6">
            
            {/* نوار ابزار بالای مقالات */}
            <div className="bg-slate-50 dark:bg-slate-800/10 border border-[var(--border)] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              
              {/* بخش سورت */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <span className="text-xs font-medium text-[var(--text)] opacity-70 whitespace-nowrap">مرتب‌سازی بر اساس:</span>
                
                <div className="relative bg-white dark:bg-slate-800 border border-[var(--border)] rounded-xl px-3 py-2 text-xs font-bold text-[var(--text-h)] flex items-center gap-1 shadow-sm">
                  <select 
                    value={sortField} 
                    onChange={(e) => setSortField(e.target.value as SortField)}
                    className="bg-transparent focus:outline-none cursor-pointer pl-6"
                  >
                    <option value="id">جدیدترین مقالات</option>
                    <option value="readTime">مدت زمان مطالعه</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 absolute left-3 opacity-60 pointer-events-none" />
                </div>

                <div className="relative bg-white dark:bg-slate-800 border border-[var(--border)] rounded-xl px-3 py-2 text-xs font-bold text-[var(--text-h)] flex items-center gap-1 shadow-sm">
                  <select 
                    value={sortType} 
                    onChange={(e) => setSortType(e.target.value as SortType)}
                    className="bg-transparent focus:outline-none cursor-pointer pl-6"
                  >
                    <option value="desc">نزولی</option>
                    <option value="asc">صعودی</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 absolute left-3 opacity-60 pointer-events-none" />
                </div>
              </div>

              {/* نمایش تعداد نتایج و سوئیچ گرید/لیست */}
              <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-[var(--border)]">
                <span className="text-xs font-bold text-[var(--text)] opacity-80">
                  نمایش نتیجه <span className="text-indigo-600 dark:text-blue-400">{filteredPosts.length}</span> از {POSTS.length}
                </span>

                <div className="flex items-center gap-1 bg-slate-200/50 dark:bg-slate-800 p-1 rounded-xl border border-[var(--border)]">
                  <button 
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-lg transition-all ${viewMode === "grid" ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-blue-400 shadow-sm" : "text-[var(--text)] opacity-60"}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded-lg transition-all ${viewMode === "list" ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-blue-400 shadow-sm" : "text-[var(--text)] opacity-60"}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* گرید/لیست رندر مقالات */}
            {filteredPosts.length > 0 ? (
              <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5" : "flex flex-col gap-4"}>
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className={`bg-slate-50/50 dark:bg-slate-800/10 border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group ${
                      viewMode === "list" ? "sm:flex-row p-4 gap-5 items-center" : ""
                    }`}
                  >
                    {/* تصویر هدر مقاله (با تم گرادینت دیتای شما) */}
                    <div className={`relative overflow-hidden bg-gradient-to-br ${post.gradient} transition-transform duration-300 ${
                      viewMode === "grid" ? "w-full h-40" : "w-full sm:w-48 h-36 rounded-xl"
                    } flex items-center justify-center p-6 text-center`}>
                      
                      {/* خطوط و بافت گرافیکی پس‌زمینه برای عمق دادن */}
                      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:20px_20px]" />
                      
                      <h3 className="text-white font-extrabold text-sm md:text-base relative z-10 leading-relaxed drop-shadow-sm line-clamp-3">
                        {post.title}
                      </h3>
                      
                      {/* بج دسته‌بندی موضوعی */}
                      <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md bg-white/10 text-white border border-white/10">
                        {post.category}
                      </span>
                    </div>

                    {/* محتوا و متادیتای مقاله */}
                    <div className="p-5 flex-1 flex flex-col gap-3 w-full">
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* متادیتا (نویسنده، تاریخ، زمان مطالعه) */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-slate-400 font-semibold border-t border-[var(--border)] pt-3 mt-auto">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-indigo-500" /> {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-500" /> {post.readTime}
                        </span>
                      </div>

                      {/* لینک هدایت به کل مقاله */}
                      <div className="flex justify-end pt-1">
                        <a 
                          href={`/blog/${post.id}`} 
                          className="inline-flex items-center gap-1 text-[var(--accent)] font-bold text-xs hover:gap-2 transition-all"
                        >
                          <span>مطالعه مقاله</span>
                          <ArrowLeft className="w-3.5 h-3.5 transform" />
                        </a>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-100/20 dark:bg-slate-800/10 border border-dashed border-[var(--border)] rounded-2xl">
                <SlidersHorizontal className="w-12 h-12 mx-auto text-[var(--text)] opacity-30 mb-3" />
                <p className="text-[var(--text-h)] font-bold text-base">مقاله‌ای با این مشخصات یافت نشد!</p>
              </div>
            )}

          </main>

        </div>
      </div>
    </div>
  );
}