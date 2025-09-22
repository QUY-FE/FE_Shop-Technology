"use client";
import Link from "next/link";

import Sales from "#/components/Sales";
import Navbar from "./Header/Navbar";
import Action from "./Header/Action";
import NavbarMobile from "./Header/NavbarMobile";

const navbarList = [
    {
        id:1,
        name:"Home",
        href:"/"
    },
    {
        id:2,
        name:"About",
        href:"/about"
    },
    {
        id:3,
        name:"Contact",
        href:"/contact"
    },
    {
        id:4,
        name:"Sign in",
        href:"/sign-in"
    },
]
export default function Header() {

  return (
    <header>
      <Sales
        hasSales
        totalSales={47}
        titleSales="Giảm giá cực sốc trong mùa hè này với đồ bơi "
      />
      <div className="border-b border-[#b3b3b3]">
        <div className="max-w-[1200px] h-[80px] mx-auto  flex items-center ">
          {/* Navbar mobile */}
          <NavbarMobile list={navbarList} />
          {/* Logo */}
          <Link
            href="/"
            className="w-6/12 lg:w-2/12 h-full leading-20 text-2xl text-center lg:text-left lg:text-2xl font-semibold"
          >
            Quynguyen
          </Link>
          {/* navbar */}
          <Navbar list={navbarList} />
          {/* action */}
          <Action currentUser />
        </div>
      </div>
    </header>
  );
}
