export interface Post {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    gradient: string;
  }
  
  export const POSTS: Post[] = [
    {
      id: 1,
      title: "مقدمه‌ای جامع بر معماری Transformer",
      excerpt:
        "از مکانیزم Attention گرفته تا مدل‌های مدرنی مثل GPT و BERT — همه چیز رو اینجا توضیح دادیم تا با دید بازتری وارد دنیای NLP بشی.",
      author: "علی رضایی",
      date: "۳ خرداد ۱۴۰۴",
      readTime: "۱۲ دقیقه",
      category: "آموزشی",
      gradient: "from-blue-900 via-indigo-800 to-violet-900 dark:from-indigo-950/40 dark:via-slate-900/60 dark:to-purple-950/40",
    },
    {
      id: 2,
      title: "گزارش هکاتون زمستان ۱۴۰۳",
      excerpt:
        "تیم‌های برتر، پروژه‌های خلاقانه و خاطرات ۴۸ ساعت کدنویسی بی‌وقفه در کنار هم.",
      author: "محمد احمدی",
      date: "۱۵ اردیبهشت ۱۴۰۴",
      readTime: "۵ دقیقه",
      category: "گزارش رویداد",
      gradient: "from-emerald-900 via-teal-800 to-cyan-900 dark:from-slate-900/60 dark:via-indigo-950/40 dark:to-slate-900/60",
    },
    {
      id: 3,
      title: "بهترین منابع یادگیری DSA در ۱۴۰۴",
      excerpt:
        "لیست کامل منابع رایگان و پولی برای یادگیری ساختمان داده و الگوریتم به همراه نقشه راه کامل.",
      author: "سارا کریمی",
      date: "۲۸ اردیبهشت ۱۴۰۴",
      readTime: "۸ دقیقه",
      category: "آموزشی",
      gradient: "from-violet-900 via-purple-800 to-fuchsia-900 dark:from-purple-950/40 dark:via-slate-900/60 dark:to-indigo-950/40",
    },
  ];