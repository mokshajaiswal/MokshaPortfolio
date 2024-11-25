// ProfessionalShot.tsx
// PassionShot.tsx
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfessionalShot.css'; // Create a CSS file for styling
import cameraIcon from '../assets/Icons/cameraIcon.png';
import focalLengthIcon from '../assets/Icons/focalLengthIcon.png';
import apertureIcon from '../assets/Icons/apertureIcon.png';
import shutterSpeedIcon from '../assets/Icons/shutterSpeedIcon.png';
import isoIcon from '../assets/Icons/isoIcon.png';
import Professionalmain from '../assets/gallery/Professionalmain.png'
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
        <h2 className="heading-text-a">The story behind the Professional headshot</h2>
        <img src={flower3} alt="flower" className="heading-icon-a" />
      </div>

      {/* Headline on the right */}
      <h1 className="headline-contact"  style={{fontFamily: 'Larkb'}}> Poised Pose</h1>
    </div>


      <div className="image-details-container-p">
      {/* Image Section */}
      <div className='p-image'>
      <div className="image-container-p">
        <img
          src={Professionalmain} // Replace with the correct image URL
          alt="Photography"
          className="main-image-p"
        />
      </div>
      </div>

      {/* Technical Specifications */}
      <div className="technical-specifications">
        <h2>Technical Specifications</h2>
        <div className="specifications-grid">
          <div className="spec-item">
            <img src={cameraIcon} alt="Camera" className="spec-icon" />
            <p>Camera</p>
            <p><b>IPhone 13</b></p>
            
          </div>
          <div className="spec-item">
            <img src={focalLengthIcon} alt="Focal Length" className="spec-icon" />
            <p>Focal Length</p>
            <p><b>5mm</b></p>
            
          </div>
          <div className="spec-item">
            <img src={apertureIcon} alt="Aperture" className="spec-icon" />
            <p>Aperture</p>
            <p><b>f/1.6</b></p>
            
          </div>
          <div className="spec-item">
            <img src={shutterSpeedIcon} alt="Shutter Speed" className="spec-icon" />
            <p>Shutter Speed</p>
            <p><b>1/125s</b></p>
            
          </div>
          <div className="spec-item">
            <img src={isoIcon} alt="ISO" className="spec-icon" />
            <p>ISO</p>
            <p><b>32</b></p>
            
          </div>
          
        </div>
        <ul style={{fontFamily: 'Hellr'}}>
          <li>This picture is clicked with I phone 13 back camera.</li>
          <li>To avoid any distortion of the face I used the back camera. Placed it on the tripod in my room. </li>
          <li>I kept considerable distance from the tripod to my position and zoomed to get the perfect shot of my face.
          </li>
        </ul>
      </div>

      {/* Editing Specifications */}
      <div className="editing-specifications">
        <h2>Editing Specifications</h2>
        <ul>
          <li>Adjusted to brighten the image slightly and add contrast to give the skin a smooth look and make the dark top and hair stand out against the background.</li>
          <li>Enhanced lightly to maintain a crisp, professional look, especially focusing on the face and hair details.</li>
          <li>A slight boost in saturation and warmth was applied to give the skin a natural glow and prevent any dullness from indoor lighting.</li>
          <li>The background was lightly softened, ensuring the focus remains on me without any distractions.</li>
        </ul>
      </div>

      {/* Description */}
      <div className="description-section">
        <h2>What the Picture Depicts</h2>
        <p>
        This photo represents a formal, professional headshot, designed to capture an approachable yet polished appearance. I chose a simple indoor setting with soft natural lighting to keep the focus on me. The goal was to present myself in a way that feels both professional and friendly, making it suitable for various formal uses, such as portfolios or LinkedIn profiles.
        </p>
        <p>
        I wore a simple, solid black top to keep the focus on my face, avoiding distractions from the outfit. The natural, soft makeup highlights my features without overpowering them, adding to the professional yet approachable vibe.
        </p>
        <p>
        The lighting plays a key role in this image, with gentle daylight coming from the side, highlighting my face while creating soft shadows for a balanced and flattering look. The overall effect is warm and welcoming, reflecting confidence and openness.
        </p>
        <p>
        This headshot is designed to convey professionalism while still being personal, showing my personality through a relaxed, natural expression. It’s a balance between formality and approachability, perfect for first impressions in a professional setting.
        </p>
      </div>
    </div>

    </div>
  );
};

export default PassionShot;

