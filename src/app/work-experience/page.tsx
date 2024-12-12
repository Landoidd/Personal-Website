import Image from "next/image";
import WorkExperienceCard from "@/components/WorkExperienceCard";

const WorkExperience = () => {
    return (
        /*Create a structure to store each work experience on a separate card */
        <>
            {/* Work Experience Header */}
            <div className="flex items-center justify-center text-4xl font-bold m-5">
                <h1>Work Experience</h1>
            </div>
            {/*Card Container*/}
            <div className="flex rounded-lg">
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
                        <ul className="text-sm text-gray-500 list-disc">
                            <li>I worked with Javascript using Selenium, LangChain, and an OpenAI API key.</li>
                            <li>I was able to complete a 100% working chatbot that the company assigned me to create.</li>
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
                        <ul className="text-sm text-gray-500 list-disc">
                            <li>I updated 100% of the submission buttons on the front end of their website with Vue.js.</li>
                            <li>I contributed to integrating 50% more of automated tests for the frontend utilizing Playwright.</li>
                        </ul>
                    </div>
                </WorkExperienceCard>
            </div>
        </>
    );
}

export default WorkExperience;