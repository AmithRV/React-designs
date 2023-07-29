import React, { useEffect, useState } from 'react';
import '../styles/login.css';
import { useFormik } from 'formik';
import { getFormErrorMessage, isFormFieldValid } from '../helpers/util';
import ToastMessage from '../components/Toast/ToastMessage';
import validateUser from '../dataserver/server.js';

function Login() {
  const [userDetails, setUserDetails] = useState({});
  const [showToast, setShowToast] = useState({
    show: false,
    header: '',
    message: '',
    type: '',
  });

  const validate = (data) => {
    const errors = {};

    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = 'email is invalid';
    }

    if (!data.password) {
      errors.password = 'password is required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: () => {
      const data = validateUser(formik.values.email, formik.values.password);
      console.log('data : ', data);
      if (data.status === 'success') {
        setUserDetails(data);
        setShowToast({
          show: true,
          header: 'Sign In',
          message: 'Loged In Successfully.',
          type: 'success',
        });
      } else if (data.status === 'failed') {
        setShowToast({
          show: true,
          header: 'Sign In',
          message: data.messge,
          type: 'danger',
        });
      }
    },
  });

  useEffect(() => {
    if (userDetails) {
      console.log('userDetails : ', userDetails);
    }
  }, [userDetails]);

  return (
    <>
      <ToastMessage
        show={showToast.show}
        header={showToast.header}
        message={showToast.message}
        type={showToast.type}
        onClose={() => {
          setShowToast({
            show: false,
          });
        }}
      />

      <div className="login-wrap">
        <div className="login">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik?.values?.email}
                style={
                  isFormFieldValid(formik, 'email')
                    ? { border: '1px solid red' }
                    : {}
                }
              />
              &nbsp;&nbsp;{getFormErrorMessage(formik, 'email')}
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik?.values?.password}
                style={
                  isFormFieldValid(formik, 'password')
                    ? { border: '1px solid red' }
                    : {}
                }
              />
              &nbsp;&nbsp;{getFormErrorMessage(formik, 'password')}
            </div>
            <br />

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                remember me
              </label>
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
