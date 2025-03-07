import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCardProps {
  title: string
  skills: string[]
}

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <Card className="flex flex-col items-center text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary">
            {skill}
          </Badge>
        ))}
      </CardContent>
    </Card>
  )
}

