import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
}

export function ProjectCard({ title, description, technologies, imageSrc }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className={"flex justify-between items-center"}>
        <CardTitle>{title}</CardTitle>
        <Image src={imageSrc} alt={title} width={50} height={50} color=""/>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((task, index) => (
            <Badge key={index}>{task}</Badge>
          ))}
        </div>
        <div className="mt-4 flex gap-2 justify-center">
          <Button variant="outline" size="sm" asChild>
            <p>Coming Soon</p>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

