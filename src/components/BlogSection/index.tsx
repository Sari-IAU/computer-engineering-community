import { ArrowLeft, Clock, User } from "lucide-react";
import { POSTS } from "../../mockData/blogData";
import PostCard from "./blogCard";



export default function BlogSection() {
  const [post1, post2, post3] = POSTS;

  return (
    <section
      dir="rtl"
      className="w-full transition-colors duration-300"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
           
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold"
              style={{ color: "var(--text-h)", letterSpacing: "-0.5px" }}
            >
              آخرین{" "}
              <span style={{ color: "var(--accent)" }}>مطالب علمی</span>
            </h2>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-200 flex-shrink-0"
            style={{ color: "var(--accent)" }}
          >
            همه مطالب
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <PostCard post={post1} className="lg:row-span-2 min-h-[420px]" />
          <PostCard post={post2} className="min-h-[200px]" />
          <PostCard post={post3} className="min-h-[200px]" />
        </div>

      </div>
    </section>
  );
}

