import React from 'react';
import './About.css';
import profileImage from '../../assets/images/me.jpg'; 

const About = () => {
  return (
    <section id="about">
      <div className="about-content">
        <img src={profileImage} alt="Profile" className="profile-image" /> 
        <div className="text-section">
          <h2>About</h2>
          <p>
            Hello, I'm a motivated and proactive web developer 
            specializing in React.js and Node.js. I'm currently seeking new challenges to further enhance my skills and contribute to exciting projects. I excel at working both independently and within a team, always striving to deliver high-quality results. With excellent communication and problem-solving abilities, I'm dedicated to creating efficient 
            and innovative web solutions. 
            <br/>
            <strong>Let's build something great together!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
