import { Target, Users2, Send, Landmark, Award, BookOpen, Cpu, Link, GitBranch } from "lucide-react";
import { TEAM_MEMBERS } from "../../mockData/teamData"; 
import userPlaceHolder from "../../assets/images/userPlaceHolder.png"

export default function AboutPage() {
  
  const stats = [
    { id: 1, label: "کارگاه و رویداد برگزار شده", value: "+۴۰", icon: BookOpen },
    { id: 2, label: "پروژه فعال و متن‌باز", value: "+۱۲", icon: Cpu },
    { id: 3, label: "دانشجویان عضو انجمن", value: "+۵۰۰", icon: Users2 },
    { id: 4, label: "رتبه‌های برتر مسابقات", value: "۶+", icon: Award },
  ];

  return (
    <div 
      className="w-full min-h-screen pt-24 pb-16 transition-colors duration-300" 
      dir="rtl"
      style={{ backgroundColor: "var(--bg)" }} // اتصال داینامیک به پس‌زمینه اصلی پروژه
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
        
        {/* ================= هدر و معرفی اولیه ================= */}
        <section className="text-center flex flex-col items-center gap-4">
          <span 
            className="text-xs font-bold px-3 py-1 rounded-full border"
            style={{ backgroundColor: "var(--accent-bg)", color: "var(--accent)", borderColor: "var(--accent-border)" }}
          >
            با ما آشنا شوید
          </span>
          <h1 className="font-black text-2xl md:text-4xl" style={{ color: "var(--text-h)" }}>
            درباره انجمن علمی کامپیوتر
          </h1>
          <p className="text-sm md:text-base max-w-2xl leading-relaxed font-medium" style={{ color: "var(--text)" }}>
            محیطی پویا برای اشتراک‌گذاری دانش، تجربه و ساخت پروژه‌های واقعی. ما به دانشجویان کمک می‌کنیم تا مسیر شغلی و علمی خود را در دنیای مهندسی کامپیوتر پیدا کنند.
          </p>
        </section>

        {/* ================= بخش سابقه و داستان انجمن ================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2" style={{ color: "var(--accent)" }}>
              <Landmark className="w-5 h-5" />
              <h2 className="font-extrabold text-xl mb-0" style={{ color: "var(--text-h)" }}>سابقه و داستان تشکیل</h2>
            </div>
            <p className="text-xs md:text-sm leading-relaxed font-medium text-justify" style={{ color: "var(--text)" }}>
              انجمن علمی مهندسی کامپیوتر از سال‌های گذشته با تلاش دانشجویان علاقه‌مند و هدایت اساتید دپارتمان شکل گرفت. هدف اولیه ما، پر کردن خلاءهای مهارتی و ایجاد بستر مناسب برای کسانی بود که می‌خواستند فراتر از سرفصل‌های مصوب دانشگاهی قدم بردارند. 
            </p>
            <p className="text-xs md:text-sm leading-relaxed font-medium text-justify" style={{ color: "var(--text)" }}>
              امروز پس از برگزاری ده‌ها هکاتون، سمینار تخصصی و کارگاه‌های فشرده، این انجمن به یکی از فعال‌ترین تشکل‌های علمی دانشگاه تبدیل شده است.
            </p>
          </div>

          {/* گرید آمار و ارقام افتخارات */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.id} 
                  className="border rounded-2xl p-6 flex flex-col items-center justify-center gap-2 text-center shadow-lg transition-colors duration-300"
                  style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "var(--accent)" }} />
                  <span className="font-black text-2xl md:text-3xl tracking-tight" style={{ color: "var(--text-h)" }}>{stat.value}</span>
                  <span className="text-[11px] sm:text-xs font-bold" style={{ color: "var(--text)" }}>{stat.label}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= بخش اهداف و ماموریت‌ها ================= */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-2" style={{ color: "var(--accent)" }}>
            <Target className="w-5 h-5" />
            <h2 className="font-extrabold text-xl mb-0" style={{ color: "var(--text-h)" }}>اهداف و مأموریت‌ها</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "توسعه پروژه‌های تیمی", desc: "هدایت دانشجویان به سمت ساخت پروژه‌های دنیای واقعی و ترویج فرهنگ سورس‌باز." },
              { title: "برگزاری مسابقات تخصصی", desc: "ایجاد شور و نشاط علمی میان دانشجویان از طریق برگزاری مینی‌هکاتون‌ها و چالش‌های هفتگی." },
              { title: "آمادگی برای صنعت و بازار", desc: "ارائه آموزش‌های لازم پیرامون مهارت‌های نرم، رزومه‌نویسی، گیت و تکنولوژی‌های به‌روز." }
            ].map((item, index) => (
              <div 
                key={index} 
                className="border p-6 rounded-2xl flex flex-col gap-3 shadow-md transition-colors duration-300"
                style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}
              >
                <h3 className="font-bold text-base" style={{ color: "var(--text-h)" }}>{item.title}</h3>
                <p className="text-xs leading-relaxed font-medium" style={{ color: "var(--text)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= بخش اعضای تیم ================= */}
        <section className="flex flex-col gap-12 pt-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2" style={{ color: "var(--accent)" }}>
              <Users2 className="w-5 h-5" />
              <h2 className="font-extrabold text-xl mb-0" style={{ color: "var(--text-h)" }}>شورای مرکزی و تیم اجرایی</h2>
            </div>
            <span 
              className="text-[11px] font-bold px-3 py-1 rounded-md border"
              style={{ backgroundColor: "var(--card-bg)", color: "var(--accent)", borderColor: "var(--border)" }}
            >
              اعضای فعلی انجمن
            </span>
          </div>

          {/* گرید کارت‌های اعضا */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-16">
            {TEAM_MEMBERS.map((member) => (
              <div 
                key={member.id}
                className="relative border rounded-2xl pt-14 pb-6 px-4 flex flex-col items-center text-center gap-4 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{ 
                  backgroundColor: "var(--card-bg)", 
                  borderColor: "var(--border)" 
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--card-hover)"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--card-bg)"}
              >
                {/* حلقه دور آواتار همرنگ بک‌گراند اصلی صفحه */}
                <div 
                  className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full p-1 shadow-xl transition-colors duration-300"
                  style={{ backgroundColor: "var(--bg)" }}
                >
                  <img 
                    src={member.image||userPlaceHolder} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-full border transition-transform duration-300 group-hover:scale-110" 
                    style={{ borderColor: "var(--border)" }}
                  />
                </div>

                {/* اطلاعات متنی */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-black text-base transition-colors text-[var(--text-h)] group-hover:text-[var(--accent)] dark:group-hover:text-indigo-300">
                    {member.name}
                  </h3>
                  <span className="text-[11px] font-bold" style={{ color: "var(--text)" }}>
                    {member.role}
                  </span>
                </div>

                {/* دکمه‌های شبکه‌های اجتماعی هماهنگ با متغیرها */}
                <div className="flex items-center gap-3 mt-2">
                  {member.socials.telegram && (
                    <a 
                      href={member.socials.telegram} 
                      className="w-7 h-7 rounded-full border flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 shadow-sm transition-all hover:scale-110" 
                      style={{ backgroundColor: "var(--social-bg)", borderColor: "var(--border)" }}
                      title="تلگرام"
                    >
                      <Send className="w-3.5 h-3.5 transform -rotate-45" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a 
                      href={member.socials.github} 
                      className="w-7 h-7 rounded-full border flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white shadow-sm transition-all hover:scale-110" 
                      style={{ backgroundColor: "var(--social-bg)", borderColor: "var(--border)" }}
                      title="گیت‌هاب"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a 
                      href={member.socials.linkedin} 
                      className="w-7 h-7 rounded-full border flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm transition-all hover:scale-110" 
                      style={{ backgroundColor: "var(--social-bg)", borderColor: "var(--border)" }}
                      title="لینکدین"
                    >
                      <Link className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}