import Image from "next/image";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Home = () => {
    return (
        <div className="flex flex-col items-center p-5">
            {/*Welcome Text*/}
            <div className="m-2">
                <h1 className="font-bold text-3xl text-white">Hi! Welcome to my Website</h1>
            </div>
            {/*Image*/}
            <div className="m-4 w-64 h-64">
                <Image
                    src="/professional_photo.jpg"
                    alt="Photo of Me"
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
            </div>
            {/*Cards*/}
            <div className="flex flex-wrap justify-center mt-24">
                <div className="m-4 w-64 h-64">
                    <Card className="bg-gray-800 rounded-lg text-white">
                        <CardHeader>
                            <CardTitle>About Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <p>I am a 4th year Computer Science Student at the University of Florida.</p>
                                <p></p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            {/*End of Cards */}
        </div>
    );
}

export default Home;