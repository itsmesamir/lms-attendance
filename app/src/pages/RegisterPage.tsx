import React from "react";
import { Link } from "react-router-dom";

import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register a new account
          </h2>
        </div>
        <RegisterForm />
        <Link
          to="/login"
          className="block text-sm text-gray-600 hover:text-gray-900 mt-2 text-right"
        >
          <span className="hover:bg-gray-200 px-2 py-1 rounded-md">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
