import React from "react";
import { withFormik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

const Login = ({ touched, errors }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/friends" />;
  }

  return (
    <Form className="login-form">
      <div className="form-group">
        <label className="label">Username</label>
        <Field
          className="input"
          name="username"
          type="text"
          autoComplete="off"
        />
        <p>{touched.username && errors.username}</p>
      </div>
      <div className="form-group">
        <label className="label">Password</label>
        <Field
          className="input"
          name="password"
          type="password"
          autoComplete="off"
        />
        <p>{touched.password && errors.password}</p>
      </div>
      <button>Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .min(4)
      .required()
  }),

  handleSubmit(values, formikBag) {
    const url = "http://localhost:5000/api/login";
    axios
      .post(url, values)
      .then(response => {
        console.log("handleSubmit response.data", response.data);
        localStorage.setItem("token", response.data.payload);
        formikBag.props.history.push("/friends");
      })
      .catch(error => {
        console.log(error);
      });
  }
})(Login);
