import { PROPERTIES } from "@/app/lib/constants";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex items-center justify-between gap-4 md:h-24">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Landon Zigler.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={PROPERTIES.githubURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={PROPERTIES.githubImage} alt={PROPERTIES.githubAlt} height={25} width={25}/>
            <span className="sr-only">{PROPERTIES.githubTitle}</span>
          </a>
          <a
            href={PROPERTIES.linkedinURL}
            target="_blank"
            rel="noopener noreferrer"
          >
             <Image src={PROPERTIES.linkedinImage} alt={PROPERTIES.linkedinAlt} height={25} width={25}/>
            <span className="sr-only">{PROPERTIES.linkedinTitle}</span>
          </a>
          <a href={PROPERTIES.gmailURL}>
          <Image src={PROPERTIES.gmailImage} alt={PROPERTIES.gmailAlt} height={25} width={25}/>
            <span className="sr-only">{PROPERTIES.gmailTitle}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}