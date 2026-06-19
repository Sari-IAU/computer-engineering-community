import HeroSection from "../../components/HeroSection";
import HeroSearchBox from "../../components/HeroSection/HeroSearchBox";
import StatsSection from "../../components/StatsSection";
import EventsSection from "../../components/event/EventsSection";

export default function HomePage() {
  return (
    <>
      <main className="relative">
        <HeroSection />
        <div className="absolute -bottom-10 w-full px-4">
          <HeroSearchBox />
        </div>
      </main>
      <StatsSection />
      <EventsSection />
    </>
  );
}