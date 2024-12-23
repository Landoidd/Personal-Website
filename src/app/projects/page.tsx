import Header from "@/components/Header";

interface ProjectPageProps {
    className?: string
}

const ProjectsPage = ({className}: ProjectPageProps) => {
    return (
        <div className={className}>
            {/*Projects Header */}
            <Header name="Projects"></Header>
        </div>
    );
}

export default ProjectsPage;