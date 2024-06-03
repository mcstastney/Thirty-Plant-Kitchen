//general/component imports
import SignUpForm from "../components/SignUpForm";
import ScrollButton from '../components/ScrollButton';
import '../styles/SignUp.css'
//MUI imports
import { Typography } from '@mui/material';
//img imports
import SignupHero from '../assets/stock-imgs/signuphero.jpg';
import Point1 from '../assets/stock-imgs/point1.jpg';
import Point2 from '../assets/stock-imgs/point2.jpg';
import Point3 from '../assets/stock-imgs/point3.jpg';

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
      <Typography variant="h1" >Join the Club!</Typography>
      <Typography variant="subtitle1" fontSize={'2.8rem'}>Get started for free</Typography>
      <div className="scroll-div">
      <ScrollButton/>
      </div>
      </div>
      <div className="features-container-signup">
        <div className="point1">
      <p>Become a Thirty Plant Kitchen member and curate your own personalised recipe library. </p>
      <img
      src={Point1}
      alt="Tomatoes cooking in a pan"
      />
      </div>
      <div className="point2">
      <img
      src={Point2}
      alt="Holding a bunch of grapes at a picnic"
      />
      <p>Plus, get exclusive access to our plant tracker and stay on top of your 30-a-week target!</p>
      </div>
      <div className="point3">
      <p>Plus, get exclusive access to our plant tracker and stay on top of your 30-a-week target!</p>
      <img
      src={Point3}
      alt="Tomatoes cooking in a pan"
      />
      </div>
      </div>
      </div>
      
      <div id="signup-form">
      <SignUpForm/>
      </div>
      </div>
      </>
    );
  }
  
  export default Home;
  