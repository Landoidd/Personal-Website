import Image from "next/image";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import LocationPin from "../../public/images/locationPin";

const Home = () => {
    return (
        /* Homepage Container */
        <div className="flex flex-col items-center p-5">
            {/*Welcome Content with location and socials*/}
            <div className="m-2">
                <h1 className="font-bold text-3xl text-center">Landon Zigler</h1>
                <hr className="border-t-2 border-gray-400 my-4 mx-auto"/>
                <div className="flex flex-wrap">
                    <LocationPin className="w-4 h-4"/>
                    <p className="text-xs"><a href="https://www.google.com/maps/place/Florida/">Florida,
                        USA</a></p>
                    <div/>
                </div>
            </div>
            {/*Container with picture and About Me */}
            <div className="flex flex-wrap m-4">
                <Card className="w-96 bg-black border-white-100">
                    <CardHeader className="text-right">About Me</CardHeader>
                    {/*Image*/}
                    <div className="m-4 w-64 h-64 min-h-">
                        <Image
                            src="/images/professional_photo.jpg"
                            alt="Photo of Me"
                            width={200}
                            height={200}
                            className="rounded-lg"
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Home;