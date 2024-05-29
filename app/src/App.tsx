import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RegisterForm from "./components/Auth/RegisterForm";
import LoginForm from "./components/Auth/LoginForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;
