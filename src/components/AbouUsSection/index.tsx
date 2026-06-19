import { ArrowLeft, GitBranch, Link, Send } from "lucide-react";
import { TEAM_MEMBERS, type TeamMember } from "../../mockData/teamData";

export default function AboutSection() {
  return (
    <section
      dir="rtl"
      className="w-full transition-colors duration-300"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* هدر بخش درباره ما */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <p
              className="text-sm font-bold tracking-widest uppercase mb-2"
              style={{ color: "var(--accent)" }}
            >
              آشنایی با انجمن
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold"
              style={{ color: "var(--text-h)", letterSpacing: "-0.5px" }}
            >
              اعضای اصلی <span style={{ color: "var(--accent)" }}>شورای مرکزی</span>
            </h2>
          </div>
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200 flex-shrink-0"
            style={{ color: "var(--accent)" }}
          >
            درباره ما و اهداف انجمن
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

        {/* گرید اعضای تیم - کامپوننت آواتارها مشابه عکس ارسالی */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-6 pt-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group relative flex flex-col items-center p-6 rounded-2xl bg-slate-100/60 dark:bg-slate-800/20 transition-all duration-300 text-center"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* آواتار دایره‌ای شناور روی کارت */}
              <div className="absolute -top-12 w-24 h-24 rounded-full p-1 bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border border-slate-200 dark:border-slate-700/50"
                />
              </div>

              {/* مشخصات فردی */}
              <div className="mt-12 mb-5 flex flex-col gap-1.5">
                <h3
                  className="font-extrabold text-base transition-colors"
                  style={{ color: "var(--text-h)" }}
                >
                  {member.name}
                </h3>
                <p className="text-xs font-semibold opacity-70" style={{ color: "var(--accent)" }}>
                  {member.role}
                </p>
              </div>

              {/* آیکون شبکه‌های اجتماعی پایین کارت */}
              <div className="flex items-center justify-center gap-2.5 mt-auto">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700/40 shadow-sm transition-all hover:scale-105"
                  >
                    {/* <Linkedin  /> */}
                    <Link className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-slate-700/40 shadow-sm transition-all hover:scale-105"
                  >
                    {/* <Github  /> */}
                    <GitBranch className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.socials.telegram && (
                  <a
                    href={member.socials.telegram}
                    className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700/40 shadow-sm transition-all hover:scale-105"
                  >
                    <Send className="w-3.5 h-3.5 -rotate-45 translate-x-0.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}