import { useState } from "react";
import { Button } from "../ui/button";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface AuthModalProps {
  initialTab: "login" | "register";
  onClose: () => void;
}

export default function AuthModal({ initialTab, onClose }: AuthModalProps) {
  const [activeForm, setActiveForm] = useState<"login" | "register">(
    initialTab
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-96 p-8 relative shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
        <Button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-lg font-bold cursor-pointer py-6"
        >
          ✕
        </Button>

        {activeForm === "login" ? (
          <LoginForm
            switchForm={() => setActiveForm("register")}
            onClose={onClose}
          />
        ) : (
          <RegisterForm
            switchForm={() => setActiveForm("login")}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}
