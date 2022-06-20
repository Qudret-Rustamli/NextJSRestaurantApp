import React from 'react';
import { Field } from 'formik';
import style from './style.module.scss';
import { TextField } from '@mui/material';

const Input = ({ name, ...rest }) => {
  return (
    <div className={style.containerInput}>
      <Field name={name}>
        {({ field, form }) => (
          <TextField
            id={name}
            {...field}
            {...rest}
            error={form.errors[name] && form.touched[name]}
            fullWidth
            helperText={form.errors[name] && form.touched[name] && form.errors[name]}
          />
        )}
      </Field>
    </div>
  );
};

export default Input;
