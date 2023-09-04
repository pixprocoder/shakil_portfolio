import Image from "next/image";
import hero from "../public/assets/hero-image.jpg";
import { Button } from "./ui/button";

function HeroPage() {
  return (
    <div
      style={{ backgroundImage: `url(${hero})` }}
      className="heroContainer h-[600px] lg:h-[800px]"
    >
      <div className="flex justify-center items-center flex-col">
        <h1 className="heroContainerTitle text-5xl lg:text-[78px] text-center">
          I’m a <span style={{ color: "#FF4900" }}>Graphic Designer</span>
        </h1>
        <p className="heroContainerParagraph text-[12px] lg:text-lg">
          Transforming Ideas into Art. <br /> Captivating Designs for Every
          Vision. <br /> Your Imagination, Brought to Life.
        </p>

        <Button>Hire Me</Button>
      </div>
    </div>
  );
}

export default HeroPage;
