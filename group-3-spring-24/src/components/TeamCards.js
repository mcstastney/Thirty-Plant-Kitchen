import '../styles/Team.css'

function Team (props) {
    return (
        <div className="profile-card">
            <img className="pic-style" src={props.profilepic}></img>
            <h2 className="profile-heading">{props.name}</h2>
            <div className="profile-text">
            <p><b>About:</b> {props.bio}</p>
            <a href={props.contact}><b>Contact me</b></a>
            </div>
            
        </div>
    )
}

export default Team