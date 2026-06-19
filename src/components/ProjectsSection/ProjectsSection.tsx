import { ArrowLeft, Users } from "lucide-react";

interface TeamMember {
  name: string;
  initials: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[];
  team: TeamMember[];
  gradient: string;
  githubUrl?: string;
  demoUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ربات تشخیص چهره",
    description: "سیستم تشخیص چهره real-time با استفاده از شبکه‌های عصبی کانولوشنال، قابل اجرا روی Raspberry Pi.",
    techs: ["Python", "OpenCV", "TensorFlow", "Raspberry Pi"],
    team: [
      { name: "علی رضایی", initials: "ع.ر", color: "bg-blue-500" },
      { name: "سارا کریمی", initials: "س.ک", color: "bg-violet-500" },
      { name: "نگار تهرانی", initials: "ن.ت", color: "bg-emerald-500" },
    ],
    gradient: "from-blue-600 via-indigo-600 to-violet-700",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "پلتفرم آموزش آنلاین",
    description: "سیستم مدیریت یادگیری با قابلیت ویدیو، کوئیز و پیشرفت تحصیلی برای دانشجویان دانشکده.",
    techs: ["React", "Node.js", "PostgreSQL", "Redis"],
    team: [
      { name: "محمد احمدی", initials: "م.ا", color: "bg-amber-500" },
      { name: "علی رضایی", initials: "ع.ر", color: "bg-blue-500" },
      { name: "سارا کریمی", initials: "س.ک", color: "bg-violet-500" },
      { name: "نگار تهرانی", initials: "ن.ت", color: "bg-emerald-500" },
    ],
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "تحلیل داده بورس",
    description: "ابزار تحلیل تکنیکال بازار بورس ایران با مدل‌های پیش‌بینی ML و داشبورد تعاملی.",
    techs: ["Python", "Pandas", "scikit-learn", "Plotly"],
    team: [
      { name: "سارا کریمی", initials: "س.ک", color: "bg-violet-500" },
      { name: "محمد احمدی", initials: "م.ا", color: "bg-amber-500" },
    ],
    gradient: "from-amber-600 via-orange-600 to-rose-700",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "اپلیکیشن مدیریت وظایف",
    description: "اپ موبایل cross-platform برای مدیریت پروژه‌های تیمی با سیستم نوتیفیکیشن هوشمند.",
    techs: ["Flutter", "Dart", "Firebase", "Supabase"],
    team: [
      { name: "نگار تهرانی", initials: "ن.ت", color: "bg-emerald-500" },
      { name: "علی رضایی", initials: "ع.ر", color: "bg-blue-500" },
      { name: "محمد احمدی", initials: "م.ا", color: "bg-amber-500" },
    ],
    gradient: "from-rose-600 via-pink-600 to-fuchsia-700",
    githubUrl: "#",
    demoUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      dir="rtl"
      className="w-full transition-colors duration-300"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p
              className="text-sm font-bold tracking-widest uppercase mb-2"
              style={{ color: "var(--accent)" }}
            >
              پروژه‌ها
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold"
              style={{ color: "var(--text-h)", letterSpacing: "-0.5px" }}
            >
              ساخته‌شده توسط{" "}
              <span style={{ color: "var(--accent)" }}>دانشجویان ما</span>
            </h2>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200 flex-shrink-0"
            style={{ color: "var(--accent)" }}
          >
            همه پروژه‌ها
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--social-bg)",
                border: "1px solid var(--border)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              {/* تصویر گرادیان */}
              <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex-shrink-0`}>
                {/* pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* لینک‌های بالا */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-lg backdrop-blur-sm bg-black/30 text-white border border-white/20 hover:bg-black/50 transition-all"
                    >
                      {/* <Github className="w-3.5 h-3.5" /> */}
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-lg backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all"
                      style={{ background: "var(--accent-bg)", borderColor: "var(--accent-border)" }}
                    >
                      دمو زنده
                    </a>
                  )}
                </div>

                {/* عنوان روی تصویر */}
                <div className="absolute bottom-3 right-4">
                  <h3 className="text-white text-lg font-extrabold leading-tight drop-shadow">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* محتوا */}
              <div className="flex flex-col flex-1 p-5 gap-4">

                {/* توضیح */}
                <p
                  className="text-sm leading-relaxed line-clamp-2"
                  style={{ color: "var(--text)" }}
                >
                  {project.description}
                </p>

                {/* تکنولوژی‌ها */}
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-bold px-2.5 py-1 rounded-lg"
                      style={{
                        background: "var(--accent-bg)",
                        color: "var(--accent)",
                        border: "1px solid var(--accent-border)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* تیم */}
                <div
                  className="flex items-center justify-between pt-3 mt-auto"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                    <span className="text-xs font-medium" style={{ color: "var(--text)" }}>
                      تیم سازنده
                    </span>
                  </div>
                  <div className="flex items-center">
                    {project.team.map((member, i) => (
                      <div
                        key={member.name}
                        title={member.name}
                        className={`w-7 h-7 rounded-full ${member.color} flex items-center justify-center text-[10px] font-bold text-white ring-2 transition-transform duration-200 hover:scale-110 hover:z-10 cursor-default`}
                        style={{
                          marginRight: i !== 0 ? "-8px" : "0",
                        //   ringColor: "var(--bg)",
                          zIndex: project.team.length - i,
                        }}
                      >
                        {member.initials}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}