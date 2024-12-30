import Image from "next/image";

interface TechSkillElementProps {
    name: string;
    logoSrc: string;
    alt: string;
}
const TechSkillElement = ({name, logoSrc, alt}: TechSkillElementProps) => {
    return (
        <div className="flex flex-wrap cursor-pointer transition-transform duration-300
        hover:scale-125 md:hover:scale-110 lg:hover:scale-150 transform-origin-center
        text-white text-center max-w-full m-4">
            <p className="flex justify-center items-center">{name}</p>
            <div className="ml-3 w-10 h-10 relative">
                <Image
                    src={logoSrc}
                    alt={alt}
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>
        </div>
    )
}

export default TechSkillElement;