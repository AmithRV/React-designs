import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import '../styles/signup.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getFormErrorMessage, isFormFieldValid } from '../helpers/util';

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState({
    show: false,
    header: '',
    message: '',
    type: '',
  });

  const validate = (data) => {
    const errors = {};

    if (!data.name) {
      errors.name = 'name is required';
    }

    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = 'email is invalid';
    }

    if (!data.phone) {
      errors.phone = 'phone is required';
    }

    if (!data.password) {
      errors.password = 'password is required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
    validate,
    onSubmit: () => {
      setLoading(true);
    },
  });

  useEffect(() => {
    console.clear();
    console.table(formik.values);
  }, [formik.values, formik.errors]);

  return (
    <div className="signup-wrap">
      <div className="signup">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={formik.handleChange}
                value={formik?.values?.name}
                style={
                  isFormFieldValid(formik, 'name')
                    ? { border: '1px solid red' }
                    : {}
                }
              />
              {getFormErrorMessage(formik, 'name')}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                name="email"
                onChange={formik.handleChange}
                value={formik?.values?.email}
                style={
                  isFormFieldValid(formik, 'email')
                    ? { border: '1px solid red' }
                    : {}
                }
              />
              {getFormErrorMessage(formik, 'email')}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Phone</Form.Label>
              <PhoneInput
                country={'us'}
                name="phone"
                onChange={(e) => {
                  formik.setFieldValue('phone', e);
                }}
                value={formik?.values?.phone}
                style={
                  isFormFieldValid(formik, 'phone')
                    ? { border: '1px solid red' }
                    : {}
                }
                enableSearch
              />
              {getFormErrorMessage(formik, 'phone')}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik?.values?.password}
                style={
                  isFormFieldValid(formik, 'password')
                    ? { border: '1px solid red' }
                    : {}
                }
              />
              {getFormErrorMessage(formik, 'password')}
              <div className="password-strength">
                <div className="section">
{
(formik?.values?.password?.matches('/[A-Z]/'))?(<img src="./svg/check.svg" alt="" width="20" height="20"/>):(<img src="./svg/alert-circle.svg" alt="" width="20" height="20"/>)
}
                  <span>uppercase</span>
                </div>
                <div className="section">
                  <img src="./svg/alert-circle.svg" alt="" width="20" height="20"/>
                  <span>number</span>
                </div>
                <div className="section">
                  <img src="./svg/check.svg" alt="" width="20" height="20"/>
                  <span>atleast 8 characters</span>
                </div>
              </div>
            </Form.Group>
          </Row>

          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
