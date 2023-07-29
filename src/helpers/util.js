const isFormFieldValid = (formik, name) =>
  !!(formik.touched[name] && formik.errors[name]);

const getFormErrorMessage = (formik, name) =>
  isFormFieldValid(formik, name) && (
    <span className="invalid-message">
      <sup>*</sup>
      {formik.errors[name]}
    </span>
  );

export { isFormFieldValid, getFormErrorMessage };
