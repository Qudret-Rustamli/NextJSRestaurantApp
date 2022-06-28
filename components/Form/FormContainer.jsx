import { Button, IconButton } from '@mui/material';
import { Formik, Form } from 'formik';
import style from './formContainer.module.scss';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CancelIcon from '@mui/icons-material/Cancel';
//firebase
import { db } from '../../firebase/firebase-config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
//react-toastify
import { toast } from 'react-toastify';
//import redux
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { addUser } from '../../Redux/UserSlice';
const FormContainer = ({ initialValues, validationSchema, children, collectionName }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  // alert(JSON.stringify(users));
  React.useEffect(() => {
    //get data from firebase with async/await and snapshot
    const getData = async () => {
      const collectionRef = collection(db, 'registration');
      const snapshot = await getDocs(collectionRef);
      const data = snapshot.docs.map((doc) => doc.data());
      dispatch(addUser(data));
    };
    getData();
  }, []);
  const onSubmit = (values) => {
    //add data to firebase
    /* const collectionRef = collection(db, collectionName);
    addDoc(collectionRef, values); */
    console.log(values, 'formContainer');
  };
  //addDoc(collectionRef, values);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
              disabled={!formik.isValid || formik.isSubmitting}>
              SEND
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
