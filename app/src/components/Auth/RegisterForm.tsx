import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../services/authService";

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "", firstName: "", lastName: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Must be 6 characters or more")
          .required("Required"),
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        register(values)
          .then((response) => {
            alert("Registration successful");
          })
          .catch((error) => {
            alert("Registration failed");
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      <Form>
        <br /> <br />
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        {/* line break here below */}
        <br /> <br />
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <br /> <br />
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />
        <br /> <br />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
