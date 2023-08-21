import { testimonials } from "@/constants";
import Image from "next/image";
import start from "../public/assets/star.svg";
import person from "../public/assets/person.jpg";

function TestimonialsPage() {
  return (
    <div className="sectionContainer">
      <div className="sectionHeading">
        <h1 className="sectionTitle">
          Peoples
          <span style={{ color: "#fff" }}> Opinion</span>
        </h1>
        <div className="sectionLine"></div>
      </div>
      {/* Testimonials card */}
      <div className="testimonialsCardContainer">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonialCard">
            <div>
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
