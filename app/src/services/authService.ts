import axios from "axios";
import { URL } from "@/constant/constant";

export const loginAPI = async (email: string, password: string) => {
  const res = await axios.post(`${URL}login`, { email, matKhau: password });
  return res.data.data;
};

export const signupAPI = async (
  email: string,
  username: string,
  password: string
) => {
  const res = await axios.post(
    `${URL}signup`,
    {
      email,
      tennguoidung: username,
      matkhau: password,
    },
    { validateStatus: () => true }
  );
  return res;
};
