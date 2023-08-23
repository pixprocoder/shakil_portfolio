import Image from "next/image";
import person from "../public/assets/person.jpg";
import { Button } from "./ui/button";

function AboutPage() {
  return (
    <div className="sectionContainer">
      <div className="sectionHeading">
        <h1 className="sectionTitle">
          About
          <span style={{ color: "#fff" }}> Me</span>
        </h1>
        <div className="sectionLine"></div>
      </div>
      <div className="aboutMeContainer flex-col lg:flex-row">
        <div className="aboutMeLeft">
          <Image src={person} alt="profile" />
        </div>
        <div className="aboutMeRight m-0 lg:ml-36">
          <h1 className="aboutMeTitle">
            Here are my Story <br />
            Behind Journey <span style={{ color: "#FF4900" }}>! </span>
          </h1>
          <p className="aboutMeParagraph">
            Hello, My name is Mohammed Shakil. I'm a professional graphic
            designer. Expert in Adobe Photoshop and Illustrator. I work in
            different marketplaces and I offer my services. The services I
            provide to clients are -Logo, Business card, Flyer, Poster, Leaflet,
            Brochure Bifold and Trifold, Stationary Design, Post card, ID card,
            Social Media Banner, Web Banner, Catalog, Company profile, Roll Up
            Banner or Signage Banner Design etc. I am ready to give you any type
            of design. Message me and help me with your design material.
          </p>
          <div>
            <Button>Hire Me</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
