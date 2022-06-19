import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import style from "./formContainer.module.scss";
import SendIcon from "@mui/icons-material/Send";

const FormContainer = ({ initialValues, validationSchema, children }) => {
  const onSubmit = (values) => {
    console.log("Values =>", values);
    alert("Values",(values));
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
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            color="success"
            className={style.formContainer__btn}
            disabled={!formik.isValid || formik.isSubmitting}
          >
            SEND
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
