import React, { useContext, memo } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Card = memo(({ card, onCardClick, onCardLike, onCardDelete }) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = (card.owner._id || card.owner) === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `btn photo-card__like ${isLiked && 'photo-card__like_active'}`
  );

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="photo-card">
      <img
        onClick={handleClick}
        className="btn photo-card__image"
        src={card.link}
        alt={card.name}
      />
      {
        isOwn
        &&
        <button
          className="btn photo-card__delete"
          onClick={handleDeleteClick}
          type="button"
          aria-label="Удалить фотокарточку"
        />
      }
      <div className="photo-card__description">
        <h2 className="photo-card__name">
          {card.name}
        </h2>
        <div className="photo-card__likes">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type="button"
            aria-label="Поставить сердечко"
          />
          <span className="photo-card__number-of-likes">
            {card.likes.length}
          </span>
        </div>
      </div>
    </li>
  );
});

export default Card;
