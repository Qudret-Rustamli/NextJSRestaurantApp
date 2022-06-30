import { Button, IconButton } from "@mui/material";
import { Formik, Form } from "formik";
import style from "./formContainer.module.scss";
import DoneAllIcon from "@mui/icons-material/DoneAll";
//react-toastify
import { toast } from "react-toastify";
import React from "react";

const FormContainer = ({ initialValues, validationSchema, children }) => {
  const onSubmit = (values) => {
    console.log(values, "formContainer");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className={style.formContainer}>
          {children}
          <div className={style.btnContainer}>
            <Button
              type="submit"
              variant="contained"
              startIcon={<DoneAllIcon />}
              color="success"
              className={style.btnContainer__btn}
              disabled={!formik.isValid || formik.isSubmitting}
            >
              SEND
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
