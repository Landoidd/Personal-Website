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
                <header className="p-4 font-bold bg-white/10 border-b-2 border-white/30">
                    {/*Navbar*/}
                    <nav className="container mx-auto justify-around">
                        {/* Define large and small screen size layout for navbar */}
                        <ul
                            className={`flex flex-col gap-2 items-center font-sans text-lg md:flex md:flex-row md:justify-around ${isOpen ? "block" : "hidden"}`}
                        >
                            <li><Link className="hover:underline cursor-pointer" href="/">Home</Link></li>
                            <li><Link className="hover:underline cursor-pointer" href="/work-experience">Work
                                Experience</Link></li>
                            <li><Link className="hover:underline cursor-pointer" href="/technical-skills">Technical
                                Skills</Link></li>
                            <li><Link className="hover:underline cursor-pointer" href="/projects">Projects</Link>
                            </li>
                            <li><Link className="hover:underline cursor-pointer" href="/connect">Connect</Link></li>
                        </ul>
                    </nav>
                    {/* Hamburger Icon */}
                    <div className="flex md:hidden justify-center m-2 items-center" onClick={toggleMenu}>
                        {!isOpen && <button className="text-white w-12 h-12">
                            <HamburgerIcon/>
                        </button>}
                        {isOpen && <button className="text-white w-12 h-12">
                            <HamburgerIconClose/>
                        </button>}
                    </div>
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
