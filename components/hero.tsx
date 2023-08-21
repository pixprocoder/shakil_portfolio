import Image from "next/image";
import hero from "../public/assets/hero-image.jpg";

function HeroPage() {
  return (
    <div
      style={{ backgroundImage: `url(${hero})` }}
      className="heroContainer"
    ></div>
  );
}

export default HeroPage;
