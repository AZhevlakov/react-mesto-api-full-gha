import React, { memo, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormValidation } from '../utils/useFormValidation';

const AddPlacePopup = memo(({ isOpen, onClose, onAddPlace }) => {
  const { values, errors, isValid, handleChange, onLoadForm, errorClassName } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: values.cardName,
      link: values.cardLink
    });
  }

  useEffect(() => {
    onLoadForm();
  }, [onLoadForm, isOpen]);

  return (
    <PopupWithForm
      name="photo-card-add"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="form__field">
        <input
          value={values.cardName ?? ''}
          onChange={handleChange}
          id="cardName"
          name="cardName"
          className="form__input form__input_el_card-name"
          type="text"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className={errorClassName('cardName')}>
          {errors['cardName']}
        </span>
      </label>
      <label className="form__field">
        <input
          value={values.cardLink ?? ''}
          onChange={handleChange}
          id="cardLink"
          name="cardLink"
          className="form__input form__input_el_card-link"
          type="url"
          placeholder="Ссылка на картинку"
          required
        />
        <span className={errorClassName('cardLink')}>
          {errors['cardLink']}
        </span>
      </label>
    </PopupWithForm>
  );
});

export default AddPlacePopup;
