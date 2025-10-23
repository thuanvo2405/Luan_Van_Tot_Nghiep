import { useState } from "react";
import { Button } from "./ui/button";
import AuthModal from "./authModal/AuthModal";
import { useAuth } from "@/context/AuthProvider";

export default function Header() {
  const [modalOpen, setModalOpen] = useState<null | "login" | "register">(null);
  const { user, logout, isLoggedIn } = useAuth();

  return (
    <>
      <header className="flex items-center justify-center h-[76px] bg-blue-500">
        <div className="flex w-[1284px] h-full items-center justify-between">
          <div className="text-3xl text-white font-bold">Eventify</div>

          <div className="flex items-center gap-3">
            <div className="bg-white p-2 flex items-center rounded-2xl gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search-icon lucide-search"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
              <input
                className="p-1 outline-none w-60"
                type="text"
                placeholder="Bạn tìm gì hôm nay ..."
              />
              <Button>Tìm kiếm</Button>
            </div>
            <Button className="bg-transparent border border-white">
              Tạo sự kiện
            </Button>
          </div>

          <div className="flex gap-2">
            {isLoggedIn() ? (
              <>
                <Button>Vé của tui</Button>
                <Button onClick={logout}>Đăng xuất</Button>
              </>
            ) : (
              <>
                <Button>Vé của tui</Button>
                <Button onClick={() => setModalOpen("register")}>
                  Đăng ký
                </Button>
                <Button onClick={() => setModalOpen("login")}>Đăng nhập</Button>
              </>
            )}
          </div>
        </div>
      </header>

      {modalOpen && (
        <AuthModal initialTab={modalOpen} onClose={() => setModalOpen(null)} />
      )}
    </>
  );
}
