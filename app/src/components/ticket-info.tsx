import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface Ticket {
  name: string;
  price: number;
}

interface Session {
  id: number;
  time: string;
  tickets: Ticket[];
}

export default function TicketInfo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const sessions: Session[] = [
    {
      id: 1,
      time: "17:30 - 19:30, 01 Tháng 11, 2025",
      tickets: [
        { name: "NHÉ NHEM", price: 550000 },
        { name: "CHẬP CHOẠNG", price: 750000 },
        { name: "CHẠNG VẠNG", price: 1100000 },
        { name: "VIP - CHIỀU TÀ", price: 1360000 },
        { name: "VVIP - HOÀNG HÔN", price: 1600000 },
      ],
    },
    {
      id: 2,
      time: "17:30 - 20:00, 01 Tháng 11, 2025",
      tickets: [
        { name: "NHÉ NHEM", price: 550000 },
        { name: "CHẬP CHOẠNG", price: 750000 },
        { name: "CHẠNG VẠNG", price: 1100000 },
        { name: "VIP - CHIỀU TÀ", price: 1360000 },
        { name: "VVIP - HOÀNG HÔN", price: 1600000 },
      ],
    },
  ];

  const toggleSession = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const formatPrice = (price: number) =>
    price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

  return (
    <section className="bg-[#222] text-white rounded-2xl shadow-xl overflow-hidden mt-10">
      <p className="text-lg font-semibold bg-[#1b1b1b] px-4 py-3 border-b border-gray-700">
        Thông tin vé
      </p>

      {sessions.map((session, index) => (
        <div key={session.id} className="border-b border-gray-700">
          {/* Header */}
          <div
            className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-[#2a2a2a] transition"
            onClick={() => toggleSession(index)}
          >
            <div className="flex items-center gap-2">
              {activeIndex === index ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
              <span className="font-medium">{session.time}</span>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md">
              Mua vé ngay
            </button>
          </div>

          {/* Ticket list */}
          {activeIndex === index && (
            <div className="bg-[#2b2b2b] divide-y divide-gray-700">
              {session.tickets.map((ticket, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center px-6 py-3 text-gray-200 hover:bg-[#333] transition"
                >
                  <span className="font-semibold">{ticket.name}</span>
                  <span className="text-green-500 font-medium">
                    {formatPrice(ticket.price)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
