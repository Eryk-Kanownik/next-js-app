"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black px-20 py-8  text-white flex justify-between sticky top-0 left-0 right-0 z-10">
      <div className="font-bold text-lg text-cyan-400">KSH GANG</div>
      <ul className="flex gap-8">
        <li className="hover:text-cyan-400 font-semibold cursor-pointer duration-100">
          Płyty
        </li>
        <li className="hover:text-cyan-400 font-semibold cursor-pointer duration-100">
          Gadżety
        </li>
        <li className="hover:text-cyan-400 font-semibold cursor-pointer duration-100">
          Kontakt
        </li>
        <li className="hover:text-cyan-400 font-semibold cursor-pointer duration-100">
          Koszyk
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
