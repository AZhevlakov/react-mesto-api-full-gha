import React, { memo, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormValidation } from '../utils/useFormValidation';

const EditAvatarPopup = memo(({ isOpen, onClose, onUpdateAvatar }) => {
  const { values, errors, isValid, handleChange, onLoadForm, errorClassName } = useFormValidation();

  useEffect(() => {
    onLoadForm();
  }, [onLoadForm, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: values.avatar
    });
  }

  return (
    <PopupWithForm
      name="avatar-edit"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="form__field">
        <input
          value={values.avatar ?? ''}
          onChange={handleChange}
          id="avatar"
          name="avatar"
          className="form__input form__input_el_avatar-link"
          type="url"
          placeholder="Ссылка на аватар"
          required
        />
        <span className={errorClassName('avatar')}>
          {errors['avatar']}
        </span>
      </label>
    </PopupWithForm>
  );
});

export default EditAvatarPopup;
