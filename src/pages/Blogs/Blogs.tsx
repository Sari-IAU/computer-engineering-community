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

    // ۳. منطق مرتب‌سازی
    result.sort((a, b) => {
      let factorA = sortField === "id" ? a.id : parseInt(a.readTime) || 0;
      let factorB = sortField === "id" ? b.id : parseInt(b.readTime) || 0;
      
      return sortType === "asc" ? factorA - factorB : factorB - factorA;
    });

    return result;
  }, [searchQuery, activeCategory, sortField, sortType]);

  return (
    <div className="w-full min-h-screen pt-24 pb-16 transition-colors duration-300" dir="rtl" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* کانتینر اصلی دو ستونه */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* ================= سایدبار فیلترها ================= */}
          <aside className="w-full lg:w-80 flex flex-col gap-4">
            
            {/* باکس جستجو */}
            <div className="relative w-full">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--accent)" }} />
              <input
                type="text"
                placeholder="جستجو در عنوان، متن یا نویسنده..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-11 py-3.5 border rounded-2xl text-sm focus:outline-none transition-all"
                style={{ 
                  backgroundColor: "var(--card-bg)", 
                  borderColor: "var(--border)",
                  color: "var(--text-h)"
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border)"}
              />
            </div>

            {/* آکاردئون دسته‌بندی‌ها */}
            <div className="border rounded-2xl overflow-hidden transition-colors" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}>
              <button 
                onClick={() => toggleSection("categories")}
                className="w-full flex items-center justify-between p-4 text-sm font-bold transition-colors"
                style={{ color: "var(--text-h)" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--card-hover)"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
              >
                <span>دسته‌بندی موضوعی</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSection.categories ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${openSection.categories ? "max-h-60 border-t" : "max-h-0"}`} style={{ borderColor: "var(--border)" }}>
                <div className="p-4 flex flex-col gap-1.5">
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className="w-full text-right px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
                      style={{
                        backgroundColor: activeCategory === cat ? "var(--accent)" : "transparent",
                        color: activeCategory === cat ? "#ffffff" : "var(--text)"
                      }}
                      onMouseEnter={(e) => activeCategory !== cat && (e.currentTarget.style.backgroundColor = "var(--social-bg)")}
                      onMouseLeave={(e) => activeCategory !== cat && (e.currentTarget.style.backgroundColor = "transparent")}
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
            <div className="border rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm transition-colors" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}>
              
              {/* بخش سورت */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <span className="text-xs font-bold opacity-80 whitespace-nowrap" style={{ color: "var(--text)" }}>مرتب‌سازی بر اساس:</span>
                
                <div className="relative border rounded-xl px-3 py-2 text-xs font-bold flex items-center gap-1 shadow-sm" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)", color: "var(--text-h)" }}>
                  <select 
                    value={sortField} 
                    onChange={(e) => setSortField(e.target.value as SortField)}
                    className="bg-transparent focus:outline-none cursor-pointer pl-6 border-none appearance-none font-bold"
                  >
                    <option value="id" className="bg-[var(--card-bg)]">جدیدترین مقالات</option>
                    <option value="readTime" className="bg-[var(--card-bg)]">مدت زمان مطالعه</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 absolute left-3 opacity-60 pointer-events-none" />
                </div>

                <div className="relative border rounded-xl px-3 py-2 text-xs font-bold flex items-center gap-1 shadow-sm" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)", color: "var(--text-h)" }}>
                  <select 
                    value={sortType} 
                    onChange={(e) => setSortType(e.target.value as SortType)}
                    className="bg-transparent focus:outline-none cursor-pointer pl-6 border-none appearance-none font-bold"
                  >
                    <option value="desc" className="bg-[var(--card-bg)]">نزولی</option>
                    <option value="asc" className="bg-[var(--card-bg)]">صعودی</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 absolute left-3 opacity-60 pointer-events-none" />
                </div>
              </div>

              {/* نمایش تعداد نتایج و سوئیچ گرید/لیست */}
              <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0" style={{ borderColor: "var(--border)" }}>
                <span className="text-xs font-bold opacity-80" style={{ color: "var(--text)" }}>
                  نمایش نتیجه <span style={{ color: "var(--accent)" }}>{filteredPosts.length}</span> از {POSTS.length}
                </span>

                <div className="flex items-center gap-1 p-1 rounded-xl border" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}>
                  <button 
                    onClick={() => setViewMode("grid")}
                    className="p-1.5 rounded-lg transition-all"
                    style={{
                      backgroundColor: viewMode === "grid" ? "var(--card-bg)" : "transparent",
                      color: viewMode === "grid" ? "var(--accent)" : "var(--text)"
                    }}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode("list")}
                    className="p-1.5 rounded-lg transition-all"
                    style={{
                      backgroundColor: viewMode === "list" ? "var(--card-bg)" : "transparent",
                      color: viewMode === "list" ? "var(--accent)" : "var(--text)"
                    }}
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
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group shadow-md hover:shadow-xl ${
                      viewMode === "list" ? "sm:flex-row p-4 gap-5 items-center" : ""
                    }`}
                    style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}
                  >
                    {/* تصویر هدر مقاله */}
                    <div className={`relative overflow-hidden bg-gradient-to-br ${post.gradient} transition-transform duration-300 ${
                      viewMode === "grid" ? "w-full h-40" : "w-full sm:w-48 h-36 rounded-xl flex-shrink-0"
                    } flex items-center justify-center p-6 text-center`}>
                      
                      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:20px_20px]" />
                      
                      <h3 className="text-white font-black text-sm md:text-base relative z-10 leading-relaxed drop-shadow line-clamp-3">
                        {post.title}
                      </h3>
                      
                      {/* بج دسته‌بندی موضوعی با افکت شیشه‌ای تمیز */}
                      <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md bg-white/10 text-white border border-white/15">
                        {post.category}
                      </span>
                    </div>

                    {/* محتوا و متادیتای مقاله */}
                    <div className="p-5 flex-1 flex flex-col gap-4 w-full">
                      <p className="text-xs leading-relaxed line-clamp-2 font-medium" style={{ color: "var(--text)" }}>
                        {post.excerpt}
                      </p>

                      {/* متادیتا با رنگ‌آمیزی متوازن برای تم تیره */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-bold border-t pt-3 mt-auto" style={{ borderColor: "var(--border)", color: "var(--text)" }}>
                        <span className="flex items-center gap-1.5 opacity-90">
                          <User className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} /> {post.author}
                        </span>
                        <span className="flex items-center gap-1.5 opacity-60">
                          <Calendar className="w-3.5 h-3.5" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1.5 opacity-90">
                          <Clock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" /> {post.readTime}
                        </span>
                      </div>

                      {/* لینک هدایت به کل مقاله با انیمیشن حرکتی پیکان */}
                      <div className="flex justify-end pt-1">
                        <a 
                          href={`/blog/${post.id}`} 
                          className="inline-flex items-center gap-1 font-black text-xs transition-all group-hover:gap-2"
                          style={{ color: "var(--accent)" }}
                        >
                          <span>مطالعه مقاله</span>
                          <ArrowLeft className="w-3.5 h-3.5 transform transition-transform" />
                        </a>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-dashed rounded-2xl" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}>
                <SlidersHorizontal className="w-12 h-12 mx-auto opacity-30 mb-3" style={{ color: "var(--text)" }} />
                <p className="font-bold text-base" style={{ color: "var(--text-h)" }}>مقاله‌ای با این مشخصات یافت نشد!</p>
              </div>
            )}

          </main>

        </div>
      </div>
    </div>
  );
}