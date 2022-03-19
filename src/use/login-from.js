import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export function useLoginForm() {
  const store = useStore();
  const router = useRouter();

  const { handleSubmit, isSubmitting } = useForm();

  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    'email',
    yup.string().trim().required('Введите email').email('Некорректный email')
  );
  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
    'password',
    yup.string().trim().required('Введите пароль').min(6, 'Не меньше 6 символов')
  );

  const onSubmit = handleSubmit(async values => {
    console.log(values);
    await store.dispatch('auth/login', values);
    router.push('/');
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
