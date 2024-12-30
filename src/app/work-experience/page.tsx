import WorkExperienceCard from "@/components/WorkExperienceCard";
import Header from "@/components/Header";
import {PROPERTIES} from "@/app/utils/utils";

const WorkExperience = () => {
    return (
        /*Create a structure to store each work experience on a separate card */
        <div>
            {/* Work Experience Header */}
                <Header name="Work Experience"></Header>
            {/*Card Container*/}
                <div className="flex flex-col items-center justify-center rounded-lg  md:flex-row md:items-start">
                    <WorkExperienceCard
                        companyName="Apparel Magic"
                        location="West Palm Beach, Florida"
                        logoSrc="/images/apparel_magic_logo.jpeg"
                        altText="Apparel Magic logo."
                        title="Software Engineer Intern"
                        dates="05/2023 - 08/2023"
                    >
                        {/*Roles*/}
                        <div className="flex flex-col flex-wrap m-2">
                            <ul className="text-sm text-gray-500 list-disc p-2">
                                <li>{PROPERTIES.ApparelDesc}</li>
                                <li>{PROPERTIES.Apparel2Desc}</li>
                                <li>{PROPERTIES.Apparel3Desc}</li>
                            </ul>
                        </div>
                    </WorkExperienceCard>
                    <WorkExperienceCard
                        companyName="Precision Sports Technology"
                        location="Galway, Ireland"
                        logoSrc="/images/precision_sports_tech_logo.jpg"
                        altText="Apparel Magic logo."
                        title="Software Engineer Intern"
                        dates="06/2024 - 08/2024"
                    >
                        {/*Roles*/}
                        <div className="flex flex-col flex-wrap m-2">
                            <ul className="text-sm text-gray-500 list-disc p-2">
                                <li>{PROPERTIES.PrecisionDesc}</li>
                                <li>{PROPERTIES.Precision2Desc}</li>
                            </ul>
                        </div>
                    </WorkExperienceCard>
                </div>
        </div>
    );
}

export default WorkExperience;