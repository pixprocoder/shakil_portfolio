import { portfolio } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PortfolioPage() {
  return (
    <div className="sectionContainer">
      <div className="sectionHeading">
        <h1 className="sectionTitle">
          My
          <span style={{ color: "#fff" }}> Portfolio</span>
        </h1>
        <div className="sectionLine"></div>
      </div>
      <div className="portfolioLink">
        <Link className="navItem" href="/">
          All
        </Link>
        <Link className="navItem" href="/">
          Logo
        </Link>
        <Link className="navItem" href="/">
          Flyer
        </Link>
        <Link className="navItem" href="/">
          Business Card
        </Link>
        <Link className="navItem" href="/">
          Others
        </Link>
        {/* <Link className="" href="/">
          <button className="primaryBtn">Hire Me</button>
        </Link> */}
      </div>
      <div className="portfolioCardContainer">
        {portfolio.map((item) => (
          <div key={item.id} className="portfolioCard">
            <Image width={393} height={431} src={item.img} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;