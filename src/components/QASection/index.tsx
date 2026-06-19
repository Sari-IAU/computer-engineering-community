import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "../../mockData/QAData";


export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      dir="rtl"
      className="w-full transition-colors duration-300"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 ">
        
        {/* هدر بخش سوالات متداول */}
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold flex items-center justify-center gap-3"
            style={{ color: "var(--text-h)", letterSpacing: "-0.5px" }}
          >
            <HelpCircle className="w-7 h-7 md:w-8 md:h-8" style={{ color: "var(--accent)" }} />
            سوالات <span style={{ color: "var(--accent)" }}>متداول</span>
          </h2>
        </div>

        {/* لیست آکاردئون‌ها */}
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl transition-all duration-300 overflow-hidden bg-slate-100/50 dark:bg-slate-800/10 hover:bg-slate-100/80 dark:hover:bg-slate-800/20"
                style={{ border: "1px solid var(--border)" }}
              >
                {/* دکمه سوال (هدر آکاردئون) */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-5 flex items-center justify-between gap-4 text-right font-bold text-sm md:text-base transition-colors focus:outline-none"
                  style={{ color: isOpen ? "var(--accent)" : "var(--text-h)" }}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[var(--accent)]" : "text-slate-400"
                    }`}
                    style={{ color: isOpen ? "var(--accent)" : "" }}
                  />
                </button>

                {/* پاسخ سوال (محتوای آکاردئون با انیمیشن روان) */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[200px] opacity-100 border-t" : "max-h-0 opacity-0"
                  }`}
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="p-5 text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}