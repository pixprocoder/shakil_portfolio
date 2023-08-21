import HeroPage from "@/components/hero";
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
    </div>
  );
}
