import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import PrivateWrapper from "./PrivateWrapper";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import { AuthProvider } from "./context/AuthContext";
import LeaveRequestTable from "./pages/LeaveRequest/LeaveRequestTable";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateWrapper>
                <DashboardPage />
              </PrivateWrapper>
            }
          />
          <Route path="/leave" element={<LeaveRequestTable />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
