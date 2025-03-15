import React from 'react';

const SocialLink = ({ icon, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img 
        src={icon} 
        alt="social-icon" 
        className="w-8 h-8 cursor-pointer transition-transform duration-300 hover:scale-110" 
      />
    </a>
  );
};

export default SocialLink;
