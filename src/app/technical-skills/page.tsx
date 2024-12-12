import Header from "@/components/Header";

interface TechnicalSkillsPageProps {
    className?: string
}

const TechnicalSkillsPage = ({className}: TechnicalSkillsPageProps) => {
    return (
        <div className={className}>
            { /*Technical Skills Header*/}
            <Header name="Technical Skills"></Header>
            {/*Frontend Skills */}
            <div>
                <h2>Frontend Experience</h2>
                {/*Languages*/}
                <div>
                    <p>Languages</p>
                </div>
                <div>
                    {/*Frameworks*/}
                    <p>FrameWorks</p>
                </div>
            </div>
        </div>
    );
}

export default TechnicalSkillsPage;