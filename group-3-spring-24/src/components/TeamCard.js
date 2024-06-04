import "../styles/aboutus.css";

function Card(props) {
    return (
        <div className="card"> 
            <img className="card-image" src={props.image} alt="profile" />
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text"><b>About: </b>{props.about}</p>
            <a href={props.contact}><b>Contact me</b></a>
        </div>
    );
}

export default Card;