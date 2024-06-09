import React, { createContext, useState, useContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  loginHandler: () => void;
  logoutHandler: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthProvider = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const logoutHandler = () => {
    setIsAuthenticated(false);
  };

  const loginHandler = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loginHandler,
        logoutHandler,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
