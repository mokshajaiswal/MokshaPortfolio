// src/pages/Home.tsx
import React, { useRef } from 'react';
import './Home.css';
import dribbbleIcon from '../assets/icons/dribbble.png';
import instagramIcon from '../assets/icons/instagram.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import verzeoCompany from '../assets/company/verzeo.png';
import lollypopCompany from '../assets/company/lollypop.png';
import alkyeCompany from '../assets/company/alkye.png';
import metaficCompany from '../assets/company/metafic.png';
import zetaCompany from '../assets/company/zeta.png';
import igCompany from '../assets/company/ig.png';
import flower from '../assets/icons/flower.png';
import project1 from '../assets/project/p1image.png';
import project2 from '../assets/project/p2image.png';
import project3 from '../assets/project/p3image.png';
import aestheticshot from  '../assets/gallery/aestheticshot.png';
import headshot from  '../assets/gallery/headshot.png';
import passion from  '../assets/gallery/passionshot.png';
import arrow from '../assets/gallery/arrow.png';
import flower2 from '../assets/gallery/flower2.png';
import rainbow from '../assets/gallery/rainbow.png';
import star from '../assets/gallery/star.png';
import work from '../assets/gallery/work.png';
import pin from '../assets/gallery/pin.png';
import bush from '../assets/gallery/bush.png';
import plant from '../assets/gallery/plant.png';
import videop from '../assets/gallery/videop.png';
import star2 from '../assets/gallery/star2.png';
import { NavLink } from 'react-router-dom';




