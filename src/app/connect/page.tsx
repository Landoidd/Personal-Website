import Header from "@/components/Header";

interface ConnectPageProps {
    className?: string;
}

const ConnectPage= ({ className }: ConnectPageProps) => {
    return (
        <div className={className}>
            {/*Connect Header */}
            <Header name="Connect" />
        </div>
    );
};

export default ConnectPage;
