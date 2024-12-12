import Header from "@/components/Header";

interface projectsProps {
    className?: string
}

const ProjectsPage = ({className}: projectsProps) => {
    return (
        <div className={className}>
            {/*Projects Header */}
            <Header name="Projects"></Header>
        </div>
    );
}

export default ProjectsPage;