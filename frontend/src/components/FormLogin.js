import { useFormValidation } from '../utils/useFormValidation';

const FormLogin = ({ formName, formTitle, buttonSubmitText, onFormSubmit, children }) => {
  const { values, errors, isValid, handleChange, errorClassName } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.password || !values.email) {
      return;
    }
    onFormSubmit(values.password, values.email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form form_signin"
      name={formName}
      noValidate
    >
      <fieldset className="form__set">
        <legend className="form__heading form__heading_center">
          {formTitle}
        </legend>
        <label className="form__field">
          <input
            value={values.email ?? ''}
            onChange={handleChange}
            className="form__input form__input_signin form__input_el_email"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <span className={errorClassName('email')}>
            {errors['email']}
          </span>
        </label>
        <label className="form__field">
          <input
            value={values.password ?? ''}
            onChange={handleChange}
            className="form__input form__input_signin form__input_el_password"
            type="password"
            id="password"
            name="password"
            placeholder="Пароль"
            required
          />
          <span className={errorClassName('password')}>
            {errors['password']}
          </span>
        </label>
        <button
          className={`btn form__submit form__submit_signin ${isValid ? '' : 'btn_inactive'}`}
          type="submit"
        >
          {buttonSubmitText}
        </button>

        {children}

      </fieldset>
    </form>
  )
}

export default FormLogin;
