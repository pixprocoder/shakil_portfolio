import Image from "next/image";
import contact from "../public/assets/contact.jpg";
import { Button } from "./ui/button";

function ContactPage() {
  return (
    <div className="sectionContainer">
      <div className="sectionHeading">
        <h1 className="sectionTitle">
          Contact
          <span style={{ color: "#fff" }}> Me</span>
        </h1>
        <div className="sectionLine"></div>
      </div>
      {/* Contact */}
      <div className="contactContainer">
        <div className="aboutMeContainer">
          <div className="aboutMeLeft">
            <Image src={contact} alt="profile" />
          </div>
          <div className="aboutMeRight">
            <form className="d-flex">
              <input type="text" name="" id="" placeholder="Name" />
              <input type="text" name="" id="" placeholder="Email" />
              <textarea
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
    </div>
  );
}

export default ContactPage;
