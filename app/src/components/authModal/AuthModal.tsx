import { useState } from "react";
import { Button } from "../ui/button";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ResetPasswordForm from "./ResetPasswordForm";

interface AuthModalProps {
  initialTab?: "login" | "register";
  onClose: () => void;
}

export default function AuthModal({
  initialTab = "login",
  onClose,
}: AuthModalProps) {
  const [activeForm, setActiveForm] = useState<
    "login" | "register" | "resetPassword"
  >(initialTab);

  const switchToLogin = () => setActiveForm("login");
  const switchToRegister = () => setActiveForm("register");
  const switchToResetPassword = () => setActiveForm("resetPassword");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-96 p-8 relative shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300">
        <Button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-lg font-bold cursor-pointer"
        >
          ✕
        </Button>

        {activeForm === "login" && (
          <LoginForm
            onClose={onClose}
            switchToRegister={switchToRegister}
            switchToResetPassword={switchToResetPassword}
          />
        )}

        {activeForm === "register" && (
          <RegisterForm onClose={onClose} switchToLogin={switchToLogin} />
        )}

        {activeForm === "resetPassword" && (
          <ResetPasswordForm onClose={onClose} switchToLogin={switchToLogin} />
        )}
      </div>
    </div>
  );
}
