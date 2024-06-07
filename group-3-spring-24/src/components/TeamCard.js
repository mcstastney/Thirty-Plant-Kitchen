import "../styles/aboutus.css";

function Card(props) {
    return (
        <div className="card" data-testid='team-card'> 
            <img className="card-image" src={props.image} alt="profile" />
            <h3 className="card-title">{props.name}</h3>
            <p className="card-text"><b>About: </b>{props.about}</p>
            <a className="link-text" href={props.contact} target="_blank"><b>Contact me</b></a>
        </div>
    );
}

export default Card;