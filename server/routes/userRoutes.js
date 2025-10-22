import express from "express";
import {
  signup,
  login,
  getRefreshToken,
  deleteRefreshToken,
  resendVerificationEmail,
  verifyEmail,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/refresh_token", getRefreshToken);
router.delete("/refresh_token", deleteRefreshToken);

// Email verification
router.post("/resend-verification", resendVerificationEmail);
router.get("/verify-email", verifyEmail);

export default router;
