import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "../../mockData/QAData";

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const listContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  } as const;

  return (
    <section
      dir="rtl"
      className="w-full transition-colors duration-300 bg-[var(--bg)]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold flex items-center justify-center gap-3 text-[var(--text-h)]"
            style={{ letterSpacing: "-0.5px" }}
          >
            <HelpCircle className="w-7 h-7 md:w-8 md:h-8" style={{ color: "var(--accent)" }} />
            سوالات <span style={{ color: "var(--accent)" }}>متداول</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={listContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4"
        >
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="rounded-2xl transition-colors duration-300 overflow-hidden border"
                style={{ 
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border)"
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--card-hover)"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--card-bg)"}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-5 flex items-center justify-between gap-4 text-right font-bold text-sm md:text-base transition-colors focus:outline-none"
                  style={{ color: isOpen ? "var(--accent)" : "var(--text-h)" }}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "text-slate-400 dark:text-slate-500"
                    }`}
                    style={{ color: isOpen ? "var(--accent)" : "" }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: { height: { duration: 0.25, ease: "easeOut" }, opacity: { duration: 0.2 } }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: { height: { duration: 0.2, ease: "easeIn" }, opacity: { duration: 0.15 } }
                      }}
                      className="overflow-hidden border-t"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <p className="p-5 text-xs md:text-sm leading-relaxed text-[var(--text)] font-medium">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}