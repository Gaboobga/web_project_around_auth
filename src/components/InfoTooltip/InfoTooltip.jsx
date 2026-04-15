// src/components/InfoTooltip/InfoTooltip.jsx

import React from 'react';

const InfoTooltip = ({ isOpen, onClose, isSuccess }) => {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container popup__container_tooltip'>
        <button
          className='popup__close-button'
          type='button'
          onClick={onClose}
        />
        <div
          className={`tooltip__icon ${
            isSuccess ? 'tooltip__icon_success' : 'tooltip__icon_fail'
          }`}
        />
        <p className='tooltip__text'>
          {isSuccess
            ? '¡Correcto! Ya estás registrado.'
            : 'Uy, algo salió mal. Por favor, inténtalo de nuevo.'}
        </p>
      </div>
    </div>
  );
};

export default InfoTooltip;