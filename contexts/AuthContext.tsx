import { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import api from "../services/Api";
import Router from "next/router";

type AuthContextType = {
  isAuthenticated: boolean;
  user?: any;
  login: (email: string, password: string) => void;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: (email, password) => {},
  logout: () => {},
  loading: true,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = Cookies.get("token");
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = await api.get("users/me");
        if (user) setUser(user);
      }
      setLoading(false);
    })();
  }, []);

  const login = async (email, password) => {
    const { data: token } = await api.post("sign-in", { email, password });
    if (token.access_token) {
      Cookies.set("token", token.access_token);
      api.defaults.headers.Authorization = `Bearer ${token.access_token}`;
      const { data: user } = await api.get("users/me");
      setUser(user);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    Router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
