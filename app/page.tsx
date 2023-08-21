import AboutPage from "@/components/about";
import HeroPage from "@/components/hero";
import OverviewCardPage from "@/components/overviewCard";
import PortfolioPage from "@/components/portfolio";
import { NavBar } from "@/components/shared/navBar";

export default function HomePage() {
  return (
    <div>
      <section className="section">
        <NavBar />
      </section>
      <div>
        <HeroPage />
      </div>
      <section className="section">
        <OverviewCardPage />
        <AboutPage />
        <PortfolioPage />
      </section>
    </div>
  );
}
