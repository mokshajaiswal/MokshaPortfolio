// ProfessionalShot.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProfessionalShot.css'; // Create a CSS file for styling

const ProfessionalShot: React.FC = () => {
  return (
    <div className="professional-shot-page">
      <h1>Aesthetic Shot</h1>
      <p>Here are all the details about the Professional Shot.</p>

      {/* Add more content about the shot */}
      
      {/* Link to go back to Home page */}
      <Link to="/" className="back-to-home2">Back to Home</Link>
    </div>
  );
};

export default ProfessionalShot;
