import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className=" w-full flex justify-between shadow-lg h-20 items-center  ">
      <h2>Next Tasks</h2>
      <ul className=" flex justify-between gap-4">
        <Link href="/">
          {" "}
          <li>Tasks</li>
        </Link>
        <Link href="/new">
          {" "}
          <li>New</li>
        </Link>
        <Link href="/about">
          {" "}
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
