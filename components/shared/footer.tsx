import linkedIn from "../../public/assets/Linkedin.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Instagram from "../../public/assets/Instagram.svg";
import Twitter from "../../public/assets/Twitter.svg";
import Behance from "../../public/assets/Behance.svg";
import Image from "next/image";

function FooterPage() {
  return (
    <footer className="sectionContainer">
      <div className="footerContainer flex-col gap-4">
        <div className="logo">LOGO</div>
        <p>copyright ©️ 2023 || Shakil Ahmend </p>
        <div className="footerSocialIconContainer">
          <Image width={25} height={25} src={linkedIn} alt="linkedIn" />
          <Image width={25} height={25} src={Facebook} alt="Facebook" />
          <Image width={25} height={25} src={Twitter} alt="Twitter" />
          <Image width={25} height={25} src={Behance} alt="Behance" />
          <Image width={25} height={25} src={Instagram} alt="Instagram" />
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
