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
        className="bg-[var(--bg)] text-[var(--text)] flex flex-col gap-5 min-h-screen font-sans antialiased selection:bg-indigo-500/30 dark:selection:bg-blue-500/30 transition-colors duration-300"
        dir="rtl"
      >
        <Navbar />
        
        <main className="relative">
          <HeroSection />
          <div className="absolute -bottom-10 w-full px-4">
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