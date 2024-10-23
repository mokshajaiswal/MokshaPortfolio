import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Contact from './pages/Contact';
import profileIcon from './assets/icons/profile.png';
import home from './assets/icons/home.png';
import homeoutline from './assets/icons/homeoutline.png';
import flower from './assets/icons/flower.png';
import './App.css'; // Custom CSS
import AestheticShot from './pages/AestheticShot';
import ProfessionalShot from './pages/ProfessionalShot';
import PassionShot from './pages/PassionShot';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  
  const homeRef = useRef<HTMLDivElement>(null); // Ref for the Home page
  const navigate = useNavigate(); // useNavigate for programmatic navigation
  const location = useLocation(); // useLocation to track the current page

  const [navigateToGallery, setNavigateToGallery] = useState(false); // Track when Gallery needs to scroll
  const [navigateToProject, setNavigateToProject] = useState(false); // Track when Gallery needs to scroll


  // Function to scroll to the Gallery section in Home
  const scrollToGallery = () => {
    if (homeRef.current) {
      const gallerySection = homeRef.current.querySelector('.gallery-container-main');
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Function to scroll to the Project section in Home
  const scrollToProject = () => {
    if (homeRef.current) {
      const projectSection = homeRef.current.querySelector('.projects-section-container');
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle Gallery link click
  const handleGalleryClick = () => {
    if (location.pathname !== '/') {
      // If not on the Home page, navigate to Home and then scroll to Gallery
      setNavigateToGallery(true); // Set flag to scroll after navigation
      navigate('/'); // Navigate to Home page
    } else {
      // If already on the Home page, just scroll to Gallery
      scrollToGallery();
    }
  };


  // Handle Gallery link click
  const handleProjectClick = () => {
    if (location.pathname !== '/') {
      // If not on the Home page, navigate to Home and then scroll to Gallery
      setNavigateToProject(true); // Set flag to scroll after navigation
      navigate('/'); // Navigate to Home page
    } else {
      // If already on the Home page, just scroll to Gallery
      scrollToProject();
    }
  };

  // Handle Home link click
  const handleHomeClick = () => {
    if (location.pathname === '/' || location.pathname === '/home') {
      // If already on Home, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If not on Home, navigate to Home
      navigate('/');
    }
  };

  // useEffect to handle scrolling to Gallery after navigating to Home
  useEffect(() => {
    if (navigateToGallery && location.pathname === '/') {
      scrollToGallery(); // Scroll to Gallery when the Home page is loaded
      setNavigateToGallery(false); // Reset the flag
    }
    if (navigateToProject && location.pathname === '/') {
      scrollToProject(); // Scroll to Gallery when the Home page is loaded
      setNavigateToProject(false); // Reset the flag
    }
  }, [location.pathname, navigateToGallery]); // Run when location or the flag changes

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" >
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left-aligned profile icon */}
          <NavLink className="navbar-brand" to="/">
            <img src={profileIcon} alt="Profile" className="rounded-circle" width="50" />
          </NavLink>

          {/* Center-aligned navbar links */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav" style={{ padding: '10px 20px' }}>
              <li className="nav-item">
                {/* Handle Home click */}
                <NavLink
                  className={({ isActive }) =>
                    (isActive || location.pathname === '/home') ? 'nav-link active' : 'nav-link'
                  }
                  to="/"
                  style={{ cursor: 'pointer' }}
                >
                  <button className="btn nav-link" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
                  {location.pathname === '/' || location.pathname === '/home'? (
                    <img src={home} className="home-active"  alt="Home" />
                  ) : (
                    <img src={homeoutline} className="home-inactive" alt="Home" />
                  )}
                </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/about" style={{color: 'black'}}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/experience" style={{color: 'black'}}>
                  Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={handleProjectClick} style={{ cursor: 'pointer' , color: 'black'}}>
                  Project
                </button>
              </li>
              <li className="nav-item">
  <button
    className={`btn nav-link ${location.pathname === '/aestheticshot' || location.pathname === '/ProfessionalShot' || location.pathname === '/PassionShot' ? 'active' : ''}`}
    onClick={handleGalleryClick}
    style={{ cursor: 'pointer', color: 'black' }}
  >
    Gallery
  </button>
</li>

            </ul>
          </div>

          {/* Right-side Contact button */}
          <NavLink className="butn" to="/contact">
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content" ref={homeRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aestheticshot" element={<AestheticShot />} />
          <Route path="/professionalshot" element={<ProfessionalShot/>} />
          <Route path="/passionshot" element={<PassionShot/>} />
        	
	  {/* Catch-all route to handle unknown routes */}
          <Route path="*" element={<NotFound />} />


        </Routes>
      </div>

      {/* Footer (visible on all pages) */}
  <footer className="footer">
  <div className="footer-container text-center">
    <img src={flower} className="flower-image" /><p>@2024 Moksha Jaiswal. All Rights Reserved.</p><img src={flower} className="flower-image" />
    
  </div>
</footer>

    </div>
  );
};

export default App;