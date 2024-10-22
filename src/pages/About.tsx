import React, { useRef, useEffect, useState } from 'react';
import './About.css';
import aboutpic from '../assets/about/aboutpic.png'; // Replace with your actual image path
import flower3 from '../assets/about/flower3.png'; // Replace with your flower icon path



const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  return (
    <div className="about-container">
      {/* Flexbox for heading and headline */}
      <div className="heading-headline d-flex">
        {/* Section heading on the left */}
        <div className="heading d-flex ">
          <img src={flower3} alt="flower" className="heading-icon" />
          <h2 className="heading-text">A Bit About Myself</h2>
          <img src={flower3} alt="flower" className="heading-icon" />
        </div>

        {/* Headline on the right */}
        <h1 className="headline-about">Your Creative Guide to Functional and Aesthetic Digital Products</h1>
      </div>

      <div className="image-container">
          <img src={aboutpic} alt="Moksha Jaiswal" className="profile-image" />
        </div>

      {/* Main content */}
      <div className="content d-flex">
        {/* Left section: image */}
  

        {/* Right section: Text */}
        <div className="text-container">
          <p className="description">
            I’m Moksha Jaiswal, a product designer with 4 years of experience, having worked in both small startups and large corporate companies. Currently, I’m pursuing a master’s degree in Interaction and Experience Design at the University of Limerick. My passion for design began in childhood, when I loved working on creative projects like arts and crafts, solving puzzles, and doing DIY. With a background in computer science, I’ve been able to bridge the gap between design and technology, collaborating closely with project managers and developers to create products that are both functional and visually appealing.
          </p>
          <p className="description">
            I believe that with the right process, any problem can be solved, even if the solution isn’t obvious at first. My experience at companies like Zeta and IG has taught me how to balance user needs with business goals to create successful outcomes. I’m always excited by new challenges and love finding creative solutions that make a real impact. Whether building something from the ground up or refining an existing product, I’m passionate about delivering exceptional user experiences.
          </p>
        </div>
      </div>

      


    </div>
    
  




  );
};

export default About;
