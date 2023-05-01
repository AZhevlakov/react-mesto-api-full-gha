import { useState, useCallback } from "react";

export function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const { name, value, validationMessage, form } = evt.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(form.checkValidity());
  };

  const onLoadForm = useCallback(
    (initialValues = {}, initialErrors = {}, initialIsValid = false) => {
      setValues(initialValues);
      setErrors(initialErrors);
      setIsValid(initialIsValid);
    }, [setValues, setErrors, setIsValid]
  );

  const errorClassName = (name) => `form__input-error ${errors[name] ? 'form__input-error_active' : ''}`;

  return { values, errors, isValid, handleChange, onLoadForm, errorClassName }
}
