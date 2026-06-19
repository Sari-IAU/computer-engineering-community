import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const slideVariants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

const ACTIVE_VARIANT = slideVariants;
const ACTIVE_DURATION = 0.25;

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      className="bg-[var(--bg)] text-[var(--text)] flex flex-col min-h-screen font-sans antialiased transition-colors duration-300 overflow-x-hidden"
      dir="rtl"
    >
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={ACTIVE_VARIANT}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: ACTIVE_DURATION,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="flex-1 w-full"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
