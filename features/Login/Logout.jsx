import React from 'react';
import * as Yup from 'yup';
import FormContainer from '../../components/Form/FormContainer';
import FormControl from '../../components/Form/FormControl';

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
    <div>
      <FormContainer initialValues={initialValues} validationSchema={validationSchema}>
        <FormControl
          control="input"
          type="text"
          label="Full name"
          name="fullName"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="text"
          label="User Name"
          name="username"
          variant="outlined"
        />
        <FormControl control="input" type="email" label="Email" name="email" variant="outlined" />
        <FormControl
          control="input"
          type="text"
          label="Password"
          name="password"
          variant="outlined"
        />
      </FormContainer>
    </div>
  );
};

export default LogoutForm;
