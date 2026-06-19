import { useState } from "react";
import { Lock, Mail, Eye, EyeOff, LogIn, UserPlus } from "lucide-react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true); // سوییچ بین مود ورود و ثبت‌نام
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login:", { email, password });
    } else {
      console.log("Register:", { name, email, password });
    }
  };

  return (
    <div 
      className="w-full min-h-screen pt-24 pb-16 flex items-center justify-center transition-colors duration-300"
      dir="rtl"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-md w-full px-4">
        {/* کارت اصلی فرم */}
        <div 
          className="border p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col gap-6 transition-all duration-300"
          style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}
        >
          {/* هدر کارت */}
          <div className="text-center flex flex-col items-center gap-2">
            <div 
              className="p-3 rounded-2xl border" 
              style={{ backgroundColor: "var(--accent-bg)", borderColor: "var(--accent-border)" }}
            >
              {isLogin ? (
                <LogIn className="w-6 h-6" style={{ color: "var(--accent)" }} />
              ) : (
                <UserPlus className="w-6 h-6" style={{ color: "var(--accent)" }} />
              )}
            </div>
            <h1 className="font-black text-xl sm:text-2xl m-0 mt-2" style={{ color: "var(--text-h)" }}>
              {isLogin ? "خوش آمدید" : "ایجاد حساب کاربری"}
            </h1>
            <p className="text-xs font-medium" style={{ color: "var(--text)" }}>
              {isLogin ? "لطفاً وارد حساب کاربری خود شوید" : "برای عضویت اطلاعات زیر را وارد کنید"}
            </p>
          </div>

          {/* فرم اصلی */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* فیلد نام (فقط در حالت ثبت‌نام نمایش داده می‌شود) */}
            {!isLogin && (
              <div className="flex flex-col gap-1.5 text-right">
                <label className="text-xs font-bold" style={{ color: "var(--text-h)" }}>نام و نام خانوادگی</label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="دانشجو"
                    required
                    className="w-full p-3 pr-10 rounded-xl text-sm font-medium border focus:outline-none bg-[var(--bg)] transition-all"
                    style={{ borderColor: "var(--border)", color: "var(--text-h)" }}
                    onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                    onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                  />
                  <div className="absolute inset-y-0 pr-3 right-0 flex items-center pointer-events-none text-slate-400">
                    <span className="text-xs font-bold">@</span>
                  </div>
                </div>
              </div>
            )}

            {/* فیلد ایمیل */}
            <div className="flex flex-col gap-1.5 text-right">
              <label className="text-xs font-bold" style={{ color: "var(--text-h)" }}>پست الکترونیک</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  required
                  className="w-full p-3 pr-10 rounded-xl text-sm font-medium font-mono border focus:outline-none bg-[var(--bg)] transition-all text-left dir-ltr"
                  style={{ borderColor: "var(--border)", color: "var(--text-h)" }}
                  onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                />
                <div className="absolute inset-y-0 pr-3 right-0 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* فیلد رمز عبور */}
            <div className="flex flex-col gap-1.5 text-right">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold" style={{ color: "var(--text-h)" }}>رمز عبور</label>
                {isLogin && (
                  <a href="#" className="text-[11px] font-bold hover:underline" style={{ color: "var(--accent)" }}>
                    رمز عبور را فراموش کرده‌اید؟
                  </a>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full p-3 pr-10 pl-10 rounded-xl text-sm font-medium font-mono border focus:outline-none bg-[var(--bg)] transition-all text-left dir-ltr"
                  style={{ borderColor: "var(--border)", color: "var(--text-h)" }}
                  onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border)"}
                />
                {/* آیکون قفل سمت راست */}
                <div className="absolute inset-y-0 pr-3 right-0 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                {/* دکمه چشم سمت چپ برای نمایش رمز */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 pl-3 left-0 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* دکمه ارسال بنفش رنگ */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 text-white active:scale-[0.99] shadow-lg transition-all cursor-pointer mt-3"
              style={{ backgroundColor: "var(--accent)" }}
              onMouseEnter={(e) => e.currentTarget.style.filter = "brightness(1.1)"}
              onMouseLeave={(e) => e.currentTarget.style.filter = "none"}
            >
              {isLogin ? "ورود به حساب" : "ثبت‌نام در انجمن"}
            </button>
          </form>

          {/* فوتتر کارت برای سوییچ وضعیت */}
          <div className="border-t pt-4 text-center" style={{ borderColor: "var(--border)" }}>
            <p className="text-xs font-semibold" style={{ color: "var(--text)" }}>
              {isLogin ? "هنوز ثبت‌نام نکرده‌اید؟ " : "قبلاً حساب کاربری ساخته‌اید؟ "}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setPassword("");
                }}
                className="font-bold hover:underline cursor-pointer inline-block"
                style={{ color: "var(--accent)" }}
              >
                {isLogin ? "ایجاد حساب جدید" : "ورود به حساب"}
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}