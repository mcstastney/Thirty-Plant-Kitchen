import { Link } from "react-router-dom";
import Reviews from "../components/Reviews";

function Home() {
  return (
    <>
      <h1>Welcome to Thirty Plant Kitchen!</h1>
      <p>
       Experts recommend that we eat 30 different plants a week.
      </p>
      <p>
        We also know that eating local and seasonal food is healthier for us and the environment.
      </p>
      <p>
        The Thirty Plant Kitchen app puts the ease in seasonal eating. 
      </p>  
      <p>  
        Discover which plants are at their best and how to
        incorporate more fruit and veg varieties in delicious, healthy recipes.
      </p>

      <Link to="/SignUp">
        <button type="button">Sign up!</button>
      </Link>
      <Reviews></Reviews>
    </>
  );
}

export default Home;
