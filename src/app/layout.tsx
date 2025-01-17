import "./globals.css";
import MainHeader from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
/*
Create default Layout of Personal Website
 */
export default function Layout({children}: { children: React.ReactNode }) {
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
                <MainHeader/>
                {/*End of Header*/}

                {/* Main */}
                <main className="flex-grow m-4 animate-fadeInUp opacity-100">{children}</main>
                {/* End of Main */}
            </div>

            {/* Right Sidebar */}
            <div className="hidden md:block w-1/5"></div>
        </div>

        {/* Footer */}
       <Footer/>
        </body>
        </html>
    );
}
