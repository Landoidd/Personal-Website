import Header from "@/components/Header";
import Image from "next/image";
import TechSkillElement from "@/components/TechSkillElement";

interface TechnicalSkillsPageProps {
    className?: string
}

const TechnicalSkillsPage = ({className}: TechnicalSkillsPageProps) => {
    return (
        <div className={className}>
            { /*Technical Skills Header*/}
            <Header name="Technical Skills"></Header>
            {/*Frontend Skills and Backend Skills Header*/}
            <div className="flex flex-wrap m-5">
                <div className="flex flex-col w-1/2 content-center items-center">
                    <h2 className="font-bold text-xl w-1/2">Frontend Experience</h2>
                    <hr className=" text-white w-1/2"/>
                </div>
                <div className="flex flex-col w-1/2 content-center items-center">
                    <h2 className="text-center font-bold text-xl w-1/2">Backend Experience</h2>
                    <hr className=" text-white w-1/2"/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {/*Frontend Skills Body */}
                <div
                    className="w-1/2 flex flex-wrap bg-zinc-600  shadow-zinc-700 border-zinc-500 border-2 shadow-md
                rounded-lg p-4">
                    <div className="flex flex-wrap">
                        <TechSkillElement name="HTML" logoSrc="/images/html_logo.png"
                                          alt="HTML Logo"></TechSkillElement>
                        <TechSkillElement name="CSS" logoSrc="/images/css_logo.png" alt="CSS Logo"></TechSkillElement>
                    </div>
                    <div className="flex flex-wrap">
                        <TechSkillElement name="Tailwind" logoSrc="/images/tailwind_logo.png"
                                          alt="Tailwind Logo"></TechSkillElement>
                        <TechSkillElement name="JavaScript" logoSrc="/images/javascript_logo.png"
                                          alt="Javascript Logo"></TechSkillElement>
                    </div>
                    <div className="flex flex-wrap">
                        <TechSkillElement name="React" logoSrc="/images/react_logo.png"
                                          alt="React Logo"></TechSkillElement>
                        <TechSkillElement name="Next.js" logoSrc="/images/nextjs_logo.png"
                                          alt="Next.js Logo"></TechSkillElement>
                    </div>
                </div>
                {/*Backend Skills Body */}
                <div
                    className="w-1/2 flex flex-wrap bg-zinc-600  shadow-zinc-700 border-zinc-500
                border-2 shadow-md rounded-lg p-4 justify-around">
                </div>
            </div>
        </div>
    );
}

export default TechnicalSkillsPage;