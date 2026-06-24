import { useState, useMemo } from "react";
import {
  Search,
  Grid,
  List,
  ChevronDown,
  SlidersHorizontal,
  ExternalLink,
} from "lucide-react";
import { PROJECTS } from "../../mockData/projects";
import CustomSelect from "../../components/common/CustomSelect";

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

  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    PROJECTS.forEach((p) => p.techs.forEach((t) => techs.add(t)));
    return ["همه", ...Array.from(techs)];
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const filteredProjects = useMemo(() => {
    let result = [...PROJECTS];

    if (activeTech !== "همه") {
      result = result.filter((p) => p.techs.includes(activeTech));
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.techs.some((t) => t.toLowerCase().includes(query))
      );
    }

    result.sort((a, b) => {
      let factorA =
        sortField === "id"
          ? a.id
          : sortField === "teamCount"
          ? a.team.length
          : a.techs.length;
      let factorB =
        sortField === "id"
          ? b.id
          : sortField === "teamCount"
          ? b.team.length
          : b.techs.length;

      return sortType === "asc" ? factorA - factorB : factorB - factorA;
    });

    return result;
  }, [searchQuery, activeTech, sortField, sortType]);

  return (
    <div
      className="w-full min-h-screen pt-24 pb-16 transition-colors duration-300"
      dir="rtl"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-80 flex flex-col gap-4">
            <div className="relative w-full">
              <Search
                className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: "var(--accent)" }}
              />
              <input
                type="text"
                placeholder="جستجو در نام پروژه، تکنولوژی..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-11 py-3.5 border rounded-2xl text-sm focus:outline-none transition-all"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border)",
                  color: "var(--text-h)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>

            <div
              className="border rounded-2xl overflow-hidden transition-colors"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border)",
              }}
            >
              <button
                onClick={() => toggleSection("techs")}
                className="w-full flex items-center justify-between p-4 text-sm font-bold transition-colors"
                style={{ color: "var(--text-h)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--card-hover)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <span>تکنولوژی‌ها</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openSection.techs ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openSection.techs
                    ? "max-h-80 border-t overflow-y-auto"
                    : "max-h-0"
                }`}
                style={{ borderColor: "var(--border)" }}
              >
                <div className="p-4 flex flex-col gap-1.5">
                  {allTechs.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => setActiveTech(tech)}
                      className="w-full text-right px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
                      style={{
                        backgroundColor:
                          activeTech === tech ? "var(--accent)" : "transparent",
                        color: activeTech === tech ? "#ffffff" : "var(--text)",
                      }}
                      onMouseEnter={(e) =>
                        activeTech !== tech &&
                        (e.currentTarget.style.backgroundColor =
                          "var(--social-bg)")
                      }
                      onMouseLeave={(e) =>
                        activeTech !== tech &&
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 flex flex-col gap-6">
            <div
              className="border rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm transition-colors"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <span
                  className="text-xs font-bold opacity-80"
                  style={{ color: "var(--text)" }}
                >
                  مرتب‌سازی بر اساس:
                </span>

                <CustomSelect
                  value={sortField}
                  onChange={setSortField}
                  options={[
                    { label: "جدیدترین", value: "id" },
                    { label: "تعداد اعضا", value: "teamCount" },
                    { label: "تعداد تکنولوژی", value: "techCount" },
                  ]}
                />

                <CustomSelect
                  value={sortType}
                  onChange={setSortType}
                  options={[
                    { label: "نزولی", value: "desc" },
                    { label: "صعودی", value: "asc" },
                  ]}
                />
              </div>

              <div
                className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="text-xs font-bold opacity-80"
                  style={{ color: "var(--text)" }}
                >
                  نمایش نتیجه{" "}
                  <span style={{ color: "var(--accent)" }}>
                    {filteredProjects.length}
                  </span>{" "}
                  از {PROJECTS.length}
                </span>

                <div
                  className="flex items-center gap-1 p-1 rounded-xl border"
                  style={{
                    backgroundColor: "var(--bg)",
                    borderColor: "var(--border)",
                  }}
                >
                  <button
                    onClick={() => setViewMode("grid")}
                    className="p-1.5 rounded-lg transition-all"
                    style={{
                      backgroundColor:
                        viewMode === "grid" ? "var(--card-bg)" : "transparent",
                      color:
                        viewMode === "grid" ? "var(--accent)" : "var(--text)",
                    }}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className="p-1.5 rounded-lg transition-all"
                    style={{
                      backgroundColor:
                        viewMode === "list" ? "var(--card-bg)" : "transparent",
                      color:
                        viewMode === "list" ? "var(--accent)" : "var(--text)",
                    }}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {filteredProjects.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                    : "flex flex-col gap-4"
                }
              >
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group shadow-md hover:shadow-xl ${
                      viewMode === "list"
                        ? "sm:flex-row p-4 gap-5 items-center"
                        : ""
                    }`}
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div
                      className={`relative overflow-hidden bg-gradient-to-br ${
                        project.gradient
                      } transition-transform duration-300 ${
                        viewMode === "grid"
                          ? "w-full h-36"
                          : "w-full sm:w-44 h-32 rounded-xl flex-shrink-0"
                      } flex items-center justify-center`}
                    >
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

                      <h4 className="text-white font-black text-base md:text-lg relative z-10 drop-shadow px-4 text-center">
                        {project.title}
                      </h4>
                    </div>

                    <div className="p-5 flex-1 flex flex-col gap-4 w-full">
                      <p
                        className="text-xs leading-relaxed line-clamp-2 font-medium"
                        style={{ color: "var(--text)" }}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.techs.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-bold px-2.5 py-1 rounded-md border"
                            style={{
                              backgroundColor: "var(--bg)",
                              borderColor: "var(--border)",
                              color: "var(--text-h)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div
                        className="flex items-center justify-between border-t pt-3 mt-auto"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <div className="flex items-center -space-x-2 space-x-reverse">
                          {project.team.map((member, mIdx) => (
                            <div
                              key={mIdx}
                              className={`w-7 h-7 rounded-full text-white text-[10px] font-black flex items-center justify-center ring-2 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-20 ${
                                member.color || "bg-indigo-600"
                              }`}
                              style={{
                                borderColor: "var(--card-bg)",
                              }}
                              title={member.name}
                            >
                              {member.initials}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              className="px-3 py-1.5 rounded-xl text-white flex items-center gap-1 text-[10px] font-bold shadow-sm transition-all"
                              style={{ backgroundColor: "var(--accent)" }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.filter =
                                  "brightness(1.1)")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.filter = "none")
                              }
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
              <div
                className="text-center py-20 border border-dashed rounded-2xl"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border)",
                }}
              >
                <SlidersHorizontal
                  className="w-12 h-12 mx-auto opacity-30 mb-3"
                  style={{ color: "var(--text)" }}
                />
                <p
                  className="font-bold text-base"
                  style={{ color: "var(--text-h)" }}
                >
                  پروژه‌ای با این مشخصات یافت نشد!
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
