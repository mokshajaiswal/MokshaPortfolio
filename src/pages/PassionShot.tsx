// PassionShot.tsx
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PassionShot.css'; // Create a CSS file for styling
import cameraIcon from '../assets/icons/cameraIcon.png';
import focalLengthIcon from '../assets/icons/focalLengthIcon.png';
import apertureIcon from '../assets/icons/apertureIcon.png';
import shutterSpeedIcon from '../assets/icons/shutterSpeedIcon.png';
import isoIcon from '../assets/icons/isoIcon.png';
import passionmain from '../assets/gallery/passionmain.png'
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
        <h2 className="heading-text-a" style={{fontFamily : 'Hellsb'}}>The story behind the Passion shot</h2>
        <img src={flower3} alt="flower" className="heading-icon-a" />
      </div>

      {/* Headline on the right */}
      <h1 className="headline-contact" > Journalling, crocheting and more</h1>
    </div>


      <div className="image-details-container">
      {/* Image Section */}
      <div className="image-container">
        <img
          src={passionmain} // Replace with the correct image URL
          alt="Photography"
          className="main-image"
        />
      </div>

      {/* Technical Specifications */}
      <div className="technical-specifications" style={{fontFamily : 'Larkb'}}>
        <h2>Technical Specifications</h2>
        <div className="specifications-grid">
          <div className="spec-item">
            <img src={cameraIcon} alt="Camera" className="spec-icon" />
            <p>Camera</p>
            <p><b>Motorola Edge 40</b></p>
            
          </div>
          <div className="spec-item">
            <img src={focalLengthIcon} alt="Focal Length" className="spec-icon" />
            <p>Focal Length</p>
            <p><b>50mm</b></p>
            
          </div>
          <div className="spec-item">
            <img src={apertureIcon} alt="Aperture" className="spec-icon" />
            <p>Aperture</p>
            <p><b>f/5.6</b></p>
            
          </div>
          <div className="spec-item">
            <img src={shutterSpeedIcon} alt="Shutter Speed" className="spec-icon" />
            <p>Shutter Speed</p>
            <p><b>1/250s</b></p>
            
          </div>
          <div className="spec-item">
            <img src={isoIcon} alt="ISO" className="spec-icon" />
            <p>ISO</p>
            <p><b>200</b></p>
            
          </div>
          
        </div>
        <ul style={{fontFamily: 'Hellr'}}>
          <li>This picture was taken with an Android phone.</li>
          <li>I wanted to capture a relaxed, cozy moment, so I chose a balanced focal length. This helped me include the entire scene—myself, the surroundings, and the small details that reflect my passion for writing and creativity. The composition is wide enough to show the peaceful setting while keeping the focus on the central moment.</li>
          <li>For the aperture, I kept it moderate to let in just enough natural light to create soft, warm tones.</li>
          <li> I chose the shutter speed carefully to prevent any motion blur while still capturing the subtle movement of the leaves and the gentle shadows.</li>
          <li> Using the available daylight and a low ISO, I achieved a clean, smooth look that reflects the relaxed, peaceful atmosphere I wanted to share through this image.</li>
        </ul>
      </div>

      {/* Editing Specifications */}
      <div className="editing-specifications" style={{fontFamily : 'Larkb'}}>
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
      <div className="description-section" style={{fontFamily : 'Larkb'}}>
        <h2>What the Picture Depicts</h2>
        <p>
        This photo represents a quiet and personal moment of creativity, where I am fully immersed in something I love and am passionate about. On a sunny day, I spread out a soft white blanket on the grass, surrounded by fallen leaves and a few personal items that reflect my hobbies and passions: journaling, crocheting, and using my Polaroid to capture special moments.
        </p>
        <p>
        Crocheting is my passion. I love making clothes, plushies, scarves, bags, and more for myself and my loved ones. It brings me so much joy. Doing something I love outdoors under a beautiful sky always brightens my mood. I have been journaling for the past three years, where I like to write down everything that's going on inside my head.
        </p>
        <p>
        This picture shows me lying comfortably, writing in my journal, letting my thoughts flow freely. The gentle sunlight highlights the pages, inviting me to pause and reflect. Around me are some colorful crocheted pieces, a few snacks, and my Polaroid camera—objects that bring me joy and spark my creativity.
        </p>
        <p>
        The peacefulness of this moment is what I wanted to capture. The fallen leaves scattered across the grass signal the change of seasons, a perfect time to slow down and enjoy the simple things. Writing, knitting, and taking photos are passions that help me connect with myself, allowing me to be present and mindful of the world around me.
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
