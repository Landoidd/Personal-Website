import Header from "@/components/Header";
import { FC } from "react";

interface ConnectProps {
    className?: string;
}

const ConnectPage: FC<ConnectProps> = ({ className }) => {
    return (
        <div className={className}>
            {/*Connect Header */}
            <Header name="Connect" />
        </div>
    );
};

export default ConnectPage;
