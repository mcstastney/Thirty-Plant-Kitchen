import React from 'react';
import '../aboutus.css';

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
          <div className="member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Sahra</h3>
            <p>Recipe Developer</p>
          </div>
          <div className="member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Victoria</h3>
            <p>Recipe Developer</p>
          </div>
          <div className="member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Shafia</h3>
            <p>Recipe Developer</p>
          </div>
          <div className="member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Elisa</h3>
            <p>Recipe Developer</p>
          </div>
          <div className="member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Abbie</h3>
            <p>Recipe Developer</p>
          </div>
          <div className="member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Emma</h3>
            <p>Recipe Developer</p>
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
