import { Button } from '@mui/material';
import { Formik, Form } from 'formik';
import style from './formContainer.module.scss';
import SendIcon from '@mui/icons-material/Send';
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
    const collectionRef = collection(db, collectionName);
    addDoc(collectionRef, values);
  };
  //addDoc(collectionRef, values);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => (
        <Form className={style.formContainer}>
          {children}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
            }}>
            <Button
              style={{ width: '50%' }}
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              color="success"
              className={style.formContainer__btn}
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
