import React from 'react';
import useOutsideClick from '../../tools/clickOutisde';

import './style.scss';

const Modal = ({ modal, handleClose }) => {
  const ref = React.useRef(null);

  useOutsideClick(ref, () => {
    handleClose();
  });

  return (
    <div className="modal-wraper">
      <div className="modal" ref={ref}>

        <div className="image-bg" style={{ backgroundImage: `url(${modal.media[0].url})` }} />
        <p>
          Model Year:
          {' '}
          <strong>
            {modal.modelYear}
          </strong>
        </p>
        <p>
          Number of Passangers:
          {' '}
          <strong>{modal.meta.passengers}</strong>
        </p>
        <p>
          Drive Train:
          {' '}
          <strong>
            {modal.meta.drivetrain.map((x) => ` "${x}" `)}
          </strong>
        </p>
        <p>
          Body Styles Available:
          {' '}
          <strong>
            {modal.meta.bodystyles.map((x) => ` "${x}" `)}
          </strong>
        </p>
        <h2>{modal.meta.emissions.template.replace('$value', modal.meta.emissions.value)}</h2>

        <button type="button" className="close" onClick={(event) => handleClose(event)}><span className="sr-only ">Close</span></button>

      </div>
    </div>

  );
};

export default Modal;
