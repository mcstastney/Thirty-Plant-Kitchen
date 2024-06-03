// import { Link } from "react-router-dom";
import Reviews from "../components/Reviews";
import Hero from "../components/Hero";
import "../App.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero/>
      <Reviews/>
      <Footer/>
    </>
  );
}

export default Home;
