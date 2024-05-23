import { Link } from 'react-router-dom';

function Home() {
    return (
      <>
      <h1>Welcome to Thirty Plant Kitchen</h1>
      <p>The positive effects of eating a wide variety of fruit and veg has become more popularised in recent years.</p>  
      <p>Specifically, experts now recommend that we eat 30 different plants a week.</p>
      <p>We also know that eating local and seasonal food is healthier for us and better for the 
        environment than exporting out-of-season products year-round.</p>
      <p>But the thought of eating 30 different plants a week can be overwhelming. 
        On top of that, understanding what is in season each month can make meal planning a headache!</p>
      <p>Our app puts the ease in seasonal eating. 
        The Thirty Plant KitchenTM app helps people discover which plants are at their best and how to incorporate 
        more fruit and veg varieties in delicious, healthy recipes.</p>
      
      <Link to="/SignUp">
        <button type="button">Sign up!</button>
      </Link> 
      </>
    );
  }
  
  export default Home;
  