import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import pool from "../config/db.js";
import { logInService, signUpService } from "../models/userModel.js";
import { jwtTokens } from "../utils/jwtHelper.js";
import handleResponse from "../utils/handleResponse.js";
import sendVerificationEmail from "../utils/sendEmail.js";

const saltRound = 10;
dotenv.config();

export const signup = async (req, res, next) => {
  const { tenNguoiDung, email, matKhau } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(matKhau, 10);
    const user = await signUpService(tenNguoiDung, email, hashedPassword);
    console.log(user);
    const verifyToken = jwt.sign(
      { userId: user.manguoidung },
      process.env.EMAIL_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    await sendVerificationEmail(email, verifyToken);

    res.status(200).json({
      message:
        "User created successfully. Please check your email to verify your account.",
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, matKhau } = req.body;

    const user = await logInService(email);

    if (!user) {
      return res.status(401).json({ error: "Email is not correct!" });
    }

    const validPassword = await bcrypt.compare(matKhau, user.matkhau);
    if (!validPassword) {
      return res.status(401).json({ error: "Password is not correct!" });
    }

    if (!user.isverified) {
      return res.status(403).json({
        error: "Email chưa xác thực. Vui lòng kiểm tra email.",
      });
    }

    const tokens = jwtTokens(user);

    res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
    const { manguoidung, vaitro } = user;

    handleResponse(res, 200, "Login successful", {
      user: { manguoidung, vaitro },
      tokens,
    });
  } catch (error) {
    next(error);
  }
};

export const getRefreshToken = async (req, res, next) => {
  try {
    console.log(">>> req.cookies:", req.cookies);
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) {
      return res.status(401).json({ error: "null refresh token" });
    }
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (error, user) => {
        if (error) {
          return res.status(401).json({ error: error.message });
        }
        let tokens = jwtTokens(user);
        res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
        res.json(tokens);
      }
    );
  } catch (error) {
    next(error);
  }
};

export const deleteRefreshToken = async (req, res, next) => {
  try {
    res.clearCookie("refresh_token");
    return res.status(200).json({ message: "refresh token deleted" });
  } catch (error) {
    next(error);
  }
};

export const verifyEmail = async (req, res, next) => {
  const { token } = req.query;

  try {
    const payload = jwt.verify(token, process.env.EMAIL_TOKEN_SECRET);
    console.log("Payload:", payload);

    await pool.query(
      "UPDATE nguoi_dung SET isverified = true WHERE manguoidung = $1",
      [payload.userId]
    );

    res.send("Email verified successfully. You can now login!");
  } catch (error) {
    res
      .status(400)
      .send(
        "Invalid or expired token. Please request a new verification email."
      );
  }
};

export const resendVerificationEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await logInService(email);

    if (!user) return res.status(404).json({ error: "User not found" });
    if (user.isverified)
      return res.status(400).json({ error: "Email already verified" });

    const verifyToken = jwt.sign(
      { userId: user.manguoidung },
      process.env.EMAIL_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    await sendVerificationEmail(email, verifyToken);

    res
      .status(200)
      .json({ message: "Verification email resent. Please check your inbox." });
  } catch (error) {
    next(error);
  }
};
