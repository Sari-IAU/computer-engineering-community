import { ArrowLeft, GitBranch, Link, Send } from "lucide-react";
import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "../../mockData/teamData";
import userPlaceHolder from "../../assets/images/userPlaceHolder.png"
export default function AboutSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, 
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  return (
    <section
      dir="rtl"
      className="w-full transition-colors duration-300 bg-[var(--bg)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* هدر بخش درباره ما */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16"
        >
          <div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-h)]"
              style={{ letterSpacing: "-0.5px" }}
            >
              اعضای اصلی <span style={{ color: "var(--accent)" }}>شورای مرکزی</span>
            </h2>
          </div>
          <motion.a
            whileHover={{ x: -4 }}
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 flex-shrink-0"
            style={{ color: "var(--accent)" }}
          >
            درباره ما و اهداف انجمن
            <ArrowLeft className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-6 pt-8"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
              className="group relative flex flex-col items-center p-6 rounded-2xl border transition-all duration-300 text-center hover:shadow-xl"
              style={{ 
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border)" 
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--card-hover)"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--card-bg)"}
            >
              <div 
                className="absolute -top-12 w-24 h-24 rounded-full p-1 shadow-md transition-all duration-300 group-hover:shadow-indigo-500/10 group-hover:scale-105"
                style={{ backgroundColor: "var(--bg)" }}
              >
                <img
                  src={member.image || userPlaceHolder}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border transition-transform duration-500 group-hover:scale-110"
                  style={{ borderColor: "var(--border)" }}
                />
              </div>

              <div className="mt-12 mb-5 flex flex-col gap-1.5">
                <h3 className="font-extrabold text-base text-[var(--text-h)] group-hover:text-[var(--accent)] dark:group-hover:text-indigo-300 transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold opacity-90 transition-transform duration-200 group-hover:scale-[1.02]" style={{ color: "var(--accent)" }}>
                  {member.role}
                </p>
              </div>

              <div className="flex items-center justify-center gap-2.5 mt-auto">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border shadow-sm transition-all hover:scale-110"
                    style={{ backgroundColor: "var(--social-bg)", borderColor: "var(--border)" }}
                  >
                    <Link className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border shadow-sm transition-all hover:scale-110"
                    style={{ backgroundColor: "var(--social-bg)", borderColor: "var(--border)" }}
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.socials.telegram && (
                  <a
                    href={member.socials.telegram}
                    className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 border shadow-sm transition-all hover:scale-110"
                    style={{ backgroundColor: "var(--social-bg)", borderColor: "var(--border)" }}
                  >
                    <Send className="w-3.5 h-3.5 -rotate-45 translate-x-0.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}