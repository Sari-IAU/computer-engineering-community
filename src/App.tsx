import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HeroSearchBox from "./components/HeroSection/HeroSearchBox";
import StatsSection from "./components/StatsSection";
import EventsSection from "./components/event/EventsSection";

function App() {
  return (
    <ThemeProvider>
      <div
        className=" bg-slate-50 flex flex-col gap-5 min-h-screen   dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-blue-500/30"
        dir="rtl"
      >
        <Navbar />
        <main className="relative ">
          <HeroSection />
          <div className="absolute -bottom-10 w-full">
            <HeroSearchBox />
          </div>
        </main>
        <StatsSection />
        <EventsSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
