import '../styles/Team.css'
// import Button from '@mui/material/Button';


function Team (props) {
    return (
        <div className="profile-card">
            <img className="pic-style" src={props.profilepic} alt="Profile pic"></img>
            <h2 className="profile-heading">{props.name}</h2>
            <div className="profile-text">
            <p><b>About:</b> {props.bio}</p>
            <a href={props.contact}><b>Contact me</b></a>
            <button variant="text">Test Button MUI</button>
            </div>
            
        </div>
    )
}

export default Team