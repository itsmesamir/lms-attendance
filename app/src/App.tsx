import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import PrivateWrapper from "./PrivateWrapper";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import { AuthProvider } from "./context/AuthContext";
import LeaveRequestTable from "./pages/LeaveRequest/LeaveRequestTable";
import Employee from "./pages/employee";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
            <Route path="/employee" element={<Employee />} />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
