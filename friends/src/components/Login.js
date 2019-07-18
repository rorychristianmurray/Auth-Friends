import React from "react";
import { withFormik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

const Login = ({ touched, errors }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/profile" />;
  }

  return (
    <Form className="login-form">
      <div className="form-group">
        <label className="label">Email</label>
        <Field className="input" name="email" type="email" autoComplete="off" />
        {/* <p>{touched.email && errors.email}</p> */}
      </div>
      <div className="form-group">
        <label className="label">Password</label>
        <Field
          className="input"
          name="password"
          type="password"
          autoComplete="off"
        />
        {/* <p>{touched.password && errors.password}</p> */}
      </div>
      <button>Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),

  handleSubmit(values, formikBag) {
    const url = "http://localhost:5000/api/login";
    axios
      .post(url, values)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        formikBag.props.history.push("/profile");
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }
})(Login);
