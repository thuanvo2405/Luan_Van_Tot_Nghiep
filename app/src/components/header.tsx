import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-center h-[76px] bg-blue-500 ">
      <div className="flex w-[1284px] h-full items-center justify-between">
        <div className="text-3xl text-white">Eventify</div>
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 flex items-center rounded-2xl gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
            <Button className=" ">Tìm kiếm</Button>
          </div>
          <Button className="bg-transparent border border-white">
            Tạo sự kiện
          </Button>
        </div>

        <div className="flex gap-2">
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-ticket-icon lucide-ticket"
            >
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
              <path d="M13 5v2" />
              <path d="M13 17v2" />
              <path d="M13 11v2" />
            </svg>
            Vé của tui
          </Button>
          <Button>Đăng ký</Button>
          <Button>Đăng nhập</Button>
        </div>
      </div>
    </header>
  );
}
