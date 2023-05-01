const PopupWithForm = ({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  children,
  isValid
}) => {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <form
          onSubmit={onSubmit}
          className="form"
          name={`form-${name}`}
          noValidate
        >
          <fieldset className="form__set">
            <legend className="form__heading">
              {title}
            </legend>

            {children}

            <button
              className={`btn form__submit ${isValid ? '' : 'btn_inactive'}`}
              type="submit">
              {buttonText}
            </button>
          </fieldset>
        </form>
        <button
          onClick={onClose}
          className="btn popup__close"
          type="button"
          aria-label="Закрыть форму"
        />
      </div>
    </div>
  );
};

export default PopupWithForm;
