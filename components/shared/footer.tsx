import linkedIn from "../../public/assets/Linkedin.svg";

import Instagram from "../../public/assets/Instagram.svg";
import Twitter from "../../public/assets/Twitter.svg";
import Behance from "../../public/assets/Behance.svg";
import Image from "next/image";
import Link from "next/link";

function FooterPage() {
  return (
    <footer className="sectionContainer">
      <div className="footerContainer flex-col lg:flex-row gap-4">
        <div className="logo">LOGO</div>
        <p>copyright ©️ 2023 || Shakil Ahmend </p>
        <div className="footerSocialIconContainer">
          <Link href="/">
            <Image width={25} height={25} src={linkedIn} alt="linkedIn" />
          </Link>
          <Link href="/">
            <Image width={25} height={25} src={Twitter} alt="Twitter" />
          </Link>
          <Link href="/">
            <Image width={25} height={25} src={Behance} alt="Behance" />
          </Link>
          <Link href="/">
            <Image width={25} height={25} src={Instagram} alt="Instagram" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
