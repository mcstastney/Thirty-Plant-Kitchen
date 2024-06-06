// import { Link } from "react-router-dom";
import Reviews from "../components/Reviews";
import Hero from "../components/Hero";
import "../App.css";

function Home() {
  return (
    <>
     <div data-testid="homepage">
      <Hero/>
      <Reviews/>
      </div>
    </>
  );
}

export default Home;
