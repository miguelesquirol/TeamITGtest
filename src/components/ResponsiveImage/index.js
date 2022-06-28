import React from 'react';

const ResponsiveImage = (props) => {
        return (
                <div className="vehicle-img">
                        <picture>
                                <source media="(max-width: 767px)" srcSet={props.mobileImage} />
                                <source media="(min-width: 768px)" srcSet={props.desktopImage} />
                                <img src="elva-800w.jpg" alt={props.alt} />
                        </picture>
                </div>


        );
}

export default ResponsiveImage;
