import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../hooks/useAuth";

const RegisterForm = () => {
  const { register } = useAuth();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      mobilePhone: "",
      address: "",
      birthday: "",
      joinDate: "",
      country: "",
      timezone: "",
      workingShift: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      gender: Yup.string().required("Gender is required"),
      mobilePhone: Yup.string().required("Mobile Phone is required"),
      address: Yup.string().required("Address is required"),
      birthday: Yup.date().required("Birthday is required"),
      joinDate: Yup.date().required("Join Date is required"),
      country: Yup.string().required("Country is required"),
      timezone: Yup.string().required("Timezone is required"),
      workingShift: Yup.string().required("Working Shift is required"),
    }),
    onSubmit: async (values) => {
      await register(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-500 text-sm">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {formik.touched.gender && formik.errors.gender ? (
            <div className="text-red-500 text-sm">{formik.errors.gender}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="mobilePhone"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Phone
          </label>
          <input
            id="mobilePhone"
            name="mobilePhone"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobilePhone}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.mobilePhone && formik.errors.mobilePhone ? (
            <div className="text-red-500 text-sm">
              {formik.errors.mobilePhone}
            </div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="birthday"
            className="block text-sm font-medium text-gray-700"
          >
            Birthday
          </label>
          <input
            id="birthday"
            name="birthday"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthday}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.birthday && formik.errors.birthday ? (
            <div className="text-red-500 text-sm">{formik.errors.birthday}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="joinDate"
            className="block text-sm font-medium text-gray-700"
          >
            Join Date
          </label>
          <input
            id="joinDate"
            name="joinDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.joinDate}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.joinDate && formik.errors.joinDate ? (
            <div className="text-red-500 text-sm">{formik.errors.joinDate}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.country && formik.errors.country ? (
            <div className="text-red-500 text-sm">{formik.errors.country}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="timezone"
            className="block text-sm font-medium text-gray-700"
          >
            Timezone
          </label>
          <input
            id="timezone"
            name="timezone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.timezone}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.timezone && formik.errors.timezone ? (
            <div className="text-red-500 text-sm">{formik.errors.timezone}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="workingShift"
            className="block text-sm font-medium text-gray-700"
          >
            Working Shift
          </label>
          <input
            id="workingShift"
            name="workingShift"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.workingShift}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.workingShift && formik.errors.workingShift ? (
            <div className="text-red-500 text-sm">
              {formik.errors.workingShift}
            </div>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        className="w-full mt-8 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
