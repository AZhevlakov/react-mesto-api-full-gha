import React, { memo } from 'react';
import tooltipSuccess from '../images/success-icon.svg';
import tooltipFailure from '../images/failure-icon.svg';

const InfoTooltip = memo(({ isOpen, onClose, isSuccess }) => {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <div className="info-tooltip">
          <div
            className="info-tooltip__image"
            style={{ backgroundImage: `url(${isSuccess ? tooltipSuccess : tooltipFailure})` }}
          />
          <span className="info-tooltip__description">
            {isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
          </span>
        </div>
        <button
          onClick={onClose}
          className="btn popup__close"
          type="button"
          aria-label="Закрыть форму"
        />
      </div>
    </div>
  );
});

export default InfoTooltip;
