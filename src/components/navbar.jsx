import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b border-zinc-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            faya
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
