import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className=" w-full flex justify-between shadow-sm h-20 shadow-[#808000] items-center  bg-[#808000] px-4 text-xl text-amber-50">
      <h2>Next Tasks</h2>
      <ul className=" flex justify-between gap-4  ">
        <Link href="/">
          {" "}
          <li className="hover:border-amber-50 hover:border-b">Tasks</li>
        </Link>
        <Link href="/new">
          {" "}
          <li className="hover:border-amber-50 hover:border-b">New</li>
        </Link>
        <Link href="/about">
          {" "}
          <li className="hover:border-amber-50 hover:border-b">About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
