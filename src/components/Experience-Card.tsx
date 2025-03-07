import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import LocationPin from "../../public/images/locationPin";
  import Image from "next/image";
  
  type ExperienceCardProps = {
    title: string;
    company: string;
    location: string;
    date: string;
    bulletPoints: string[];
    imageSrc: string;
  };
  
  export function ExperienceCard({
    title,
    company,
    location,
    date,
    bulletPoints,
    imageSrc,
  }: ExperienceCardProps) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <CardTitle>{title}</CardTitle>
              <Image className={"relative rounded-full overflow-hidden border-2 border-primary"} src={imageSrc} alt={"Image of company logo"} width={60} height={60} />
            </div>
            <Badge>{date}</Badge>
          </div>
          <CardDescription>{company}</CardDescription>
          <div className="flex items-center space-x-2">
            <LocationPin className="w-4 h-4" />
            <CardDescription className={"font-medium italic"}>
              {location}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="ml-6 list-disc [&>li]:mt-2">
            {bulletPoints.map((bulletPoint, index) => (
              <li key={index}>{bulletPoint}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    );
  }