//Defines reusable card

const Card = ({title, description}: {title: string; description: string}) => {
    return (
        <div className="border-2 border-gray-200 m-4 rounded">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Card;