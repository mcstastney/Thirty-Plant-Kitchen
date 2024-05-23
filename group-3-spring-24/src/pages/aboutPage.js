import Team from '../components/TeamCards'
import elisaProfile from '../assets/elisa-square-profile.jpg'
import profilePic from '../assets/happy-tummy-square.png'
import '../styles/Team.css'


function About() {
  return (
    <>
    <body className="page-background">
    <h1>Meet the team</h1>
    <h3>We're a team of 6 software engineers, passionate about making healthy eating fun!</h3>
    <Team profilepic={elisaProfile} name="Elisa McGarry" bio="Creative problem-solver with an analytical mind. Software engineer with a passion for creating digital services to empower people." contact="https://www.linkedin.com/in/elisa-mcgarry/"/>
    <Team profilepic={profilePic} name="Team member" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." contact="https://www.linkedin.com"/>
    <Team profilepic={profilePic} name="Team member" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." contact="https://www.linkedin.com"/>
    <Team profilepic={profilePic} name="Team member" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." contact="https://www.linkedin.com"/>
    <Team profilepic={profilePic} name="Team member" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." contact="https://www.linkedin.com"/>
    <Team profilepic={profilePic} name="Team member" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." contact="https://www.linkedin.com"/>
    </body>
    </>
  );
}

export default About;
