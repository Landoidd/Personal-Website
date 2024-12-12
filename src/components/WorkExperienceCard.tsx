import Image from "next/image"
import React from "react";
import LocationPin from "../../public/images/locationPin";

interface WorkExperienceCardProps {
    companyName: string,
    location: string,
    logoSrc: string,
    altText: string,
    title: string,
    dates: string,
}

/*
Define WorkExperienceCard
 */
const WorkExperienceCard: React.FC<WorkExperienceCardProps> = (
    {companyName, location, logoSrc, altText, title, dates}) => {
    return (
        <div className="w-1/2 m-4 p-4 bg-white rounded-lg">
            {/* Card Header*/}
            <div className="flex justify-between">
                <div className="flex flex-wrap flex-col">
                    <p className="text-lg text-gray-500">{companyName}</p>
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
                <p className="text-md font-medium text-gray-600">{title}</p>
                <p className="text-sm text-gray-500">{dates}</p>
            </div>
        </div>
    );
};
export default WorkExperienceCard;