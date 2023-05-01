import FormLogin from "./FormLogin";

const Login = ({ onLogin }) => {

  return (
    <FormLogin
      formName="form-signin"
      formTitle="Вход"
      buttonSubmitText="Войти"
      onFormSubmit={onLogin}
    />
  )
}

export default Login;
