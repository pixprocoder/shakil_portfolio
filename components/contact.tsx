"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { testimonials } from "@/constants";
import Image from "next/image";
import contact from "../public/assets/contact.jpg";
import { Button } from "./ui/button";

function ContactPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="contact" className="sectionContainer">
      <div className="sectionHeading">
        <h1 className="sectionTitle">
          Contact
          <span style={{ color: "#fff" }}> Me</span>
        </h1>
        <div className="sectionLine"></div>
      </div>
      {/* Contact */}

      <div className="flex mt-[55px] mx-3">
        <div className=" flex-1 hidden lg:block">
          <Image
            data-aos-duration="1000"
            data-aos="fade-up"
            src={contact}
            alt="profile"
          />
        </div>
        <div
          data-aos-duration="1000"
          data-aos="zoom-in"
          className="flex-1 w-full lg:ml-8"
        >
          <form className="flex">
            <input
              className="text-white"
              type="text"
              name=""
              id=""
              placeholder="Name"
            />
            <input
              className="text-white"
              type="text"
              name=""
              id=""
              placeholder="Email"
            />
            <textarea
              className="text-white"
              rows={6}
              cols={20}
              name=""
              id=""
              placeholder="Message"
            />
            <div>
              <Button>Send</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
