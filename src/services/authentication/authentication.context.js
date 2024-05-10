import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest } from "./authentication.service";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [error, setError] = useState(null);

  const login = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(`Login Error: ${e}`);
      });
  };

  return (
    <AuthContext.Provider value={{ login, user, isAuthenticated, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("Context used out of scope");
  return auth;
};

export { AuthContextProvider, useAuth };
