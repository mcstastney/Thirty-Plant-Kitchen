import React from 'react';
import '../styles/aboutus.css';
import elisaProfile from '../assets/elisa-square-profile.jpg'
import victoriaProfile from '../assets/victoria-profile.jpg'
import Card from '../components/Card.js';


const AboutUs = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>Welcome to Thirty Plant Kitchen!</p>
      
      <section className="section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make cooking easy and enjoyable for everyone. We believe that cooking should be a fun and rewarding experience, and our goal is to provide you with the best recipes, tips, and tools to make that happen.
        </p>
      </section>

      <section className="section">
        <h2>Our Team</h2>

        <div className="team">

        <div className="card-container">
            <Card name="Emma" about="I have been learning to play chess this past year!" image="https://via.placeholder.com/150" />
            <Card name="Elisa" about="Input some text about Elisa" image={elisaProfile} />
            <Card name="Victoria" about="Input some text about Victoria" image={victoriaProfile} />
            <Card name="Abbie" about="Input some text about Abbie" image="https://via.placeholder.com/150?text=Abbie" />
            <Card name="Sahra" about="Input some text about Sahra" image="https://via.placeholder.com/150?text=Sahra" />
            <Card name="Shafia" about="Input some text about Shafia" image="https://via.placeholder.com/150?text=Shafia" />
        </div>

        </div>
      </section>

      <section className="section">
        <h2>Contact Us</h2>
        <p>If you have any questions or suggestions, feel free to reach out to us at <a href="mailto:thirtyplantkitchen@gmail.com">thirtyplantkitchen@gmail.com</a>.</p>
      </section>

    </div>
  );
};

export default AboutUs;
