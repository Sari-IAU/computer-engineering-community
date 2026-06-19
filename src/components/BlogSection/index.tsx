import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { POSTS } from "../../mockData/blogData";
import PostCard from "./blogCard";

export default function BlogSection() {
  const [post1, post2, post3] = POSTS;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  } as const;

  const smallCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <section
      dir="rtl"
      className="w-full transition-colors duration-300"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold"
              style={{ color: "var(--text-h)", letterSpacing: "-0.5px" }}
            >
              آخرین <span style={{ color: "var(--accent)" }}>مطالب علمی</span>
            </h2>
          </div>
          <motion.a
            whileHover={{ x: -4 }}
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 flex-shrink-0"
            style={{ color: "var(--accent)" }}
          >
            همه مطالب
            <ArrowLeft className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="lg:row-span-2 flex" 
          >
            <PostCard post={post1} className="w-full min-h-[420px]" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-4"
          >
            <motion.div 
              variants={smallCardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <PostCard post={post2} className="min-h-[200px]" />
            </motion.div>

            <motion.div 
              variants={smallCardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <PostCard post={post3} className="min-h-[200px]" />
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}