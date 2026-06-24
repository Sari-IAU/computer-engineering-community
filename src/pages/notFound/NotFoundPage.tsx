import { ArrowRight, Home, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import notFoundIcon from "../../assets/icons/404.svg";
export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center p-4 transition-colors duration-300"
      dir="rtl"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-md w-full text-center flex flex-col gap-3 items-center">
      
        <img src={notFoundIcon} />
        {/* عنوان و توضیحات */}
        <h2
          className="text-xl font-bold mb-2"
          style={{ color: "var(--text-h)" }}
        >
          صفحه مورد نظر یافت نشد
        </h2>
        <p
          className="mb-8 text-sm leading-relaxed opacity-70"
          style={{ color: "var(--text)" }}
        >
          متاسفیم! صفحه‌ای که به دنبال آن هستید وجود ندارد یا آدرس آن تغییر کرده
          است.
        </p>

        {/* دکمه‌های بازگشت */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 cursor-pointer py-3 rounded-2xl font-bold text-sm transition-all hover:scale-105 border"
            style={{ borderColor: "var(--border)", color: "var(--text-h)" }}
          >
            <ArrowRight className="w-4 h-4" />
            بازگشت
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-6 py-3 cursor-pointer rounded-2xl font-bold text-sm text-white transition-all hover:scale-105"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <Home className="w-4 h-4" />
            صفحه اصلی
          </button>
        </div>
      </div>
    </div>
  );
}
