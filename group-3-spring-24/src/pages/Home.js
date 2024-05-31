import { Link } from "react-router-dom";
import Reviews from "../components/Reviews";
import Hero from "../components/Hero";
import "../App.css";

function Home() {
  return (
    <>
      <Hero></Hero>

      <Reviews></Reviews>
    </>
  );
}

export default Home;
