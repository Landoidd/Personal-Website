import Image from "next/image";

interface SocialLinkProps {
    src: string;
    image_src: string;
    alt: string;
    title: string;
}
const SocialLink = ({src, image_src, alt, title}: SocialLinkProps) => {
    return (
        <div className="flex w-full justify-center items-center gap-2 hover:underline">
            <Image src={image_src} alt={alt}
                   width={25}
                   height={25}/>
            <p><a href={src} target="_blank">{title}</a></p>
        </div>
    )
}

export default SocialLink;