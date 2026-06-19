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
    <div className="w-full min-h-screen pt-24 pb-16 transition-colors duration-300" dir="rtl" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* کانتینر اصلی */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* ================= سایدبار فیلترها ================= */}
          <aside className="w-full lg:w-80 flex flex-col gap-4">
            
            {/* باکس جستجو مدرن */}
            <div className="relative w-full">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--accent)" }} />
              <input
                type="text"
                placeholder="جستجو رویداد..."
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
                <span>دسته‌بندی‌ها</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSection.categories ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${openSection.categories ? "max-h-60 border-t" : "max-h-0"}`} style={{ borderColor: "var(--border)" }}>
                <div className="p-4 flex flex-col gap-1.5">
                  {CATEGORIES.map((cat) => (
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

            {/* آکاردئون نحوه برگزاری */}
            <div className="border rounded-2xl overflow-hidden transition-colors" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}>
              <button 
                onClick={() => toggleSection("location")}
                className="w-full flex items-center justify-between p-4 text-sm font-bold transition-colors"
                style={{ color: "var(--text-h)" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--card-hover)"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
              >
                <span>نحوه برگزاری</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSection.location ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${openSection.location ? "max-h-40 border-t" : "max-h-0"}`} style={{ borderColor: "var(--border)" }}>
                <div className="p-4 flex flex-col gap-1.5">
                  {(["همه", "حضوری", "آنلاین"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setLocationType(type)}
                      className="w-full text-right px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
                      style={{
                        backgroundColor: locationType === type ? "var(--accent)" : "transparent",
                        color: locationType === type ? "#ffffff" : "var(--text)"
                      }}
                      onMouseEnter={(e) => locationType !== type && (e.currentTarget.style.backgroundColor = "var(--social-bg)")}
                      onMouseLeave={(e) => locationType !== type && (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </aside>

          {/* ================= بخش اصلی کارت‌ها ================= */}
          <main className="flex-1 flex flex-col gap-6">
            
            {/* نوار ابزار بالای گرید (تبدیل به یک کارت شیک و تاریک) */}
            <div className="border rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm transition-colors" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}>
              
              {/* بخش سورت */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <span className="text-xs font-bold opacity-80 whitespace-nowrap" style={{ color: "var(--text)" }}>مرتب‌سازی بر اساس:</span>
                
                <div className="relative border rounded-xl px-3 py-2 text-xs font-bold flex items-center gap-1 shadow-sm" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)", color: "var(--text-h)" }}>
                  <select 
                    value={sortField} 
                    onChange={(e) => setSortField(e.target.value as SortField)}
                    className="bg-transparent focus:outline-none cursor-pointer pl-6 border-none appearance-none"
                  >
                    <option value="id" className="bg-[var(--card-bg)]">تاریخ انتشار</option>
                    <option value="capacity" className="bg-[var(--card-bg)]">ظرفیت باقی‌مانده</option>
                    <option value="registered" className="bg-[var(--card-bg)]">تعداد ثبت‌نامی‌ها</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 absolute left-3 opacity-60 pointer-events-none" />
                </div>

                <div className="relative border rounded-xl px-3 py-2 text-xs font-bold flex items-center gap-1 shadow-sm" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)", color: "var(--text-h)" }}>
                  <select 
                    value={sortType} 
                    onChange={(e) => setSortType(e.target.value as SortType)}
                    className="bg-transparent focus:outline-none cursor-pointer pl-6 border-none appearance-none"
                  >
                    <option value="desc" className="bg-[var(--card-bg)]">نزولی</option>
                    <option value="asc" className="bg-[var(--card-bg)]">صعودی</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 absolute left-3 opacity-60 pointer-events-none" />
                </div>
              </div>

              {/* نمایش تعداد نتایج و سوئیچ گرید */}
              <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0" style={{ borderColor: "var(--border)" }}>
                <span className="text-xs font-bold opacity-80" style={{ color: "var(--text)" }}>
                  نمایش نتیجه <span style={{ color: "var(--accent)" }}>{filteredEvents.length}</span> از {MOCK_EVENTS.length}
                </span>

                {/* سوئیچر گرید */}
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

            {/* نمایش کارت‌ها */}
            {filteredEvents.length > 0 ? (
              <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5" : "flex flex-col gap-4"}>
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-dashed rounded-2xl" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}>
                <SlidersHorizontal className="w-12 h-12 mx-auto opacity-30 mb-3" style={{ color: "var(--text)" }} />
                <p className="font-bold text-base" style={{ color: "var(--text-h)" }}>رویدادی با این مشخصات یافت نشد!</p>
              </div>
            )}

          </main>

        </div>
      </div>
    </div>
  );
}