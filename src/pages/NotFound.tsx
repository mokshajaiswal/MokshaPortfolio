import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect to home after 2 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 0);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting you to the Home page...</p>
    </div>
  );
};

export default NotFound;
