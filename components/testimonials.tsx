"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { testimonials } from "@/constants";
import Image from "next/image";
import start from "../public/assets/star.svg";
import person from "../public/assets/person.jpg";

function TestimonialsPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="sectionContainer">
      <div className="sectionHeading">
        <h1 className="sectionTitle">
          Testimonials
          <span style={{ color: "#fff" }}></span>
        </h1>
        <div className="sectionLine"></div>
      </div>
      {/* Testimonials card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 mx-3">
        {testimonials.map((item) => (
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-duration="1000"
            key={item.id}
            className="testimonialCard"
          >
            <div className="flex gap-1">
              <Image width={16} height={16} src={start} alt="img" />
              <Image width={16} height={16} src={start} alt="img" />
              <Image width={16} height={16} src={start} alt="img" />
              <Image width={16} height={16} src={start} alt="img" />
              <Image width={16} height={16} src={start} alt="img" />
            </div>
            <p className="testimonialDescription">{item.desc}</p>
            <div className="cardAvatarContainer">
              <div className="imgDiv">
                <Image src={person} alt="img" />
              </div>
              <div>
                <h3>{item.name}</h3>
                <p>{item.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsPage;
