import React from "react";

function OverviewCardPage() {
  return (
    <div className="overviewCardContainer ">
      <div className="flex  justify-between">
        <div>
          <h1 className="overviewCardTitle">50+</h1>
          <p className="overviewCardParagraph">Clients</p>
        </div>
        <div>
          <h1 className="overviewCardTitle">30</h1>
          <p className="overviewCardParagraph">Projects</p>
        </div>
        <div>
          <h1 className="overviewCardTitle">48</h1>
          <p className="overviewCardParagraph">Awards</p>
        </div>
        <div>
          <h1 className="overviewCardTitle">06</h1>
          <p className="overviewCardParagraph">Experiences</p>
        </div>
      </div>
    </div>
  );
}

export default OverviewCardPage;
