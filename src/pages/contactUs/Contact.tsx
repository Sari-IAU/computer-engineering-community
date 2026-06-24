import { useState } from "react";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, message });
  };

  return (
    <div
      className="w-full min-h-screen pt-28 pb-16 transition-colors duration-300"
      dir="rtl"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* ================= هدر صفحه ================= */}
        <section className="text-center flex flex-col items-center gap-3">
          <span
            className="text-xs font-bold px-3 py-1 rounded-full border"
            style={{
              backgroundColor: "var(--accent-bg)",
              color: "var(--accent)",
              borderColor: "var(--accent-border)",
            }}
          >
            ارتباط مستقیم
          </span>
          <h1
            className="font-black text-2xl md:text-4xl"
            style={{ color: "var(--text-h)" }}
          >
            با ما در <span style={{ color: "var(--accent)" }}>ارتباط</span>{" "}
            باشید
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
            نظرات، پیشنهادات یا سوالات خود را از طریق راه‌های زیر یا فرم زیر با
            ما در میان بگذارید.
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* کارت آدرس */}
          <div
            className="border rounded-2xl p-5 flex items-center gap-4 shadow-sm transition-colors duration-300"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border)",
            }}
          >
            <div
              className="p-3 rounded-xl flex-shrink-0"
              style={{ backgroundColor: "var(--accent-bg)" }}
            >
              <MapPin className="w-5 h-5" style={{ color: "var(--accent)" }} />
            </div>
            <div className="flex flex-col gap-1 text-right">
              <span
                className="text-[11px] font-bold"
                style={{ color: "var(--text)" }}
              >
                مراجعه حضوری
              </span>
              <span
                className="text-xs md:text-sm font-bold"
                style={{ color: "var(--text-h)" }}
              >
       دانشگاه آزاد واحد ساری، دانشکده علوم و تربیت، طبقه سوم
              </span>
            </div>
          </div>

          {/* کارت ایمیل */}
          <div
            className="border rounded-2xl p-5 flex items-center gap-4 shadow-sm transition-colors duration-300"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border)",
            }}
          >
            <div
              className="p-3 rounded-xl flex-shrink-0"
              style={{ backgroundColor: "var(--accent-bg)" }}
            >
              <Mail className="w-5 h-5" style={{ color: "var(--accent)" }} />
            </div>
            <div className="flex flex-col gap-1 text-right">
              <span
                className="text-[11px] font-bold"
                style={{ color: "var(--text)" }}
              >
                ارتباط ایمیلی
              </span>
              <a
                href="mailto:Info@scsa.ir"
                className="text-xs md:text-sm font-mono font-bold hover:underline"
                style={{ color: "var(--text-h)" }}
              >
                Info@scsa.ir
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col gap-5 transition-colors duration-300"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border)",
          }}
        >
          <div
            className="flex items-center gap-2 mb-2 pb-3 border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <MessageSquare
              className="w-5 h-5"
              style={{ color: "var(--accent)" }}
            />
            <h2
              className="font-extrabold text-base sm:text-lg m-0"
              style={{ color: "var(--text-h)" }}
            >
              ارسال پیام مستقیم به انجمن
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* فیلد ایمیل */}
            <div className="flex flex-col gap-2 text-right">
              <label
                className="text-xs font-bold"
                style={{ color: "var(--text-h)" }}
              >
                پست الکترونیک
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                required
                className="w-full p-3 rounded-xl text-sm font-medium font-mono border focus:outline-none bg-[var(--bg)] transition-all"
                style={{ borderColor: "var(--border)", color: "var(--text-h)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>

            <div className="flex flex-col gap-2 text-right">
              <label
                className="text-xs font-bold"
                style={{ color: "var(--text-h)" }}
              >
                نوع درخواست
              </label>
              <select
                className="w-full p-3 rounded-xl text-sm font-medium border focus:outline-none bg-[var(--bg)] transition-all cursor-pointer"
                style={{ borderColor: "var(--border)", color: "var(--text-h)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              >
                <option>پیشنهاد یا انتقاد</option>
                <option>همکاری در پروژه‌ها</option>
                <option>سوالات عمومی</option>
              </select>
            </div>
          </div>

          {/* فیلد متن پیام */}
          <div className="flex flex-col gap-2 text-right">
            <label
              className="text-xs font-bold"
              style={{ color: "var(--text-h)" }}
            >
              متن پیام شما
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="سوال یا پیشنهاد خود را اینجا بنویسید..."
              required
              rows={4}
              className="w-full p-3 rounded-xl text-sm font-medium border focus:outline-none bg-[var(--bg)] transition-all resize-none"
              style={{ borderColor: "var(--border)", color: "var(--text-h)" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 text-white active:scale-[0.99] shadow-md transition-all cursor-pointer mt-2"
            style={{
              backgroundColor: "var(--accent)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = "brightness(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
          >
            ارسال پیام مستقیم
            <Send className="w-4 h-4 transform -rotate-45" />
          </button>
        </form>
      </div>
    </div>
  );
}
