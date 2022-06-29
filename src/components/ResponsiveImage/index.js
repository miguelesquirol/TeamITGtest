import React from 'react';

const ResponsiveImage = ({ mobileImage, desktopImage, alt }) => {
  return (
    <div className="vehicle-img">
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileImage} />
        <source media="(min-width: 768px)" srcSet={desktopImage} />
        <img src={desktopImage} alt={alt} />
      </picture>
    </div>

  );
};

export default ResponsiveImage;
