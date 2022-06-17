import React from "react";
import * as Yup from "yup";
import FormContainer from "../../../components/Form/FormContainer";
import FormControl from "../../../components/Form/FormControl";

import style from "./style.module.scss";

const ProfileForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
  });

  return (
    <>
      <h2 className={style.title}>Profile</h2>
      <FormContainer
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <div className={style.form_control}>
          <FormControl
            control="input"
            type="text"
            label="First Name"
            name="firstName"
            variant="outlined"
          />
        </div>
        <div className={style.form_control}>
          <FormControl
            control="input"
            type="text"
            label="Last Name"
            name="lastName"
            variant="outlined"
          />
        </div>
        <div className={style.form_control}>
          <FormControl
            control="input"
            type="email"
            label="Email address"
            name="email"
            variant="outlined"
          />
        </div>
        <div className={style.form_control}>
          <FormControl
            control="input"
            type="phone"
            label="Phone Number"
            name="phone"
            variant="outlined"
          />
        </div>
        <div className={style.form_control}>
          <FormControl
            control="input"
            type="text"
            label="City"
            name="city"
            variant="outlined"
          />
        </div>
        <div className={style.form_control}>
          <FormControl
            control="input"
            type="text"
            label="Address"
            name="address"
            variant="outlined"
          />
        </div>
      </FormContainer>
    </>
  );
};

export default ProfileForm;
