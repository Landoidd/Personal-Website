"use client";
import Image from "next/image"
import React, {useState} from "react";
import LocationPin from "../../public/images/locationPin";

interface WorkExperienceCardProps {
    companyName: string,
    location: string,
    logoSrc: string,
    altText: string,
    title: string,
    dates: string,
    children?: React.ReactNode,
}

/*
Define WorkExperienceCard
 */
const WorkExperienceCard: React.FC<WorkExperienceCardProps> = (
    {companyName, location, logoSrc, altText, title, dates, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleExpand = () => {
        setIsOpen((prev) => !prev);
    };


    return (
        <div className="w-1/2 m-4 p-4 bg-white rounded-lg border-2 border-zinc-500">
            {/* Card Header*/}
            <div className="flex justify-between">
                <div className="flex flex-wrap flex-col">
                    <p className="text-lg text-gray-600 font-extrabold">{companyName}</p>
                    <div className="flex">
                        <LocationPin className="w-4 h-4 text-gray-500"/>
                        <p className="text-xs text-gray-500 italic">{location}</p>
                    </div>
                </div>
                <Image
                    src={logoSrc}
                    alt={altText}
                    width={40}
                    height={40}
                    className="rounded-lg"
                />
            </div>
            {/*Card Body*/}
            <div className="mt-8 flex flex-wrap flex-col">
                {/* Job Details */}
                <p className="text-md text-gray-500 font-semibold">{title}</p>
                <p className="text-sm text-gray-500">{dates}</p>
            </div>
            {/* Expand Rows */}
            <div className="mt-4">
                {isOpen && (<div className="text-sm text-gray-500 animate-fadeInUp">{children}</div>)}
            </div>
            <button onClick={toggleExpand} className="text-blue-500 text sm mt-2 focus:outline-none hover:underline">
                {isOpen ? "See Less" : "See More"}
            </button>
        </div>
    );
};
export default WorkExperienceCard;