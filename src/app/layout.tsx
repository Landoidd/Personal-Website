import React from "react";
import "./globals.css";

/*
Create default Layout of Personal Website
 */
export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="flex min-h-screen">
        {/* Left Sidebar */}
        <div className="w-1/5 sidebar"></div>
        {/* Main Content */}
        <div className="w-3/5 main-content">
            {/*Header*/}
            <header className="p-4 font-bold opacity-90">
                {/*Navbar*/}
                <nav className="container mx-auto justify-around">
                    <ul className="flex flex-wrap justify-around font-sans">
                        <li><a href="/" className="cursor-pointer hover:underline">Home</a></li>
                        <li><a href="/work-experience" className="cursor-pointer hover:underline">Work Experience</a>
                        </li>
                        <li><a href="/technical-skills" className="cursor-pointer hover:underline">Technical Skills</a>
                        </li>
                        <li><a href="/projects" className="cursor-pointer hover:underline">Projects</a></li>
                        <li><a href="/connect" className="cursor-pointer hover:underline">Connect</a></li>
                    </ul>
                </nav>
            </header>
            {/*End of Header*/}

            {/* Main */}
            <main className="m-4 animate-fadeInUp opacity-10">{children}</main>
            {/* End of Main */}

        </div>
        {/* Right Sidebar */}
        <div className="w-1/5 sidebar"></div>
        </body>
        </html>
    );
}