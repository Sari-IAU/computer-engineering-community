import { ArrowLeft, Clock, User } from "lucide-react";
import type { Post } from "../../mockData/blogData";

function PostCard({ post, className }: { post: Post; className?: string }) {
    return (
      <a
        href={`#post-${post.id}`}
        className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br ${post.gradient} ${className} transition-all duration-300`}
        style={{ border: "1px solid var(--border)" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:via-black/45 transition-all duration-300" />
  
        {/* محتوا */}
        <div className="relative z-10 p-6 flex flex-col gap-3">
          
          {/* اصلاح رنگ Badge متناسب با لایت‌مود و دارک‌مود */}
          <span
            className="w-fit text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm
                       bg-indigo-50/90 text-indigo-900 border border-indigo-200/50 
                       dark:bg-white/5 dark:text-indigo-200 dark:border-white/10"
          >
            {post.category}
          </span>
  
          {/* عنوان */}
          <h3 className="text-white font-extrabold text-base md:text-lg leading-snug group-hover:text-blue-300 transition-colors duration-200">
            {post.title}
          </h3>
  
          {/* توضیح */}
          <p className="text-white/65 text-sm leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
  
          {/* متا */}
          <div
            className="flex items-center justify-between pt-2 mt-1"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="flex items-center gap-3 text-white/50 text-xs">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" style={{ color: "var(--accent)" }} />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" style={{ color: "var(--accent)" }} />
                {post.readTime}
              </span>
            </div>
            <span
              className="text-xs font-bold flex items-center gap-1 group-hover:text-white transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              ادامه مطلب
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-200" />
            </span>
          </div>
        </div>
      </a>
    );
  }
  export default PostCard