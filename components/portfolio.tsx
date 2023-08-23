import { portfolio } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

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
      </div>
      {/* Portfolio card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((item) => (
          <div key={item.id} className="portfolioCard">
            <Image width={393} height={431} src={item.img} alt="img" />
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "55px" }}>
        <Button>View All</Button>
      </div>
    </div>
  );
}

export default PortfolioPage;
