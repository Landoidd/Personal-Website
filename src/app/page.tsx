import Image from "next/image";
import LocationPin from "../../public/images/locationPin";
import WorkExperience from "@/app/work-experience/page";
import TechnicalSkillsPage from "@/app/technical-skills/page";
import ProjectsPage from "@/app/projects/page";
import ConnectPage from "@/app/connect/page";
import Header from "@/components/Header";
import SocialLink from "@/components/SocialLink";
import {PROPERTIES} from "@/app/utils/utils";

const SECTIONS = [
    { component: WorkExperience },
    { component: TechnicalSkillsPage },
    { component: ProjectsPage },
    { component: ConnectPage },
];

const Home = () => {
    return (
        <div className="m-5 flex flex-col flex-wrap items-center justify-center">
            {/* Homepage Container */}
            <div className="flex flex-col items-center">
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
                    className="flex flex-col text-md md:flex-row items-center justify-center gap-4 bg-zinc-600 shadow-zinc-700 border-zinc-500 border-2 shadow-md rounded-lg p-8 mt-5">
                    {/*Image*/}
                    <div className="w-2/3">
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
                            <p className="md:text-2xl">{PROPERTIES.aboutMe}</p>
                            <div className="md:text-lg flex flex-col flex-wrap m-4 gap-4 text-md">
                                <SocialLink src={PROPERTIES.linkedinURL} image_src={PROPERTIES.linkedinImage}
                                            alt={PROPERTIES.linkedinAlt} title={PROPERTIES.linkedinTitle}/>
                                <SocialLink src={PROPERTIES.githubURL} image_src={PROPERTIES.githubImage}
                                            alt={PROPERTIES.githubAlt} title={PROPERTIES.githubTitle}/>
                            </div>
                            <p className="mt-4 text-sm">{PROPERTIES.learnMore}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*Display all the sections under the Home page*/}
            <div className="w-full">
                {SECTIONS.map(({component: SectionComponent}, index) => (
                    <div className="mt-40" key={index}>
                        <SectionComponent/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;