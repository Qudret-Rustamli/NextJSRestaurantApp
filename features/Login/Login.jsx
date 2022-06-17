import React from 'react';
import * as Yup from 'yup';
import FormContainer from '../../components/Form/FormContainer';
import FormControl from '../../components/Form/FormControl';
import style from './style.module.scss';
const LoginForm = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });
  return (
    <FormContainer initialValues={initialValues} validationSchema={validationSchema}>
     <div className={style.form_control}>
        <FormControl
          control="input"
          type="text"
          label="Username"
          name="username"
          variant="outlined"
        />
      </div>
      <div className={style.form_control}>
        <FormControl
          control="input"
          type="password"
          label="Password"
          name="password"
          variant="outlined"
        />
      </div>
    </FormContainer>
  );
};

export default LoginForm;
