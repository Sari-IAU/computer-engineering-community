import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div
      className="bg-[var(--bg)] text-[var(--text)] flex flex-col gap-5 min-h-screen font-sans antialiased selection:bg-indigo-500/30 dark:selection:bg-blue-500/30 transition-colors duration-300"
      dir="rtl"
    >
      <Navbar />
      <Outlet />
    </div>
  );
}