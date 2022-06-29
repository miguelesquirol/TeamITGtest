import React from 'react';
import ResponsiveImage from '../ResponsiveImage';
import Modal from '../Modal';
import './style.scss';

const vehicleCard = ({ bundle }) => {
  const [modal, setModal] = React.useState({});
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function handleClick(vehicledata) {
    setModal(vehicledata);
    setIsModalOpen(true);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <div className="vehicle-card">

      {isModalOpen ? <Modal modal={modal} handleClose={handleClose} /> : ''}

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
        <button className="vehicle-card__readmore" type="button" onClick={() => handleClick(bundle)}>Read More</button>
      </div>
    </div>

  );
};

export default vehicleCard;
