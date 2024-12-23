import Header from "@/components/Header";
import {FC} from "react";

interface projectsProps {
    className?: string
}

const ProjectsPage: FC<projectsProps> = ({className}) => {
    return (
        <div className={className}>
            {/*Projects Header */}
            <Header name="Projects"></Header>
        </div>
    );
}

export default ProjectsPage;