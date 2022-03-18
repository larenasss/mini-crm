import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';

export function useLoginForm() {
  const { handleSubmit, isSubmitting } = useForm();

  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    'email',
    yup.string().trim().required('Введите email').email('Некорректный email')
  );

  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
    'password',
    yup.string().trim().required('Введите пароль').min(6, 'Не меньше 6 символов')
  );

  const onSubmit = handleSubmit(fields => {
    console.log(fields);
  });

  return {
    email,
    eError,
    eBlur,
    password,
    pError,
    pBlur,
    onSubmit,
    isSubmitting
  };
}
