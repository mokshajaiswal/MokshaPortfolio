// PassionShot.tsx
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PassionShot.css'; // Create a CSS file for styling
import cameraIcon from '../assets/icons/cameraIcon.png';
import focalLengthIcon from '../assets/icons/focalLengthIcon.png';
import apertureIcon from '../assets/icons/apertureIcon.png';
import shutterSpeedIcon from '../assets/icons/shutterSpeedIcon.png';
import isoIcon from '../assets/icons/isoIcon.png';
import aestheticmain from '../assets/gallery/aestheticmain.png'
import flower3 from '../assets/about/flower3.png'; 


const PassionShot: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }); 
  return (
    <div className="aesthetic-container-main">
    {/* Flexbox for heading and headline */}
    <div className="heading-headline-a d-flex">
      {/* Section heading on the left */}
      <div className="heading-a d-flex ">
        <img src={flower3} alt="flower" className="heading-icon-a" />
        <h2 className="heading-text-a">A Bit About Myself</h2>
        <img src={flower3} alt="flower" className="heading-icon-a" />
      </div>

      {/* Headline on the right */}
      <h1 className="headline-contact">Your Creative Guide to Functional and Aesthetic Digital Products</h1>
    </div>


      <div className="image-details-container">
      {/* Image Section */}
      <div className="image-container">
        <img
          src={aestheticmain} // Replace with the correct image URL
          alt="Photography"
          className="main-image"
        />
      </div>

      {/* Technical Specifications */}
      <div className="technical-specifications">
        <h2>Technical Specifications</h2>
        <div className="specifications-grid">
          <div className="spec-item">
            <img src={cameraIcon} alt="Camera" className="spec-icon" />
            <p>Camera</p>
            <p><b>1/125s</b></p>
            
          </div>
          <div className="spec-item">
            <img src={focalLengthIcon} alt="Focal Length" className="spec-icon" />
            <p>Focal Length</p>
            <p><b>1/125s</b></p>
            
          </div>
          <div className="spec-item">
            <img src={apertureIcon} alt="Aperture" className="spec-icon" />
            <p>Aperture</p>
            <p><b>1/125s</b></p>
            
          </div>
          <div className="spec-item">
            <img src={shutterSpeedIcon} alt="Shutter Speed" className="spec-icon" />
            <p>Shutter Speed</p>
            <p><b>1/125s</b></p>
            
          </div>
          <div className="spec-item">
            <img src={isoIcon} alt="ISO" className="spec-icon" />
            <p>ISO</p>
            <p><b>ISO 200</b></p>
            
          </div>
          
        </div>
        <ul style={{fontFamily: 'Hellix'}}>
          <li>This picture was taken with an Android phone.</li>
          <li>I wanted to capture a relaxed, cozy moment, so I chose a balanced focal length. This helped me include the entire scene—myself, the surroundings, and the small details that reflect my passion for writing and creativity. The composition is wide enough to show the peaceful setting while keeping the focus on the central moment.</li>
          <li>For the aperture, I kept it moderate to let in just enough natural light to create soft, warm tones.</li>
          <li> I chose the shutter speed carefully to prevent any motion blur while still capturing the subtle movement of the leaves and the gentle shadows.</li>
          <li> Using the available daylight and a low ISO, I achieved a clean, smooth look that reflects the relaxed, peaceful atmosphere I wanted to share through this image.</li>
        </ul>
      </div>

      {/* Editing Specifications */}
      <div className="editing-specifications">
        <h2>Editing Specifications</h2>
        <ul>
          <li>Increased vibrance to enhance the colors of the green grass and colorful knitwear without oversaturating the natural tones.</li>
          <li>Softened highlights to reduce the brightness on the white blanket, making the details stand out more without harsh contrasts.</li>
          <li>Slight increase in clarity to bring out the texture of the grass, the yarn, and the edges of the notebook and other items.</li>
          <li>Lifted shadows slightly to add depth, especially under the leaves and on the folds of the blanket, giving a more dimensional feel to the scene.</li>
          <li>Lowered contrast slightly to keep the overall mood soft and calm.</li>
        </ul>
      </div>

      {/* Description */}
      <div className="description-section">
        <h2>What the Picture Depicts</h2>
        <p>
        This photo represents a quiet and personal moment of creativity, where I am fully immersed in something I love. On a sunny day, I spread out a soft white blanket in the grass, surrounded by fallen leaves and a few personal items that reflect my hobbies and passions.
        </p>
        <p>
        I lay comfortably, writing in my journal, letting my thoughts flow freely. The gentle sunlight highlights the pages, inviting me to pause and reflect. Around me, I’ve placed some colorful knitted pieces, a few snacks, and a Polaroid camera—objects that bring me joy and inspire creativity.
        </p>
        <p>
        The peacefulness of this moment is what I wanted to capture. The fallen leaves scattered across the grass signal the change of seasons, a perfect time to slow down and enjoy the simple things. Writing, knitting, and taking photos are passions that help me connect with myself, allowing me to be present and mindful of the world around me.
        </p>
        <p>
        In this image, I also wanted to show the beauty of combining relaxation with productivity. My back is turned to the camera, symbolizing that this moment is just for me—a time for reflection, creating, and enjoying the stillness of the day. The warm tones of the grass, the colorful yarn, and the soft texture of the blanket all add to the feeling of comfort and personal space.
        </p>
        <p>
        For me, this photo represents balance—finding time for the things I love in a peaceful setting. The scene invites you to pause and consider what brings you joy, encouraging a moment of self-care through simple, creative activities.
        </p>
      </div>
    </div>

    </div>
  );
};

export default PassionShot;
