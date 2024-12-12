import Header from "@/components/Header";

interface connectProps {
    className?: string
}

const ConnectPage = ({className}: connectProps) => {
    return (
        <div className={className}>
            {/*Connect Header */}
            <Header name="Connect"></Header>
        </div>
    );
}

export default ConnectPage;