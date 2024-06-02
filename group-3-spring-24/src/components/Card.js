
function Card(props) {
    return (
        <div className="card"> 
            <img className="card-image" src={props.image} alt="profile" />
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">About {props.name}:{props.about}</p>
        </div>
    );
}

export default Card;