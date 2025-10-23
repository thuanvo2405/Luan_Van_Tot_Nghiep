import express from "express";
import {
  signup,
  login,
  getRefreshToken,
  deleteRefreshToken,
  resendVerificationEmail,
  verifyEmail,
} from "../controllers/authController.js";
import { authenticateToken } from "../middleware/authorization.js";
import checkRole from "../middleware/verifyRole.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/refresh_token", getRefreshToken);
router.delete("/refresh_token", deleteRefreshToken);

// Email verification
router.post("/resend-verification", resendVerificationEmail);
router.get("/verify-email", verifyEmail);

router.use(authenticateToken);

router.get("/test", checkRole(["khach_hang"]), (req, res) => {
  res.send("hello 123");
});

export default router;
