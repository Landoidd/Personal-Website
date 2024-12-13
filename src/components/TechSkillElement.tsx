import Image from "next/image";

interface TechSkillElementProps {
    name: string;
    logoSrc: string;
    alt: string;
}
const TechSkillElement = ({name, logoSrc, alt}: TechSkillElementProps) => {
    return (
        <div className="flex cursor-pointer transition-transform duration-300
        hover:scale-125 md:hover:scale-110 lg:hover:scale-150 transform-origin-center
        text-white text-center max-w-full m-4">
        <p>{name}</p>
            <div className="ml-3 w-10 h-10">
                <Image
                    src={logoSrc}
                    alt={alt}
                    width={40}
                    height={40}
                    className="rounded-lg"
                />
            </div>
    </div>
    )
}

export default TechSkillElement;