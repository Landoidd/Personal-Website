import Image from "next/image";
import LocationPin from "../../public/images/locationPin";
import ArrowDown from "../../public/images/arrow_down";
import WorkExperience from "@/app/work-experience/page";
import TechnicalSkillsPage from "@/app/technical-skills/page";
import ProjectsPage from "@/app/projects/page";
import ConnectPage from "@/app/connect/page";
import Header from "@/components/Header";

interface technicalSkillsProps {
    className?: string
}

const Home = ({className}: technicalSkillsProps) => {
    const aboutMe = 'I am currently studying computer science at the University of Florida.';
    const learnMore = 'Scroll to learn more about me!';
    return (
        <div className={className}>
            {/* Homepage Container */}
            <div className="flex flex-col items-center mt-3">
                {/*Welcome Content with location and socials*/}
                <div className="m-1">
                   <Header name="Landon Zigler"></Header>
                    <hr className="border-t-2 border-zinc-500  my-4 mx-auto"/>
                    <div className="flex gap-2 items-center justify-center">
                        <LocationPin className="w-4 h-4 text-white"/>
                        <p className="text-sm">
                            <a className="hover:underline" target="_blank"
                               href="https://www.google.com/maps/place/Florida/">Florida, USA
                            </a></p>
                        <div/>
                    </div>
                </div>
                {/*/!*Top of Container *!/*/}
                <div
                    className="flex flex-flex-wrap items-center justify-center gap-4 bg-zinc-600  shadow-zinc-700 border-zinc-500 border-2 shadow-md rounded-lg p-8 mt-5">
                    {/*Image*/}
                    <div>
                        <Image
                            src="/images/professional_photo.jpg"
                            alt="Photo of Me"
                            width={300}
                            height={300}
                            className="rounded-lg object-contain w-full h-full"
                        />
                    </div>
                    {/* Inner Container to store text */}
                    <div className="flex flex-col items-center justify-center gap-4">
                        {/* About me */}
                        <div className="max-w-md text-center">
                            <p className="text-2xl">{aboutMe}</p>
                            <p className="mt-4 text-sm">{learnMore}</p>
                        </div>
                        {/* Arrow */}
                        <div className="flex flex-col items-center">
                            <div className="w-2 h-12 bg-white animate-[pulse_2s_ease-in-out_infinite] rounded-sm"></div>
                            <div className="w-2 h-12 bg-white animate-[pulse_2s_ease-in-out_infinite] rounded-sm"></div>
                            <div className="w-2 h-12 bg-white animate-[pulse_2s_ease-in-out_infinite] rounded-sm"></div>
                            <ArrowDown className="w-28 h-28 text-white animate-[pulse_2s_ease-in-out_infinite] translate-y-[-11px]"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Work Experience Container */}
            <div className="w-full">
                <WorkExperience className="mt-40"/>
                <TechnicalSkillsPage className="mt-40"/>
                <ProjectsPage className="mt-40"/>
                <ConnectPage className="mt-40"/>
            </div>
        </div>
    );
}

export default Home;