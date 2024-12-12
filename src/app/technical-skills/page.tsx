interface TechnicalSkillsPageProps {
    className?: string
}

const TechnicalSkillsPage = ({className}: TechnicalSkillsPageProps) => {
    return (
        <div className={className}>
            { /*Technical Skills Header*/}
            <div className="flex items-center justify-center text-4xl font-bold">
                <h1>Technical Skills</h1>
            </div>
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