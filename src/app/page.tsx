import Image from "next/image";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import LocationPin from "../../public/images/locationPin";

const Home = () => {
    const aboutMe = 'I am a 4th year Student at the University of Florida studying computer science.';

    return (
        /* Homepage Container */
        <div className="flex flex-col items-center p-5">
            {/*Welcome Content with location and socials*/}
            <div className="m-2">
                <h1 className="font-bold text-3xl text-center">Landon Zigler</h1>
                <hr className="border-t-2 border-zinc-500  my-4 mx-auto"/>
                <div className="flex gap-2 items-center justify-center">
                    <LocationPin className="w-4 h-4 text-white"/>
                    <p className="text-sm"><a className="hover:underline" href="https://www.google.com/maps/place/Florida/">Florida,
                        USA</a></p>
                    <div/>
                </div>
            </div>
            {/*Container with picture and About Me */}
            <div className="flex flex-wrap items-center justify-center gap-4 bg-zinc-600  shadow-zinc-700 shadow-md rounded-lg p-8">
                {/*Image*/}
                <div>
                    <Image
                        src="/images/professional_photo.jpg"
                        alt="Photo of Me"
                        width={300}
                        height={300}
                        className="rounded-lg object-contain w-full h-full"
                    />
                </div>
                {/* About me */}
                <div className="max-w-md text-center">
                    <p className="text-xl">{aboutMe}</p>
                    <p className="mt-4 text-sm">Learn more about me Below!</p>
                </div>
            </div>
        </div>
    );
}

export default Home;