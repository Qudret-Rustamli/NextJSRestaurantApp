import React from 'react';
import * as Yup from 'yup';
import FormContainer from '../../components/Form/FormContainer';
import FormControl from '../../components/Form/FormControl';
import style from './style.module.scss';

const LogoutForm = () => {
  const initialValues = {
    fullName: '',
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <FormContainer initialValues={initialValues} validationSchema={validationSchema}>
      <div className={style.form_control}>
        <FormControl
          control="input"
          type="text"
          label="Full name"
          name="fullName"
          variant="outlined"
        />
      </div>
      <div className={style.form_control}>
        <FormControl
          control="input"
          type="text"
          label="User Name"
          name="username"
          variant="outlined"
        />
      </div>
      <div className={style.form_control}>
        <FormControl control="input" type="email" label="Email" name="email" variant="outlined" />
      </div>
      <div className={style.form_control}>
        <FormControl control="input" type="email" label="Email" name="email" variant="outlined" />
      </div>

      <div className={style.form_control}>
        <FormControl
          control="input"
          type="text"
          label="Password"
          name="password"
          variant="outlined"
        />
      </div>
    </FormContainer>
  );
};

export default LogoutForm;
