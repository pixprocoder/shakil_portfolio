import Image from "next/image";
import person from "../public/assets/person.jpg";

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
      <div className="aboutMeContainer">
        <div className="aboutMeLeft">
          <Image src={person} alt="profile" />
        </div>
        <div className="aboutMeRight">
          <h1 className="aboutMeTitle">
            Here are my Story <br />
            Behind Journey <span style={{ color: "#FF4900" }}>! </span>
          </h1>
          <p className="aboutMeParagraph">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.re
            soul, like these sweet mornings of spring which I enjoy with my
            whole heart. A wonderful serenity has taken possession of my entire
            soul, like these sweet mornings of spring which I enjoy with my
            whole heart.re soul, like these sweet mornings of spring which I
            enjoy with my whole heart.
          </p>
          <div>
            <button className="primaryBtn">Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
