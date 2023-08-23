"use client";
import Link from "next/link";
import { Button } from "../ui/button";

export const NavBar = () => {
  return (
    <header className="pt-3">
      <nav className=" d-flex justify-content-between align-items-center">
        <div className="logo">LOGO</div>
        <div className=" ">
          <Link className="navItem" href="/">
            Home
          </Link>
          <Link className="navItem" href="/">
            About
          </Link>
          <Link className="navItem" href="/">
            Portfolio
          </Link>
          <Link className="navItem" href="/">
            Contact
          </Link>
          <Link className="" href="/">
            <Button className="">Hire Me</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
