import React, { useState, useEffect } from 'react';

const ScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to track scroll position and toggle visibility
  const toggleVisibility = () => {
    if (window.pageYOffset > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,       // Set scroll position to top (y-axis 0)
      behavior: 'smooth', // Enable smooth scroll animation
    });
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className='d-flex justify-content-center align-items-center'
      onClick={scrollToTop}  // Call scrollToTop when button is clicked
      style={{
        position: 'fixed',
        zIndex:"9999",
        backgroundColor: 'rgba(2, 71, 134, 1)',
        height: '50px',
        width: '50px',
        bottom: '20px',
        right: '25px',
        cursor: 'pointer',
        borderRadius: '50%',
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
        transition: 'transform 0.3s ease-in-out',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <ion-icon name='arrow-up-circle-outline' style={{ color: '#fff', fontSize: '32px' }}></ion-icon>
    </div>
  );
};

export default ScrollBtn;
