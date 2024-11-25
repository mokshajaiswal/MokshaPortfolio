// src/pages/Videoad.tsx
import React, { useEffect, useState } from 'react';
import './Video.css'; // Ensure the path matches your file structure
import flower3 from '../assets/about/flower3.png'; // Replace with your flower icon path
import videomain from '../assets/gallery/videomain.png'; // Replace with the actual image path
import video2 from '../assets/gallery/video2.png'; // Replace with the actual image path
import video3 from '../assets/gallery/video3.png'; // Replace with the actual image path
import video4 from '../assets/gallery/video4.png'; // Replace with the actual image path
import video5 from '../assets/gallery/video5.png'; // Replace with the actual image path
import video6 from '../assets/gallery/video6.png'; // Replace with the actual image path
import VideoProduction from '../assets/gallery/VideoProduction.mp4'; // Replace with the actual video path
import play from '../assets/gallery/play.png'



const Videoad: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top when the page loads
  }, []); // The empty dependency array ensures this runs only once on mount

  // Handle play button click
  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="aesthetic-container-main">
      {/* Flexbox for heading and headline */}
      <div className="heading-headline-a d-flex">
        {/* Section heading */}
        <div className="heading-a d-flex">
          <img src={flower3} alt="flower" className="heading-icon-a" />
          <h2 className="heading-text-a">The Story Behind the Video Ad</h2>
          <img src={flower3} alt="flower" className="heading-icon-a" />
        </div>

        {/* Headline */}
        <h1 className="headline-a" style={{ fontFamily: 'Larkb' }}>
          From Struggle to Swift
        </h1>
      </div>

      {/* Video thumbnail with play button */}
      <div className="video-container">
        {!isVideoPlaying ? (
          <div className="thumbnail-container">
            {/* Thumbnail image */}
            <img
              src={videomain}
              alt="Video Thumbnail"
              className="thumbnail-image"
            />

            {/* Play button on top of the thumbnail */}
            <div className="play-button" onClick={handlePlayClick}>
              <img
                src={play} // Play button image
                alt="Play Button"
                className="play-icon"
              />
            </div>
          </div>
        ) : (
          <div className="video-element">
            <video className="video-player" controls autoPlay>
              <source src={VideoProduction} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      

      {/* Technical Specifications Section */}
      <div className="technical-specifications">
        <h2>Technical Specifications</h2>
        <ul style={{ fontFamily: 'Hellr' }}>
          <li>We used an iPhone 14 Pro for shooting the video.</li>
          <li>Additionally, we borrowed a gimbal from the library to capture smooth, stable shots without any jitter.</li>
          <li>A tripod was used to film the transition scene.</li>
          <li>The main editing was done using Adobe Premiere Pro, while text tracking was completed on the InShot mobile editing app.</li>
          <li>We also used After Effects to add the scrolling effect in the end credits.</li>
          <li>Premiere Pro was further utilized to enhance the audio recorded during the shoot.</li>
        </ul>
      </div>

      {/* Image Section 2 */}
      <div className="image2-details-container">
        <img
          src={video2} // Ensure the correct path to the image
          alt="Video Ad Behind the Scenes"
          className="main-image"
        />
      </div>

       {/* Description */}
       <div className="description-section">
        <h2>Reflection on my contribution</h2>
        <p style={{ marginBottom: '20px' }}>
          This project has been one of the most challenging yet exciting experiences, as I had the opportunity to learn and apply multiple skills. In this ad, every role and detail played a crucial part in telling a compelling story. I wore different hats like concept creation, writing, directing, music and acting and tried to brought a unique vision to life. In this blog, I’ll share my contributions to the team, the challenges we faced, and the rewarding moments that made this journey worthwhile.
        </p>
        <h5>Concept and Writing</h5>
        <p>
          As the director for this project, I started by incorporating storytelling into the ad. I was inspired by the charm of old black-and-white cinema, particularly the Charlie Chaplin era. His expressive acting, the simplicity of visuals, and the music of that time sparked the idea of portraying our product through a comparison. We used a black-and-white theme to symbolize struggle, transitioning into a colorful theme to represent effortlessness and innovation.
        </p>

        <p>
          The product, TFI Bicycle, was central to the script. Every shot was thoughtfully planned with the team’s contributions. As the writer, I focused on capturing the essence of stress and struggle in the first half of the ad, transitioning into feelings of comfort and ease in the second half.
        </p>

        <p>
          Additionally, I contributed ideas for graphics, including the transition shot, the intro, and the final logo reveal of the TFI Bicycle, which were skillfully executed by the team.
        </p>



        <h5>Director</h5>
        <p>
        Direction was one of my primary responsibilities, which I managed alongside acting—a decision finalized after extensive team discussions. Balancing these roles was undoubtedly challenging but rewarding.
        From brainstorming sessions to the final cut, my goal was to ensure every scene aligned with the overall vision. My contributions included:
        </p>
        <ul>
          <li style={{ fontFamily: 'Hellr' }}>Planning Shots: I carefully composed each shot to effectively convey the product’s story and the user’s experience. A key moment was the transition from the black-and-white theme (struggle) to the colorful theme (effortlessness), which was technically challenging to execute.</li>
          <li style={{ fontFamily: 'Hellr' }}>Guiding the Team: I ensured the team understood the tone and direction of each scene and worked collaboratively to meet deadlines.</li>
          <li style={{ fontFamily: 'Hellr' }}>Problem Solving: During filming, I noticed continuity and lighting issues in some shots. I suggested reshooting a few scenes, which, thanks to clear direction, only took 15 minutes to perfect.</li>
          <li style={{ fontFamily: 'Hellr' }}>I worked closely with the editors to ensure the music complemented the video’s narrative, aligning with the ad’s concept and direction.</li>
          
        </ul>
        <p>
        I also received valuable support from my teammate, Niharika, who assisted with direction in certain scenes. Additonally we kept in mind to complete the entire shoot in 6 shots.
        </p>
      </div>

      {/* Image Section 3*/}
      <div className="image-details-container">
        <img
          src={video3} // Ensure the correct path to the image
          alt="Video Ad Behind the Scenes"
          className="main-image"
        />
      </div>


{/* Description */}
<div className="description-section">
      
        <h5>Music</h5>
        <p>
        Choosing the right music was a critical task. I decided to use two tracks:
        </p>
        <ul>
          <li style={{ fontFamily: 'Hellr' }}>A piece inspired by the Charlie Chaplin era to complement the black-and-white theme.</li>
          <li style={{ fontFamily: 'Hellr' }}>An energetic track to match the colorful theme and the vibrancy of the bicycle.</li>
          
          
        </ul>
        <p>
        Finding music that fit both tones and transitioned seamlessly was challenging. However, I successfully adjusted tempos, layered sound effects, and synchronized the music with visuals to enhance the ad’s emotional impact.
        </p>
        </div>

        {/* Image Section 4*/}
      <div className="image2-details-container">
        <img
          src={video4} // Ensure the correct path to the image
          alt="Video Ad Behind the Scenes"
          className="main-image"
        />
      </div>


{/* Description */}
<div className="description-section">
      
        <h5>Acting</h5>
        <p>
        As I was the main actor of this ad, I found myself navigating the delicate balance between directing and performing. Being a director actually helped me in acting as I knew exactly what was needed for a specific scene. Being on both sides of the camera required careful planning and coordination, especially for scenes where I had to deliver emotionally impactful moments.
        </p>
        <p>
        Collaborating with teammates to choose costumes was a fun process. For the black-and-white scenes, we selected outfits reminiscent of that era, like loose shorts, while for the colorful theme, we opted for a sporty, vibrant look with bright pink leggings to symbolize energy and ease.
        </p>
        </div>



        {/* Image Section 5*/}
      <div className="image2-details-container">
        <img
          src={video5} // Ensure the correct path to the image
          alt="Video Ad Behind the Scenes"
          className="main-image"
        />
      </div>


{/* Description */}
<div className="description-section">
      
        
        <p>
        "From Struggle to Swift" was not just a project but a journey of learning, collaboration, and storytelling. Taking on multiple roles—director, writer, actor, and more—gave me a deeper appreciation for the art of videography and filmmaking.
I am grateful to my team for their support and contributions. Their efforts in their respective roles made this production a success. While the end result may not be perfect, I am proud of what we achieved together. This project has been a testament to the power of teamwork and creative problem-solving.
        </p>
    
        </div>

        {/* Image Section 6*/}
      <div className="image-details-container">
        <img
          src={video6} // Ensure the correct path to the image
          alt="Video Ad Behind the Scenes"
          className="main-image"
        />
      </div>



      


    </div>
  );
};

export default Videoad;



