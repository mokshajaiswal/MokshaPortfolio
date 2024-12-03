// src/pages/AestheticShot.tsx
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AestheticShot.css'; // Create a CSS file for styling
import flower3 from '../assets/about/flower3.png'; // Replace with your flower icon path
import cameraIcon from '../assets/Icons/cameraIcon.png';
import focalLengthIcon from '../assets/Icons/focalLengthIcon.png';
import apertureIcon from '../assets/Icons/apertureIcon.png';
import shutterSpeedIcon from '../assets/Icons/shutterSpeedIcon.png';
import isoIcon from '../assets/Icons/isoIcon.png';
import aestheticmain from '../assets/gallery/aestheticmain.png';
import InteractionWidget from '../components/InteractionWidget';



const AestheticShot: React.FC = () => {
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
        <h2 className="heading-text-a">The story behind the Aesthetic shot</h2>
        <img src={flower3} alt="flower" className="heading-icon-a" />
      </div>

      {/* Headline on the right */}
      <h1 className="headline-aesthetic" style={{fontFamily: 'Larkb'}}>Embracing Nature near Riverside</h1>
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
            <p><b>Motorola edge 40</b></p>
            
          </div>
          <div className="spec-item">
            <img src={focalLengthIcon} alt="Focal Length" className="spec-icon" />
            <p>Focal Length</p>
            <p><b>50mm</b></p>
            
          </div>
          <div className="spec-item">
            <img src={apertureIcon} alt="Aperture" className="spec-icon" />
            <p>Aperture</p>
            <p><b>f/1.4</b></p>
            
          </div>
          <div className="spec-item">
            <img src={shutterSpeedIcon} alt="Shutter Speed" className="spec-icon" />
            <p>Shutter Speed</p>
            <p><b>1/125s</b></p>
            
          </div>
          <div className="spec-item">
            <img src={isoIcon} alt="ISO" className="spec-icon" />
            <p>ISO</p>
            <p><b>101</b></p>
            
          </div>
          
        </div>
        <ul style={{fontFamily: 'Hellr'}}>
          <li>This picture was clicked with an android phone. </li>
          <li>I wanted to click a soft dreamy look for this picture and thats why decided to click picture with a longer focal length. As this focal length allows me to capture the scene in entirety which includes with the person and the surrounding creating the balanced composition.</li>
          <li>For aperture I wanted more light into the camera, as there was less light in the environment. </li>
          <li>As this picture is clicked with hands, and I wanted to prevent any blur or motion from the subject. Also for the shutter speed I wanted enough light while ensuring clarity.</li>
          <li>This was shot in daylight, thats why low iso maintained a clear and smooth look for the image.</li>
        </ul>
      </div>

      {/* Editing Specifications */}
      <div className="editing-specifications">
        <h2>Editing Specifications</h2>
        <ul>
          <li>This picture was edited in affinity photos to enhance the look of the photo and make it more dreamy and little blurry.</li>
          <li>Increased exposure to brighten the subject or balance the shadows in the trees.</li>
          <li>Enhanced contrast to give depth to the image, making the subject stand out.</li>
          <li>Increased saturation or vibrance to emphasize the greens and pinks, making the environment appear greenery.</li>
          <li>Applied a subtle vignette to focus attention on the center of the image and add drama to the edges.</li>
          <li>Applied additional blurring to the background using Affinity Photo's "Gaussian Blur" tool or lens blur, to enhance the shallow depth of field effect (in line with f/1.4 aperture).</li>
          <li>Selective sharpening on the subject to make it stand out while keeping the rest soft and ethereal.</li>
        </ul>
      </div>

      {/* Description */}
      <div className="description-section">
        <h2>What the Picture Depicts</h2>
        <p>
        This photo shows a peaceful moment when I can stop and enjoy the beauty around me. I was by the river, and a big tree stood in front of me, framing the view just right. Its branches stretched out above me, casting soft shadows on the ground, and the bright green plants hugged the edge of the river.</p>
        <p>In the picture, I am wearing a light, flowing dress. I feel calm, just like the still water beside me. Behind me, you can see a bridge in the distance, reminding us that there is a world beyond this quiet place.</p>
        <p>This image represents the quiet times I can find in nature. Standing still in my dress, I feel the harmony between myself and the natural world. By having my back to the camera, the photo invites you to imagine what I see. It encourages you to think about what is beyond the river and the horizon. It’s a chance for me to pause and find peace in the simple things around me.</p>
        <p>For me, this picture means calmness and reflection. It shows how connected I am to nature. The soft edges and warm colors were made even better during editing, giving the image a dreamy feel. This scene encourages me to stop for a moment, take a deep breath, and enjoy the beauty of stillness.</p>
        
      </div>
    </div>

    <InteractionWidget pageId="passionShot" />
    
    </div>

    
  
  );
};

export default AestheticShot;