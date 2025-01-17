"use client";

import React, { useState } from "react";
import HamburgerIcon from "../../public/images/hamburger_icon";
import HamburgerIconClose from "../../public/images/HamburgerIconClose";
import Link from "next/link";


const MainHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <header className="bg-zinc-800 sticky top-0 shadow-md z-50 md:p-4 font-bold md:bg-white/10 md:border-b-2 md:border-white/30 md:static">
           {/* Hamburger Icon */}
           <div className="flex md:hidden justify-start m-2 items-center" onClick={toggleMenu}>
                        {!isOpen && <button className="text-white w-12 h-12">
                            <HamburgerIcon/>
                        </button>}
                        {isOpen && <button className="text-white w-12 h-12">
                            <HamburgerIconClose/>
                        </button>}
                    </div>
                    {/*Navbar*/}
                    <nav className="container mx-auto justify-around">
                        {/* Define large and small screen size layout for navbar */}
                        <ul
                            className={`flex flex-col gap-10 text-2xl items-center font-sans md:gap-2 md:text-lg md:flex md:flex-row md:justify-around ${isOpen ? "block" : "hidden"}`}
                        >
                            <li><Link className="hover:underline cursor-pointer" href="/" onClick={toggleMenu}>Home</Link></li>
                            <li><Link className="hover:underline cursor-pointer" href="/work-experience" onClick={toggleMenu}>Work
                                Experience</Link></li>
                            <li><Link className="hover:underline cursor-pointer" href="/technical-skills" onClick={toggleMenu}>Technical
                                Skills</Link></li>
                            <li><Link className="hover:underline cursor-pointer" href="/projects" onClick={toggleMenu}>Projects</Link>
                            </li>
                            <li><Link className="hover:underline cursor-pointer" href="/connect" onClick={toggleMenu}>Connect</Link></li>
                        </ul>
                    </nav>
    </header>
    );
}

export default MainHeader;