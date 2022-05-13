import React, { useState } from "react";
import { MenuIcon, XIcon, ChartBarIcon } from "@heroicons/react/outline";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false); //AppBar state
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className=" w-screen h-[70px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-4 flex justify-between items-center content-end w-full h-full">
        <div className="flex items-center self-end">
          <ChartBarIcon className="w-14 mr-2 text-blue-700" />
          <h1 className="text-3xl font-bold text-blue-700 mr-4 sm:text-4xl self-end">
            MinhaCarteira
          </h1>
          <ul className="hidden md:flex ml-6 self-end font-medium">
            <li className="ml-4"><Link to="home" smooth={true} duration={500}>HOME</Link></li>
            <li><Link to="about" smooth={true} offset={-100} duration={500}>SOBRE</Link></li>
            <li><Link to="support" smooth={true} offset={-50} duration={500}>SUPORTE</Link></li>
            <li><Link to="solutions" smooth={true} offset={-100} duration={500}>SOLUTIONS</Link></li>
            <li><Link to="pricing" smooth={true} offset={-50} duration={500}>PRICING</Link></li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 self-end">
          <button className="self-end">ENTRAR</button>
          <button>CADASTRAR</button>
        </div>
        {/* Collapsable Menu */}
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-8" /> : <XIcon className="w-8" />}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "md:hidden flex flex-col absolute bg-zinc-200 w-full px-8 justify-items-end"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="home" smooth={true} duration={500}>HOME</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="about" smooth={true} offset={-100} duration={500}>SOBRE</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>SUPORTE</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="solutions" smooth={true} offset={-100} duration={500}>SOLUTIONS</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>PRICING</Link></li>
        <div className="flex flex-col">
          <button>Entrar</button>
          <button>Cadastrar</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
