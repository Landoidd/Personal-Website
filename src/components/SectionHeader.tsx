interface HeaderProps {
    name: string;
}

const Header = ({name}: HeaderProps) => {
    return (
        <div className="flex items-center justify-center text-4xl font-bold">
            <h1>{name}</h1>
        </div>
    );
}

export default Header;