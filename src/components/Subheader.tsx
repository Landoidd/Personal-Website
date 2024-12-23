interface SubHeaderProps {
    name: string,
}

const Subheader = ({name}: SubHeaderProps) => {
    return (
        <div className="flex flex-wrap mt-5 justify-center">
            <div className="flex flex-col">
                <h2 className="font-bold text-xl">{name}</h2>
                <hr className=" text-white w-full"/>
            </div>
        </div>
    )
}

export default Subheader