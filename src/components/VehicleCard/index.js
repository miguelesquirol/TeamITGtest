import React from 'react';
import ResponsiveImage from '../ResponsiveImage';

const vehicleCard = ({ bundle }) => (
  <div className="vehicle-card">
    <ResponsiveImage desktopImage={bundle.media[0].url} mobileImage={bundle.media[1].url} alt={bundle.media[0].name} />
    <div className="vehicle-body">
      <h1 className="vehicle-card__title">{bundle.id}</h1>
      <p className="vehicle-card__price">
        From
        <span>{bundle.price}</span>
      </p>

      <p className="vehicle-card__description">
        {bundle.description}
      </p>
    </div>
  </div>
);

export default vehicleCard;
