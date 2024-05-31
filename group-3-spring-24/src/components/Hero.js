import "../styles/Hero.css";
import veggies from "../assets/veggies.png";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Hero() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "65px",
      duration: 2600,
      reset: true,
    });

    sr.reveal(".hero-text", { delay: 200, origin: "top" });
    sr.reveal(".hero-img", { delay: 450, origin: "top" });
    sr.reveal(".icons", { delay: 500, origin: "left" });
    sr.reveal(".scroll-down", { delay: 500, origin: "right" });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>30 Plant Kitchen</h1>
          <a href="#">Sign up</a>
          <a
            href="https://www.youtube.com/watch?v=oZWPI5rHidg"
            className="ctaa"
          >
            <i className="ri-youtube-fill"></i> Watch Video
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
            <strong>30</strong> plants a week and you're on a healthy eating
            streak
          </p>
        </div>
        <div className="hero-img">
          <img src={veggies} alt="An image of healthy foods" />
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
