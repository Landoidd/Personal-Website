import Header from "@/components/Header";
import Project from "@/components/Project";

const ProjectsPage = () => {
    return (
        <div>
            {/*Projects Header */}
            <Header name="Projects"></Header>

            {/*Projects Body*/}
            <div className="flex flex-wrap justify-around items-center content-center m-4">
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    );
}

export default ProjectsPage;