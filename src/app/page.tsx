import Image from "next/image";
import Card from "@/components/Card";

const Home = () => {
    //Define title and description for card
    let title = "Title";
    let description = "Description";
    return (
        <div className="flex flex-col items-center justify-between p-5 animate-fadeInUp opacity-0">
            <div className="m-2">
                <h1 className="font-bold text-3xl text-white">Hi! Welcome to my Website</h1>
            </div>
            {/*Image*/}
            <div className="m-2">
                <Image src="/professional_photo.jpg" alt="Photo of Me" width={300} height={300} />
            </div>
            <Card title={title} description={description}></Card>
        </div>
    );
}

export default Home;