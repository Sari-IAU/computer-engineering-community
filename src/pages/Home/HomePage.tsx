import AboutSection from "../../components/AbouUsSection";
import BlogSection from "../../components/BlogSection";
import HeroSection from "../../components/HeroSection";
import HeroSearchBox from "../../components/HeroSection/HeroSearchBox";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import FaqSection from "../../components/QASection";
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
      <BlogSection/>
      <ProjectsSection/>
      <AboutSection/>
      <FaqSection/>
    </>
  );
}