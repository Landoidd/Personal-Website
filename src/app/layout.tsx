import React from "react";
import "./globals.css";
import Link from "next/link";

/*
Create default Layout of Personal Website
 */
export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className="flex flex-col min-h-screen">
        <div className="flex flex-grow">
        {/* Left Sidebar */}
        <div className="w-1/5 sidebar"></div>
        {/* Main Content */}
        <div className="w-3/5 main-content flex flex-col">
            {/*Header*/}
            <header className="p-4 font-bold opacity-90">
                {/*Navbar*/}
                <nav className="container mx-auto justify-around">
                    <ul className="flex flex-wrap justify-around font-sans">
                        <li><Link className="hover:underline cursor-pointer" href="/">Home</Link></li>
                        <li><Link className="hover:underline cursor-pointer" href="/work-experience">Work Experience</Link></li>
                        <li><Link className="hover:underline cursor-pointer" href="/technical-skills">Technical Skills</Link></li>
                        <li><Link className="hover:underline cursor-pointer" href="/projects">Projects</Link>
                        </li>
                        <li><Link className="hover:underline cursor-pointer" href="/connect">Connect</Link></li>
                    </ul>
                </nav>
            </header>
            {/*End of Header*/}

            {/* Main */}
            <main className="flex-grow m-4 animate-fadeInUp opacity-100">{children}</main>
            {/* End of Main */}
        </div>
        </div>
        {/* Right Sidebar */}
        <div className="w-1/5 sidebar"></div>
        {/* Footer */}
        <footer className="text-center text-xs">
            © 2024 Landon Zigler. All rights reserved.
        </footer>
        </body>
        </html>
    );
}