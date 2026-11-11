"use client"

import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const NavContainer = () => {
    const [showNav, setShowNav] = useState(false);

    // Open Nav function
    const openNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);
  return (
    <header>
      <Nav openNav = {openNavHandler} />
      <MobileNav showNav = {showNav} closeNav={closeNavHandler} />
    </header>
  );
};

export default NavContainer;
