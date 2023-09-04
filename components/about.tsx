"use client";
import Image from "next/image";
import person from "../public/assets/person.jpg";
import { Button } from "./ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="sectionContainer">
      <div className="sectionHeading">
        <h1 className="sectionTitle">
          About
          <span style={{ color: "#fff" }}> Me</span>
        </h1>
        <div className="sectionLine"></div>
      </div>
      <div className=" aboutMeContainer flex-col lg:flex-row mx-3 ">
        <div
          data-aos-duration="1000"
          data-aos="fade-right"
          className="aboutMeLeft lg:w-[496px]"
        >
          <Image src={person} alt="profile" />
        </div>
        <div
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos="fade-left"
          className="aboutMeRight m-0 lg:ml-36"
        >
          <h1 className="aboutMeTitle lg:text-left mt-4 text-center text-3xl lg:text-[46.128px]">
            Here are my Story <br />
            Behind Journey <span style={{ color: "#FF4900" }}>! </span>
          </h1>
          <p className="aboutMeParagraph text-center lg:text-left">
            Hello, My name is Mohammed Shakil. I'm a professional graphic
            designer. Expert in Adobe Photoshop and Illustrator. I work in
            different marketplaces and I offer my services. The services I
            provide to clients are -Logo, Business card, Flyer, Poster, Leaflet,
            Brochure Bifold and Trifold, Stationary Design, Post card, ID card,
            Social Media Banner, Web Banner, Catalog, Company profile, Roll Up
            Banner or Signage Banner Design etc. I am ready to give you any type
            of design. Message me and help me with your design material.
          </p>
          <div className="text-center">
            <Button>Hire Me</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
