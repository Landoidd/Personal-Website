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
        <div className="w-1/5 bg-gray-400"></div>
        {/* Main Content */}
        <div className="w-3/5 bg-gray-500">
            {/*Header*/}
            <header className="p-4 text-white">
                {/*Navbar*/}
                <nav className="container mx-auto justify-between">
                    <ul className="flex justify-around font-sans">
                        <li>Home</li>
                        <li>Work Experience</li>
                        <li>Technical Skills</li>
                        <li>Projects</li>
                        <li>Connect</li>
                    </ul>
                </nav>
            </header>
            {/*End of Header*/}
            {/* Main */}
            <main>{children}</main>
            {/* End of Main */}
        </div>
        {/* Right Sidebar */}
        <div className="w-1/5 bg-gray-400"></div>
        </body>
        </html>
    );
}