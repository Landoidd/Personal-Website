"use client"
import React, {useState} from "react";
import "./globals.css";
import Link from "next/link";
import HamburgerIcon from "../../public/images/hamburger_icon";
import HamburgerIconClose from "../../public/images/HamburgerIconClose";
import { Analytics } from "@vercel/analytics/react"
/*
Create default Layout of Personal Website
 */
export default function Layout({children}: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const date = new Date();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <html lang="en" className="scroll-smooth font-sans">
        <body className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-800 to-zinc-900 text-white">
        <Analytics/>
        <div className="flex flex-grow w-full">
            {/* Left Sidebar */}
            <div className="hidden md:block w-1/5"></div>

            {/* Main Content */}
            <div className="w-full md:w-3/5 main-content flex flex-col">
                {/*Header*/}
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
                {/*End of Header*/}

                {/* Main */}
                <main className="flex-grow m-4 animate-fadeInUp opacity-100">{children}</main>
                {/* End of Main */}
            </div>

            {/* Right Sidebar */}
            <div className="hidden md:block w-1/5"></div>
        </div>

        {/* Footer */}
        <footer className="text-center text-xs">
            © {date.getFullYear()} Landon Zigler. All rights reserved.
        </footer>
        </body>
        </html>
    );
}
