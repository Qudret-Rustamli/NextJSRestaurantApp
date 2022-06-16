import React from 'react';
import * as Yup from 'yup';
import FormContainer from '../../components/Form/FormContainer';
import FormControl from '../../components/Form/FormControl';

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
    <div>
      <FormContainer initialValues={initialValues} validationSchema={validationSchema}>
        <FormControl
          control="input"
          type="text"
          label="Username"
          name="username"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="password"
          label="Password"
          name="password"
          variant="outlined"
        />
      </FormContainer>
    </div>
  );
};

export default LoginForm;
