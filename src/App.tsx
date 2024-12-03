import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Contact from './pages/Contact';
import profileIcon from './assets/Icons/profile.png';
import home from './assets/Icons/home.png';
import homeoutline from './assets/Icons/homeoutline.png';
import flower from './assets/Icons/flower.png';
import './App.css'; // Custom CSS
import AestheticShot from './pages/AestheticShot';
import ProfessionalShot from './pages/ProfessionalShot';
import PassionShot from './pages/PassionShot';
import Video from './pages/Video';
import 'bootstrap/dist/css/bootstrap.min.css';
import menuicon from './assets/Icons/menuicon.png';

import NotFound from './pages/NotFound';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null); // Ref for the Home page
  const navigate = useNavigate(); // useNavigate for programmatic navigation
  const location = useLocation(); // useLocation to track the current page
  const [navigateToGallery, setNavigateToGallery] = useState(false); // Track when Gallery needs to scroll
  const [navigateToProject, setNavigateToProject] = useState(false); // Track when Gallery needs to scroll
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true); // Track navbar collapse state

  // Function to toggle the navbar collapse
  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  // Function to close the navbar
  const closeNavbar = () => {
    setIsNavbarCollapsed(true);
  };

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
      setNavigateToGallery(true);
      navigate('/');
    } else {
      scrollToGallery();
    }
    closeNavbar();
  };

  // Handle Project link click
  const handleProjectClick = () => {
    if (location.pathname !== '/') {
      setNavigateToProject(true);
      navigate('/');
    } else {
      scrollToProject();
    }
    closeNavbar();
  };

  // Handle Home link click
  const handleHomeClick = () => {
    if (location.pathname === '/' || location.pathname === '/home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    closeNavbar();
  };

  // useEffect to handle scrolling to Gallery or Project after navigating to Home
  useEffect(() => {
    if (navigateToGallery && location.pathname === '/') {
      scrollToGallery();
      setNavigateToGallery(false);
    }
    if (navigateToProject && location.pathname === '/') {
      scrollToProject();
      setNavigateToProject(false);
    }
  }, [location.pathname, navigateToGallery, navigateToProject]);

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container d-flex justify-content-between align-items-center">
          <NavLink className="navbar-brand profile-container d-none d-md-block" to="/">
            <img src={profileIcon} alt="Profile" className="nav-profile-icon" />
          </NavLink>

          {/* Toggler button for smaller screens */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={!isNavbarCollapsed}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
           <img src={menuicon} className="navbar-toggler-icon" alt="Toggle Navigation" style={{ width: '55px', height: '55px' }} />
          </button>

          {/* Collapsible navbar links */}
          <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarNav">
           <ul className="navbar-nav" style={{ padding: '10px 20px' }}>
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={handleHomeClick}>
                  <button className="btn nav-link" style={{ cursor: 'pointer' }}>
                    {location.pathname === '/' || location.pathname === '/home' ? (
                      <img src={home} className="home-active" alt="Home" />
                    ) : (
                      <img src={homeoutline} className="home-inactive" alt="Home" />
                    )}
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" style={{ color: 'black' }} onClick={closeNavbar}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/experience" style={{ color: 'black' }} onClick={closeNavbar}>
                  Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={handleProjectClick} style={{ cursor: 'pointer', color: 'black' }}>
                  Project
                </button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={handleGalleryClick} style={{ cursor: 'pointer', color: 'black' }}>
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          <NavLink className="butn" to="/contact" onClick={closeNavbar}>
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
          <Route path="/professionalshot" element={<ProfessionalShot />} />
          <Route path="/passionshot" element={<PassionShot />} />
          <Route path="/video" element={<Video />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container text-center">
          <img src={flower} className="flower-image" />
          <p>@2024 Moksha Jaiswal. All Rights Reserved.</p>
          <img src={flower} className="flower-image" />
        </div>
      </footer>
    </div>
  );
};

export default App;
