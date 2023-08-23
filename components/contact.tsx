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

      <div className="flex mt-[55px] mx-3">
        <div className=" flex-1 hidden lg:block">
          <Image src={contact} alt="profile" />
        </div>
        <div className="flex-1 w-full lg:ml-8">
          <form className="flex">
            <input type="text" name="" id="" placeholder="Name" />
            <input type="text" name="" id="" placeholder="Email" />
            <textarea rows={6} cols={20} name="" id="" placeholder="Message" />
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
