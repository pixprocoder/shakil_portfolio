"use client";
import Link from "next/link";
import { Button } from "../ui/button";

export const NavBar = () => {
  return (
    <header className="pt-3">
      <nav className=" flex justify-between items-center flex-col lg:flex-row">
        <div className="logo hidden lg:block">LOGO</div>
        <div className="flex gap-6 items-center">
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
            <Button className="hidden lg:block">Hire Me</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
