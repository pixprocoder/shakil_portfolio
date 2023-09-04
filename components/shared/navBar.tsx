"use client";
import Link from "next/link";
import { Button } from "../ui/button";

export const NavBar = () => {
  return (
    <header className="pt-3">
      <nav className=" flex justify-between items-center flex-col lg:flex-row">
        <div className="logo hidden lg:block">
          <Link href="/">Shakil</Link>
        </div>
        <div className="flex gap-6 items-center">
          <Link className="navItem" href="/">
            Home
          </Link>
          <Link className="navItem" href="#about">
            About
          </Link>
          <Link className="navItem" href="#portfolio">
            Portfolio
          </Link>
          <Link className="navItem" href="#contact">
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
