import React from "react";

function OverviewCardPage() {
  return (
    <div className="overviewCardContainer  lg:h-[149px] bg-red-300">
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
