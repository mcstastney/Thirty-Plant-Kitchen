import "../styles/Hero.css";
import veggies from "../assets/veggies.png";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

function Hero() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".hero-text", { delay: 200, origin: "top" });
    sr.reveal(".hero-img", { delay: 450, origin: "top" });
    sr.reveal(".icons", { delay: 500, origin: "left" });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-img">
          <img
            src="/30plant-kitchen-logo-trans-bg.png"
            alt="An image of healthy foods"
          />
        </div>
        <div className="hero-text">
          <h1>30 Plant Kitchen</h1>
          <Link className="signup-btn" to="/SignUp">
            <i className="ri-arrow-right-circle-fill"></i>
            Sign up
          </Link>
          <br></br>
          <a
            href="https://www.youtube.com/watch?v=oZWPI5rHidg"
            className="youtube"
          >
            <i className="ri-youtube-fill"></i> Video
          </a>
          <p>
            Join{" "}
            <strong>
              <em>thousands</em>
            </strong>{" "}
            of people around the world on a journey to improve their gut
            microbiome
            <br />
            <br />
            Consume <strong>30</strong> plants a week and you're on your way to
            earning you're healthy eating streak
          </p>
        </div>
      </section>

      <div className="icons">
        <a href="https://www.tiktok.com/@yourpositivehealth/video/7193018866757373189">
          <i className="ri-tiktok-line"></i>
        </a>
        <a href="https://www.bbc.co.uk/food/articles/plant_points_explained">
          <i className="ri-article-line"></i>
        </a>
        <a href="https://www.instagram.com/hughfearnleywhittingstall/reel/C6WeMukqYhY/">
          <i className="ri-instagram-line"></i>
        </a>
      </div>
    </>
  );
}

export default Hero;
