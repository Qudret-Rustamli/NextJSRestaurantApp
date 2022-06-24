import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import style from "./formContainer.module.scss";
import SendIcon from "@mui/icons-material/Send";

const FormContainer = ({ initialValues, validationSchema, children }) => {
  const onSubmit = (values) => {
    console.log("Values =>", values);
    alert("Values", values);
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
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              style={{ width: "50%" }}
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              color="success"
              className={style.formContainer__btn}
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
