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
          <li>Brightness and Contrast Adjustments: Increased to enhance natural lighting.</li>
          <li>Saturation: Adjusted slightly to bring out the greenery.</li>
          <li>Vibrance: Enhanced to balance the tones of the scenery.</li>
          <li>Soft Focus: Applied to the background to create depth and draw attention to the figure and tree.</li>
        </ul>
      </div>

      {/* Editing Specifications */}
      <div className="editing-specifications">
        <h2>Editing Specifications</h2>
        <ul>
          <li>Brightness and Contrast Adjustments: Increased to enhance natural lighting.</li>
          <li>Saturation: Adjusted slightly to bring out the greenery.</li>
          <li>Vibrance: Enhanced to balance the tones of the scenery.</li>
          <li>Soft Focus: Applied to the background to create depth and draw attention to the figure and tree.</li>
        </ul>
      </div>

      {/* Description */}
      <div className="description-section">
        <h2>What the Picture Depicts</h2>
        <p>
          This photograph is a visual representation of solitude and peaceful reflection. The lone figure by the riverside, 
          amidst the natural landscape, evokes a sense of calm and introspection. The changing tones of the greenery contrast 
          subtly with the flowing water, enhancing the peaceful scene. The photograph captures a moment of stillness, highlighting 
          the beauty of being present in nature.
        </p>
      </div>
    </div>

    </div>
  );
};

export default PassionShot;
