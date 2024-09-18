// HeroSection.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/home.css'; // Assuming you have a CSS file for styling

const HeroSection = ({ title, subtitle, buttonText, buttonLink ,image}) => {
  return (
    <div className='hero__main__con'>
      <div className="hero__con">
       

       <div className="hero__inner__con">
         <h1 className="hero__mainT">
           {title}
         </h1>
         <p className='hero__subT'>{subtitle}</p>
         <a href={buttonLink} className='create_btn'>{buttonText}</a>
       </div>
       <div className="hero__con__img">
          <div className="book_img_large">
            <img src={image} alt="" />
          </div>
         
       </div>
     </div>
    </div>
    
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default HeroSection;
