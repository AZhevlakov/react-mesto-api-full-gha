import { Link } from 'react-router-dom';
import FormLogin from "./FormLogin";

const Register = ({ onRegister }) => {

  return (
    <FormLogin
      formName="form-register"
      formTitle="Регистрация"
      buttonSubmitText="Зарегистрироваться"
      onFormSubmit={onRegister}
    >
      <div className="form__signin">
        <p className="form__is-register">Уже зарегистрированы?&nbsp;</p>
        <Link to="/signin" className="btn form__signin-link">Войти</Link>
      </div>
    </FormLogin>
  )
}

export default Register;
