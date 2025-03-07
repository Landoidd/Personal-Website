import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  githubLink?: string;
};

export function ProjectCard({
  title,
  description,
  technologies,
  status,
  githubLink,
}: ProjectCardProps) {
  let canClick = false;
  if (status == "Github") canClick = true;
  return (
    <Card className="overflow-hidden md:w-1/3">
      <CardHeader className={"flex justify-between items-center"}>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((task, index) => (
            <Badge key={index}>{task}</Badge>
          ))}
        </div>
        <div className="mt-4 flex gap-2 justify-center">
          {canClick ? (
            <a href={githubLink} target="_blank">
              <Button variant="outline" size="sm">
                {status}
              </Button>
            </a>
          ) : (
            <Button variant="outline" size="sm">
              <p>{status}</p>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
