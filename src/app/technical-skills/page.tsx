import Header from "@/components/Header";
import TechSkillElement from "@/components/TechSkillElement";
import Subheader from "@/components/Subheader";

const TechnicalSkillsPage = () => {
    return (
        <div>
            { /*Technical Skills Header*/}
            <Header name="Technical Skills"></Header>
            {/*Frontend Skills Header*/}
            <Subheader name="Frontend Experience"/>
            <div className="flex flex-col flex-wrap w-full justify-center items-center">
                {/*Frontend Skills Body */}
                <div
                    className="w-2/3 flex flex-wrap bg-zinc-600  shadow-zinc-700 border-zinc-500 border-2 shadow-md
                rounded-lg m-5">
                    <div className="flex w-full justify-around">
                        <TechSkillElement name="HTML" logoSrc="/images/html_logo.png"
                                          alt="HTML Logo"></TechSkillElement>
                        <TechSkillElement name="CSS" logoSrc="/images/css_logo.png" alt="CSS Logo"></TechSkillElement>
                    </div>
                    <div className="flex w-full justify-around">
                        <TechSkillElement name="Tailwind" logoSrc="/images/tailwind_logo.png"
                                          alt="Tailwind Logo"></TechSkillElement>
                        <TechSkillElement name="JavaScript" logoSrc="/images/javascript_logo.png"
                                          alt="Javascript Logo"></TechSkillElement>
                    </div>
                    <div className="flex w-full justify-around">
                        <TechSkillElement name="React" logoSrc="/images/react_logo.png"
                                          alt="React Logo"></TechSkillElement>
                        <TechSkillElement name="Next.js" logoSrc="/images/nextjs_logo.png"
                                          alt="Next.js Logo"></TechSkillElement>
                    </div>
                </div>
                {/*Backend Skills Header*/}
                <Subheader name="Backend Experience"/>
                {/*Backend Skills Body */}
                <div
                    className="w-2/3 flex flex-wrap bg-zinc-600  shadow-zinc-700 border-zinc-500
                border-2 shadow-md rounded-lg justify-around mt-5">
                    <div className="flex w-full justify-around">
                        <TechSkillElement name="Node.js" logoSrc="/images/nodejs_logo.png"
                                          alt="Node.js Logo"></TechSkillElement>
                        <TechSkillElement name="Express" logoSrc="/images/expressjs_logo.png" alt="Express Logo"></TechSkillElement>
                    </div>
                    <div className="flex w-full justify-around">
                        <TechSkillElement name="Next.js" logoSrc="/images/nextjs_logo.png"
                                          alt="Next.js Logo"></TechSkillElement>
                        <TechSkillElement name="PostgreSQL" logoSrc="/images/postgres_logo.png" alt="CSS Logo"></TechSkillElement>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechnicalSkillsPage;