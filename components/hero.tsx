import Image from "next/image";
import hero from "../public/assets/hero-image.jpg";

function HeroPage() {
  return (
    <div style={{ backgroundImage: `url(${hero})` }} className="heroContainer">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="heroContainerTitle">
          I’m a <span style={{ color: "#FF4900" }}>Graphic Designer</span>
        </h1>
        <p className="heroContainerParagraph">
          A wonderful serenity has taken possession of my entire soul,
          <br /> like these sweet mornings of spring which I enjoy <br /> with
          my whole heart.ree heart.
        </p>

        <button className="primaryBtn">Hire Me</button>
      </div>
    </div>
  );
}

export default HeroPage;
