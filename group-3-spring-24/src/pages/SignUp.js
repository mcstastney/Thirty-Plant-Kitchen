//general/component imports
import SignUpForm from "../components/SignUpForm";
import ScrollButton from '../components/ScrollButton';
import '../styles/SignUp.css'
//MUI imports
import { Typography } from '@mui/material';
//img imports
import SignupHero from '../assets/stock-imgs/signuphero.jpg';

function Home() {
    return (
      <>
      <div className="signup-container">
        <img 
          src={SignupHero}
          alt="Table with various food dishes scattered around the edges of image"
          className="hero-img-signup"
          />
        <div className="signup-txt-container">
          <div className="signup-title-container">
      <Typography variant="h1" >Join the club!</Typography>
      <Typography variant="subtitle1" fontSize={'2.8rem'}>Register for free</Typography>
      <div className="scroll-div">
      <ScrollButton/>
      </div>
      </div>
      <p>Become a Thirty Plant Kitchen member and curate your own personalised recipe library. </p>
      <p>Plus, get exclusive access to our plant tracker and stay on top of your 30-a-week target!</p>
      </div>
      <br></br>
      <div id="signup-form">
      <SignUpForm/>
      </div>
      </div>
      </>
    );
  }
  
  export default Home;
  