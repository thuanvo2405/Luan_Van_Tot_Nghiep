import React, { createContext, useState, useEffect } from "react";
import { loginAPI, signupAPI } from "@/services/authService";
import axiosInstance from "@/services/axiosInstance";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export interface AuthContextProps {
  user: { manguoidung: number } | null;
  token: {
    accessToken: string;
    refreshToken: string;
  } | null;
  signup: (
    email: string,
    username: string,
    password: string
  ) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoggedIn: () => boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState<{
    accessToken: string;
    refreshToken: string;
  } | null>(null);

  const [user, setUser] = useState<{ manguoidung: number } | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedTokens = localStorage.getItem("tokens");

    if (savedUser && savedTokens) {
      const parsedUser = JSON.parse(savedUser);
      const parsedTokens = JSON.parse(savedTokens);

      setUser(parsedUser);
      setToken(parsedTokens);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${parsedTokens.accessToken}`;
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${parsedTokens.accessToken}`;
    }

    setIsReady(true);
  }, []);

  const signup = async (
    email: string,
    username: string,
    password: string
  ): Promise<boolean> => {
    try {
      const res = await signupAPI(email, username, password);
      if (res.status === 200 || res.data.success) {
        toast.success(
          "🎉 Đăng ký thành công! Vui lòng kiểm tra email để xác thực tài khoản."
        );
        return true;
      } else {
        toast.error(res.data.message || "Có lỗi xảy ra, vui lòng thử lại sau.");
        return false;
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Đăng ký thất bại.");
      return false;
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await loginAPI(email, password);

      if (res && res.tokens && res.user) {
        localStorage.setItem("tokens", JSON.stringify(res.tokens));
        localStorage.setItem("user", JSON.stringify(res.user));

        setToken(res.tokens);
        setUser(res.user);

        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.tokens.accessToken}`;
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.tokens.accessToken}`;

        toast.success("Đăng nhập thành công!");
        return true;
      } else {
        toast.error("Phản hồi đăng nhập không hợp lệ!");
        return false;
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Sai email hoặc mật khẩu");
      return false;
    }
  };

  const isLoggedIn = () => !!user && !!token;

  const logout = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);

    delete axios.defaults.headers.common["Authorization"];
    delete axiosInstance.defaults.headers.common["Authorization"];

    toast.success("Đã đăng xuất!");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, signup, user, token, isLoggedIn }}
    >
      {isReady ? children : null}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => React.useContext(AuthContext);
