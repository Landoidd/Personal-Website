import Image from "next/image";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-between p-5 animate-fadeInUp opacity-0">
            <div className="m-2">
                <h1 className="font-bold text-3xl text-white">Hi! Welcome to my Website</h1>
            </div>
            {/*Image*/}
            <div className="m-2">
                <Image src="/professional_photo.jpg" alt="Photo of Me" width={300} height={300} />
            </div>
        </div>
    );
}

export default Home;