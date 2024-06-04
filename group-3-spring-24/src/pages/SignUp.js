//general/component imports
import SignUpForm from "../components/SignUpForm";
import ScrollButton from "../components/ScrollButton";
import "../styles/SignUp.css";
//MUI imports
import { Typography } from "@mui/material";
//img imports
import SignupHero from "../assets/stock-imgs/signuphero.jpg";
import Point1 from "../assets/stock-imgs/point1.jpg";
import Point2 from "../assets/stock-imgs/point2.jpg";
import Point3 from "../assets/stock-imgs/point3.jpg";

function Home() {
  return (
    <>
      <div className='signup-container'>
        <img
          src={SignupHero}
          alt='Table with various food dishes scattered around the edges of image'
          className='hero-img-signup'
        />
        <div className='signup-txt-container'>
          <div className='signup-title-container'>
            <Typography variant='h1'>Join the Club!</Typography>
            <Typography variant='subtitle1' fontSize={"2.8rem"}>
              Get started for free
            </Typography>
            <div className='scroll-div'>
              <ScrollButton />
            </div>
          </div>


          {/* features section */}
          <div className='features-container-signup'>
            {/* point 1 */}
            <div className='point1'>
              <Typography variant='h5' fontStyle={"italic"} fontSize={'2rem'} margin={5}>
                Curate your own personalised recipe library
              </Typography>
              <Typography variant='subtitle2' fontSize={'1.2rem'}>
                Members are able to save their favourite recipes to their
                account to come back to time and time again!{" "}
              </Typography>
            </div>
            <img
              src={Point1}
              alt='Tomatoes cooking in a pan'
              className='point1-img'
            />
            {/* point 2 */}
            <div className='point2'>
              <Typography variant='h5' fontStyle={"italic"} fontSize={'2rem'} margin={5}>Track your plant intake</Typography>
              <Typography variant='subtitle2' fontSize={'1.2rem'}>
                Get exclusive access to our plant tracker to help you stay on
                top of your 30 plants a week goals
              </Typography>
            </div>
            <img
              src={Point2}
              alt='Holding a bunch of grapes at a picnic'
              className='point2-img'
            />
            {/* point 3 */}
            <div className='point3'>
              <Typography variant='h5' fontStyle={"italic"} fontSize={'2rem'} margin={5}>
                Learn more about the benefits of 30 plants a week
              </Typography>
              <Typography variant='subtitle2' fontSize={'1.2rem'}>
                Our members area provides extra opportunities to expand your
                knowledge
              </Typography>
            </div>
            <img
              src={Point3}
              alt='Tomatoes cooking in a pan'
              className='point3-img'
            />
          </div>
        </div>

        <div id='signup-form'>
          <SignUpForm />
        </div>
      </div>
    </>
  );
}

export default Home;
