import { useState, useMemo } from "react";
import { Search, Grid, List, ChevronDown, SlidersHorizontal,  ExternalLink } from "lucide-react";
import { PROJECTS } from "../../mockData/projects";

type SortType = "asc" | "desc";
type SortField = "id" | "teamCount" | "techCount";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTech, setActiveTech] = useState<string>("همه");
  
  const [sortField, setSortField] = useState<SortField>("id");
  const [sortType, setSortType] = useState<SortType>("desc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [openSection, setOpenSection] = useState<{ [key: string]: boolean }>({
    techs: true,
  });

  // استخراج تمام تکنولوژی‌های یونیک از داخل پروژه‌ها برای منوی فیلتر
  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    PROJECTS.forEach(p => p.techs.forEach(t => techs.add(t)));
    return ["همه", ...Array.from(techs)];
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const filteredProjects = useMemo(() => {
    let result = [...PROJECTS];

    // فیلتر بر اساس تکنولوژی انتخابی
    if (activeTech !== "همه") {
      result = result.filter(p => p.techs.includes(activeTech));
    }

    // فیلتر متنی (جستجو در عنوان، توضیحات و تک تک تکنولوژی‌ها)
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.techs.some(t => t.toLowerCase().includes(query))
      );
    }

    // منطق مرتب‌سازی
    result.sort((a, b) => {
      let factorA = sortField === "id" ? a.id : sortField === "teamCount" ? a.team.length : a.techs.length;
      let factorB = sortField === "id" ? b.id : sortField === "teamCount" ? b.team.length : b.techs.length;
      
      return sortType === "asc" ? factorA - factorB : factorB - factorA;
    });

    return result;
  }, [searchQuery, activeTech, sortField, sortType]);

  return (
    <div className="w-full min-h-screen bg-[var(--bg)] pt-24 pb-16 transition-colors duration-300" dir="rtl">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* کانتینر اصلی دو ستونه که با کل پروژه یکدسته */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* ================= سایدبار فیلترها ================= */}
          <aside className="w-full lg:w-80 flex flex-col gap-4">
            
            {/* باکس جستجو */}
            <div className="relative w-full">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500" />
              <input
                type="text"
                placeholder="جستجو در نام پروژه، تکنولوژی..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-11 py-3 bg-slate-100/70 dark:bg-slate-800/50 border border-[var(--border)] rounded-2xl text-sm focus:outline-none focus:border-indigo-500 text-[var(--text-h)] transition-all"
              />
            </div>

            {/* آکاردئون فیلتر بر اساس تکنولوژی‌های استخراج شده */}
            <div className="bg-slate-50 dark:bg-slate-800/30 border border-[var(--border)] rounded-2xl overflow-hidden">
              <button 
                onClick={() => toggleSection("techs")}
                className="w-full flex items-center justify-between p-4 text-sm font-bold text-[var(--text-h)] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span>تکنولوژی‌ها</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSection.techs ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${openSection.techs ? "max-h-80 border-t border-[var(--border)] overflow-y-auto" : "max-h-0"}`}>
                <div className="p-4 flex flex-col gap-2">
                  {allTechs.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => setActiveTech(tech)}
                      className={`w-full text-right px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        activeTech === tech 
                          ? "bg-indigo-600 text-white shadow-sm" 
                          : "text-[var(--text)] hover:bg-slate-200/50 dark:hover:bg-white/5"
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </aside>

          {/* ================= بخش اصلی کارت‌ها ================= */}
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
                    <option value="id">جدیدترین</option>
                    <option value="teamCount">تعداد اعضای تیم</option>
                    <option value="techCount">تعداد تکنولوژی‌ها</option>
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
                  نمایش نتیجه <span className="text-indigo-600 dark:text-blue-400">{filteredProjects.length}</span> از {PROJECTS.length}
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

            {/* گرید پروژه‌ها */}
            {filteredProjects.length > 0 ? (
              <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5" : "flex flex-col gap-4"}>
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`bg-slate-50/50 dark:bg-slate-800/10 border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group ${
                      viewMode === "list" ? "sm:flex-row p-4 gap-5 items-center" : ""
                    }`}
                  >
                    {/* هدر گرافیکی کارت که از تم گرادینت دیتای شما استفاده می‌کنه */}
                    <div className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} transition-transform duration-300 ${
                      viewMode === "grid" ? "w-full h-36" : "w-full sm:w-44 h-32 rounded-xl"
                    } flex items-center justify-center`}>
                      
                      {/* پترن پس‌زمینه کارت برای جذابیت بیشتر */}
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
                      
                      <h4 className="text-white font-black text-lg md:text-xl relative z-10 drop-shadow-sm px-4 text-center">
                        {project.title}
                      </h4>
                    </div>

                    {/* محتوای متنی و جزئیات پروژه */}
                    <div className="p-5 flex-1 flex flex-col gap-3 w-full">
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* لیست تگ‌های تکنولوژی */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techs.map(tech => (
                          <span key={tech} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-[var(--border)]">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* بخش پایینی: تیم توسعه و لینک‌ها */}
                      <div className="flex items-center justify-between border-t border-[var(--border)] pt-3 mt-auto">
                        
                        {/* انباشت آواتار اعضای تیم (Avatar Stack) */}
                        <div className="flex items-center -space-x-2 space-x-reverse">
                          {project.team.map((member, mIdx) => (
                            <div
                              key={mIdx}
                              className={`w-7 h-7 rounded-full text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white dark:ring-slate-900 ${member.color}`}
                              title={member.name}
                            >
                              {member.initials}
                            </div>
                          ))}
                        </div>

                        {/* دکمه‌های گیت‌هاب و دمو */}
                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl} 
                              className="p-1.5 rounded-lg border border-[var(--border)] text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                              title="گیت‌هاب پروژه"
                            >
                              {/* <Github className="w-3.5 h-3.5" /> */}
                            </a>
                          )}
                          {project.demoUrl && (
                            <a 
                              href={project.demoUrl} 
                              className="p-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors flex items-center gap-1 text-[10px] font-bold"
                              title="مشاهده دمو"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>دمو</span>
                            </a>
                          )}
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-100/20 dark:bg-slate-800/10 border border-dashed border-[var(--border)] rounded-2xl">
                <SlidersHorizontal className="w-12 h-12 mx-auto text-[var(--text)] opacity-30 mb-3" />
                <p className="text-[var(--text-h)] font-bold text-base">پروژه‌ای با این مشخصات یافت نشد!</p>
              </div>
            )}

          </main>

        </div>
      </div>
    </div>
  );
}