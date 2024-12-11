import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"

interface WorkExperienceProps {
    className?: string
}

const WorkExperience = ({className}: WorkExperienceProps) => {
    return (
        /*Create a structure to store each work experience on a separate card */
        <>
            {/* Work Experience Header */}
            <div className="flex items-center justify-center text-4xl font-bold">
                <h1>Work Experience</h1>
            </div>

            {/* Work Experience Body */}
            <div className="flex p-10">
                <Card className="w-1/2 m-4">
                    <CardHeader>
                        <CardTitle>Apparel Magic</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Description
                        </CardDescription>
                    </CardContent>
                </Card>

                <Card className="w-1/2 m-4">
                    <CardHeader>
                        <CardTitle>Precision Sports Technology</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Description
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default WorkExperience;