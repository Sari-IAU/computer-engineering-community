import { useState, useMemo } from "react";
import { Search, Grid, List, ChevronDown, SlidersHorizontal } from "lucide-react";
import { MOCK_EVENTS, type FilterCategory, CATEGORIES } from "../../mockData/enventData";
import EventCard from "../../components/event/EventCard";

type SortType = "asc" | "desc";
type SortField = "id" | "capacity" | "registered";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("همه");
  const [locationType, setLocationType] = useState<"همه" | "حضوری" | "آنلاین">("همه");
  
  const [sortField, setSortField] = useState<SortField>("id");
  const [sortType, setSortType] = useState<SortType>("desc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [openSection, setOpenSection] = useState<{ [key: string]: boolean }>({
    categories: true,
    location: true,
  });

  const toggleSection = (section: string) => {
    setOpenSection(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const filteredEvents = useMemo(() => {
    let result = [...MOCK_EVENTS];

    if (activeCategory !== "همه") {
      result = result.filter(e => e.category === activeCategory);
    }

    if (locationType !== "همه") {
      result = result.filter(e => e.locationType === locationType);
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(e => e.title.toLowerCase().includes(query) || e.tags.some(t => t.toLowerCase().includes(query)));
    }

    result.sort((a, b) => {
      let factorA = sortField === "id" ? a.id : sortField === "capacity" ? (a.capacity - a.registered) : a.registered;
      let factorB = sortField === "id" ? b.id : sortField === "capacity" ? (b.capacity - b.registered) : b.registered;
      
      return sortType === "asc" ? factorA - factorB : factorB - factorA;
    });

    return result;
  }, [searchQuery, activeCategory, locationType, sortField, sortType]);

  return (
    <div className="w-full min-h-screen bg-[var(--bg)] pt-24 pb-16 transition-colors duration-300" dir="rtl">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* کانتینر اصلی */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* ================= سایدبار فیلترها (سمت راست در دسکتاپ به خاطر RTL) ================= */}
          <aside className="w-full lg:w-80 flex flex-col gap-4">
            
            {/* باکس جستجو */}
            <div className="relative w-full">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500" />
              <input
                type="text"
                placeholder="جستجو رویداد..."
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
                <span>دسته‌بندی‌ها</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSection.categories ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${openSection.categories ? "max-h-60 border-t border-[var(--border)]" : "max-h-0"}`}>
                <div className="p-4 flex flex-col gap-2">
                  {CATEGORIES.map((cat) => (
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

            {/* آکاردئون نحوه برگزاری */}
            <div className="bg-slate-50 dark:bg-slate-800/30 border border-[var(--border)] rounded-2xl overflow-hidden">
              <button 
                onClick={() => toggleSection("location")}
                className="w-full flex items-center justify-between p-4 text-sm font-bold text-[var(--text-h)] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span>نحوه برگزاری</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSection.location ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${openSection.location ? "max-h-40 border-t border-[var(--border)]" : "max-h-0"}`}>
                <div className="p-4 flex flex-col gap-2">
                  {(["همه", "حضوری", "آنلاین"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setLocationType(type)}
                      className={`w-full text-right px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        locationType === type 
                          ? "bg-indigo-600 text-white shadow-sm" 
                          : "text-[var(--text)] hover:bg-slate-200/50 dark:hover:bg-white/5"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </aside>

          {/* ================= بخش اصلی کارت‌ها (سمت چپ در دسکتاپ به خاطر RTL) ================= */}
          <main className="flex-1 flex flex-col gap-6">
            
            {/* نوار ابزار بالای گرید */}
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
                    <option value="id">تاریخ انتشار</option>
                    <option value="capacity">ظرفیت باقی‌مانده</option>
                    <option value="registered">تعداد ثبت‌نامی‌ها</option>
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

              {/* نمایش تعداد نتایج و سوئیچ گرید */}
              <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-[var(--border)]">
                <span className="text-xs font-bold text-[var(--text)] opacity-80">
                  نمایش نتیجه <span className="text-indigo-600 dark:text-blue-400">{filteredEvents.length}</span> از {MOCK_EVENTS.length}
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

            {/* نمایش کارت‌ها */}
            {filteredEvents.length > 0 ? (
              <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5" : "flex flex-col gap-4"}>
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-100/20 dark:bg-slate-800/10 border border-dashed border-[var(--border)] rounded-2xl">
                <SlidersHorizontal className="w-12 h-12 mx-auto text-[var(--text)] opacity-30 mb-3" />
                <p className="text-[var(--text-h)] font-bold text-base">رویدادی با این مشخصات یافت نشد!</p>
              </div>
            )}

          </main>

        </div>
      </div>
    </div>
  );
}