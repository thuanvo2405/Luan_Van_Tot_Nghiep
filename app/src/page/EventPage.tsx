import Card from "@/components/card";
import TicketInfo from "@/components/ticket-info";
import { Button } from "@/components/ui/button";
import TicketDescription from "@/components/ui/ticket-description";

export default function EventPage() {
  return (
    <div className="w-[1284px] mx-auto mt-4">
      <div className="flex bg-gray-900 text-white rounded-3xl overflow-hidden mx-auto shadow-xl">
        <div className="w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold leading-snug">
              LULULOLA THE MEN <br />
              <span className="text-gray-300">CÓ THƯƠNG THÊM AI ĐƯỢC ĐÂU</span>
            </h2>

            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-2 text-green-400">
                📅 17:30 - 19:30, 01 Tháng 11, 2025
              </p>
              <p className="text-gray-300">+ 1 ngày khác</p>

              <p className="flex items-start gap-2 text-gray-200">
                📍
                <span>
                  Lululola, Đầu đèo Prenn, Số 32/2 Đường 3/4, Thành Phố Đà Lạt,
                  Tỉnh Lâm Đồng
                </span>
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-700 pt-6">
            <p className="text-lg">
              Giá từ
              <span className="text-green-400 font-semibold text-xl">
                550.000đ
              </span>
            </p>
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition">
              Chọn lịch diễn
            </button>
          </div>
        </div>

        <div
          className="w-1/2 h-80 md:h-auto bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://placehold.co/800x600?text=Poster+Show')",
          }}
        ></div>
      </div>
      <section>
        <TicketDescription />
        <TicketInfo />
        <div className="shadow-xl border mt-10 rounded-2xl p-4">
          <p className="text-xl font-semibold text-center border-b-1 py-3">
            Ban tổ chức
          </p>
          <div className="flex gap-3 mt-2">
            <img
              src="https://placehold.co/800x600?text=Poster+Show"
              alt=""
              className="w-50 object-cover"
            />
            <p>Giới thiệu về tổ chức</p>
          </div>
        </div>
      </section>
      <footer className="shadow-xl border mt-10 rounded-2xl p-4">
        <p className="text-xl font-semibold text-center py-3">
          Có thể bạn thích
        </p>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
        <Button className="mx-auto block  mt-2">Xem thêm</Button>
      </footer>
    </div>
  );
}
