import Hero from "@/components/sections/hero";
import ServicesOverview from "@/components/sections/services-overview";
import Portfolio from "@/components/sections/portfolio";
import Stats from "@/components/sections/stats";
import AboutSection from "@/components/sections/about-section";

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <ServicesOverview />
      <Portfolio />
      <Stats />
      <AboutSection />
    </div>
  );
};

export default Home;
