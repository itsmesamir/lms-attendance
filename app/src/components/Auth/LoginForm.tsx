import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../services/authService";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Must be 6 characters or more")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        login(values)
          .then((response) => {
            alert("Login successful");
            // Store the access token in localStorage or state management
            localStorage.setItem("token", response.data.accessToken);
          })
          .catch((error) => {
            alert("Login failed");
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      <Form>
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
