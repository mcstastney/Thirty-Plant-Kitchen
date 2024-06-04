import React from "react";
import "../styles/aboutus.css";
import elisaProfile from "../assets/elisa-square-profile.jpg";
import victoriaProfile from "../assets/victoria-profile.jpg";
import abbieProfile from "../assets/abbie-about-img.JPG";
import emmaProfile from "../assets/emma-profile.jpg";
import Card from "../components/TeamCard.js";
import shafiaProfile from "../assets/shafia-profile.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <h1>About Us</h1>
        <p>Welcome to 30 Plant Kitchen!</p>

        <section className="section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make cooking easy and enjoyable for everyone. We
            believe that cooking should be a fun and rewarding experience, and
            our goal is to provide you with the best recipes, tips, and tools to
            make that happen.
          </p>
        </section>

        <section className="section">
          <h2>Our Team</h2>

          <div className="team">
            <div className="card-container">
              <Card
                name="Emma"
                about="I have been learning to play chess this past year!"
                image={emmaProfile}
              />
              <Card
                name="Elisa McGarry"
                about="Comms pro with a passion for creating digital services to empower people."
                image={elisaProfile}
                contact="https://www.linkedin.com/in/elisa-mcgarry/"
              />
              <Card
                name="Victoria"
                about="Input some text about Victoria"
                image={victoriaProfile}
              />
              <Card
                name="Abbie"
                about="When I'm not finding new recipes to share, I can be found in the pottery studio trying to create the perfect ramen bowl!"
                image={abbieProfile}
              />
              <Card
                name="Sahra"
                about="Input some text about Sahra"
                image="https://via.placeholder.com/150?text=Sahra"
              />
              <Card
                name="Shafia"
                about="I like staying active by going to the gym and playing sports"
                image={shafiaProfile}
              />
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or suggestions, feel free to reach out to
            us at{" "}
            <a href="mailto:thirtyplantkitchen@gmail.com">
              thirtyplantkitchen@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
