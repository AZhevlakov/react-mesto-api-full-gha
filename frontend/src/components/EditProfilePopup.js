import React, { useContext, useEffect, memo } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useFormValidation } from '../utils/useFormValidation';

const EditProfilePopup = memo(({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, onLoadForm, errorClassName } = useFormValidation();

  useEffect(() => {
    if (currentUser) {
      onLoadForm(currentUser, {}, (currentUser.name && currentUser.about) ? true : false);
    }
  }, [onLoadForm, currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: values.name,
      about: values.about
    });
  }

  return (
    <PopupWithForm
      name="profile-edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="form__field">
        <input
          value={values.name ?? ''}
          onChange={handleChange}
          id="name"
          name="name"
          className="form__input form__input_el_name"
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className={errorClassName('name')}>
          {errors['name']}
        </span>
      </label>
      <label className="form__field">
        <input
          value={values.about ?? ''}
          onChange={handleChange}
          id="about"
          name="about"
          className="form__input form__input_el_job"
          type="text"
          placeholder="Занятие"
          minLength="2"
          maxLength="200"
          required
        />
        <span className={errorClassName('about')}>
          {errors['about']}
        </span>
      </label>
    </PopupWithForm>
  );
});

export default EditProfilePopup;
