"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <header className="pt-3">
      <nav className=" flex justify-between items-center relative lg:flex-row">
        <div className="logo flex ">
          <Link href="/">Shakil</Link>
        </div>
        <div className="block lg:hidden">
          <Button onClick={() => setIsOpen(!isOpen)}>Menu</Button>
        </div>
        <div
          className={`${
            isOpen
              ? "flex flex-col absolute top-10 w-full transition-all duration-300 ease-in-out z-10 bg-black"
              : "hidden"
          }  lg:flex gap-6 items-center`}
        >
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
