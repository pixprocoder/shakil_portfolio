import AboutPage from "@/components/about";
import ContactPage from "@/components/contact";
import HeroPage from "@/components/hero";
import OverviewCardPage from "@/components/overviewCard";
import PortfolioPage from "@/components/portfolio";
import FooterPage from "@/components/shared/footer";
import { NavBar } from "@/components/shared/navBar";
import TestimonialsPage from "@/components/testimonials";

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
        <TestimonialsPage />
        <ContactPage />
        <FooterPage />
      </section>
    </div>
  );
}
