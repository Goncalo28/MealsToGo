import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useState } from "react";
import { loginRequest, registerRequest } from "./authService";

export const AuthContext = createContext({});

const auth = getAuth();

export const AuthContextProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>();
  const [error, setError] = useState<string | null>(null);

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await loginRequest(email, password);
      setUser(result);
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      setError(err);
    }
  };

  const onRegister = async (
    email: string,
    password: string,
    repeatedPassword: string
  ) => {
    setIsLoading(true);
    try {
      if (password !== repeatedPassword) {
        setError("Passwords do not match");
        return;
      }
      const result = await registerRequest(email, password);
      setUser(result);
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      setError(err);
    }
  };

  const onLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