const Home: React.FC = () => {
   
  const galleryRef = useRef<HTMLDivElement>(null!);
  const projectRef = useRef<HTMLDivElement>(null!);

  return (
    
  <div className="home-main-container">
   

   {/* Hero section */}
    <div className="home-container d-flex flex-column justify-content-center align-items-center">
      <div className="home-content">
      <p className="intro">
      <span role="img" aria-label="wave">👋</span> I'm Moksha Jaiswal, your go-to Product Designer
      </p>
      <h1 className="headline" style={{ fontFamily: 'Larkb' }}>
      Crafting functional and visually pleasing digital products for mobile and web
      </h1>
      <p className="subtext" style={{ fontFamily: 'Hellr' }}>
      I help teams and companies build their product from scratch. I’ve honed my skills in delivering exceptional digital experiences over the past 4 years.
      </p>



      <div className="social-links d-flex justify-content-center">
      <a href="https://dribbble.com/mokshajaiswal" target="_blank" rel="noreferrer">
      <img src={dribbbleIcon} alt="Dribbble" width="40" height="40" />
      </a>
      <a href="https://linkedin.com/in/mokshajaiswal/" target="_blank" rel="noreferrer">
      <img src={linkedinIcon} alt="LinkedIn" width="40" height="40" />
      </a>
      <a href="https://instagram.com/ddesifn/" target="_blank" rel="noreferrer">
      <img src={instagramIcon} alt="Instagram" width="40" height="40" />
      </a>
    </div>

    {/* Company logos section */}
      <div className="company-logos">
      <div className="logo-container">
      <img src={verzeoCompany} alt="Verzeo" className="company-logo" />
      </div>
      <div className="logo-container">
      <img src={lollypopCompany} alt="Lollypop" className="company-logo" />
      </div>
      <div className="logo-container">
      <img src={alkyeCompany} alt="Alkye" className="company-logo" />
      </div>
      <div className="logo-container">
      <img src={metaficCompany} alt="Metafic" className="company-logo" />
      </div>
      <div className="logo-container">
      <img src={zetaCompany} alt="Zeta" className="company-logo" />
      </div>
      <div className="logo-container">
      <img src={igCompany} alt="IG" className="company-logo" />
      </div>
      </div>
</div>



 
  </div> 

  <div ref={projectRef} className='projects-section-container'>
  <div className="projects-section">
    <h3 className="projects-heading">
      <img src={flower} alt="Project Name 3" className="flower-image" />
      Projects
      <img src={flower} alt="Project Name 3" className="flower-image" />
    </h3>
    <h2 className="projects-title">Some of my Selected Creative Design Projects</h2>
    <div className="projects-container">
      <div className="projects-card-container">

        {/* First Project Card with OneDrive link */}
        <a 
          href="https://ulcampus-my.sharepoint.com/my?id=%2Fpersonal%2F24035866%5Fstudentmail%5Ful%5Fie%2FDocuments%2FAttachments%2F24035866%2EMoksha%2ECS63141%2E1stAssign%2Epdf&parent=%2Fpersonal%2F24035866%5Fstudentmail%5Ful%5Fie%2FDocuments%2FAttachments" 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-card"
          style={{ textDecoration: 'none' }} // Optional: Remove underline
        >
          <img src={project3} alt="Design Principles" className="project-image" />
          <p className="project-name" style={{ fontFamily: 'Hellm' }}>Design Qualities in Everyday Things</p>
        </a>

        {/* Second Project Card with hyperlink */}
        <a 
          href="https://ulcampus-my.sharepoint.com/my?id=%2Fpersonal%2F24035866%5Fstudentmail%5Ful%5Fie%2FDocuments%2FAttachments%2F24035866%2EMoksha%2ECS6431%2EAssign2%2Epdf&parent=%2Fpersonal%2F24035866%5Fstudentmail%5Ful%5Fie%2FDocuments%2FAttachments" // Replace with your actual link
          target="_blank" 
          rel="noopener noreferrer"
          className="project-card"
          style={{ textDecoration: 'none' }} // Optional: Remove underline
        >
          <img src={project2} alt="Quantitative Research" className="project-image" />
          <p className="project-name" style={{ fontFamily: 'Hellm' }}>Semi Structured Interview Research</p>
        </a>

        <div className="project-card">
          <img src={project1} alt="Project Name 3" className="project-image" />
          <p className="project-name"style={{ fontFamily: 'Hellm' }} >Coming Soon</p>
        </div>
        <div className="project-card">
          <img src={project1} alt="Project Name 4" className="project-image" />
          <p className="project-name" style={{ fontFamily: 'Hellm' }}>Coming Soon</p>
        </div>
      </div>
    </div>
  </div>
</div>



        
   {/* Gallery section */}
  
   <div ref={galleryRef} className="gallery-container-main">
    <div className="container gallery-container">
      {/* Header Section */}
      <div className="text-center">
        
        <h3 className="gallery-header"><img src={flower2} className="flower2-image" />Gallery<img src={flower2} className="flower2-image" /></h3>
        
        <h3 className="gallery-subheader">Curated Collection of Photography and Videography</h3>
      </div>

      {/* Main Content Section */}
      <div className="row mt-5">
        {/* Left-side large box */}
        <div className="col-lg-6 mb-4">
          <div className="large-box">
          <NavLink to="/video" style={{ textDecoration: 'none', color: 'inherit'}}> 
          <img src={videop}  className="videothumbnail"/>
          <div className="stickers" style={{top: '6%', right: '6%'}}><img src={star2} className="star2"/></div>
          <div className="stickers" style={{top: '-6%', left: '-8%'}}><img src={pin} className="pin"/></div>
          <div className="stickers" style={{top: '71%', right: '10%'}}><img src={plant} className="plant"/></div>
          <div className="stickers" style={{top: '76%', left: '10%'}}><img src={bush} className="bush"/></div>
            <p className="placeholder-text">Blog On the VideoProduction of the Ad “From Struggle to Swift” </p>
            </NavLink> 
          </div>
          
        </div>
        
        

        {/* Right-side smaller boxes */}
        <div className="col-lg-6">
          <div className="row g-3">
            <div className="col-md-12">
            <NavLink to="/aestheticshot" style={{ textDecoration: 'none', color: 'inherit'}}> 
              <div className="small-box1">
              
                <img src={aestheticshot} alt="Dreamy Shot" className="aestheticshot"/> 
                
                <div className="aesthetic-label" style={{padding: '0'}}>
                <img src={arrow} className="arrow"/>   
                <p className="box-caption1" style={{textAlign: 'left'}}>Aesthetic/Dreamy Shot</p> 
                </div> 
                  
            </div>
            </NavLink> 
         
          </div>
          
          {/* Small box 2 */}
          
            <div className="col-md-6">
            <NavLink to="/ProfessionalShot" style={{ textDecoration: 'none', color: 'inherit'}}>
              <div className="small-box2">
                <div className="stickers" style={{top: '4%', left: '-8%'}}><img src={rainbow} className="rainbow"/></div>
                <div className="stickers" style={{top: '60%', right: '-7%'}}><img src={star} className="star"/></div>
                <img src={headshot} alt="Professional Headshot" className="headshot" />
                <p className="box-caption">Professional Headshot</p>
                
              </div>
              </NavLink>
              
            </div>
            
            
          {/* Small Box 3 */}
            <div className="col-md-6">
            <NavLink to="/PassionShot" style={{ textDecoration: 'none', color: 'inherit'}}>
              <div className="small-box3">
              <div className="stickers" style={{top: '105%', left: '18%'}}><img src={work} className="work"/></div>
                <img src={passion} alt="Passion Shot" className="passion" />
                <p className="box-caption" style={{marginTop: '-0.5rem'}}>Passion Shot</p>
              </div>
              </NavLink>
            </div>

          </div>
        </div>
      </div>
     
    </div>
    
    </div>
  
    



</div>




  );
};

export default Home;