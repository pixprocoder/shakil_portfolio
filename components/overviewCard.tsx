"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OverviewCardPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-center"
      className="overviewCardContainer  lg:h-[149px] bg-red-300"
    >
      <div className="flex  justify-between flex-col lg:flex-row gap-6 items-center ">
        <div>
          <h1 className="overviewCardTitle">50+</h1>
          <p className="overviewCardParagraph">Clients</p>
        </div>
        <div className=" ">
          <h1 className="overviewCardTitle">30</h1>
          <p className="overviewCardParagraph">Projects</p>
        </div>
        <div>
          <h1 className="overviewCardTitle">48</h1>
          <p className="overviewCardParagraph">Awards</p>
        </div>
        <div>
          <h1 className="overviewCardTitle ">06</h1>
          <p className="overviewCardParagraph">Experiences</p>
        </div>
      </div>
    </div>
  );
}

export default OverviewCardPage;
