import React from 'react';
import ResponsiveImage from '../ResponsiveImage';
const vehicleCard = (props) => {
        return <div className="vehicle-card">
                <ResponsiveImage desktopImage={props.bundle.media[0].url} mobileImage={props.bundle.media[1].url} alt={props.bundle.media[0].name} />
                <div class="vehicle-body">
                        <h1 className="vehicle-card__title">{props.bundle.id}</h1>
                        <p className="vehicle-card__price">From <span>{props.bundle.price}</span></p>

                        <p className="vehicle-card__description"> {props.bundle.description}</p>
                </div>


        </div>;
}

export default vehicleCard;
