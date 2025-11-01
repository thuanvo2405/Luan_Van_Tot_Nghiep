import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const mainTabs = [
  { id: "all", label: "Tất cả" },
  { id: "success", label: "Thành công" },
  { id: "processing", label: "Đang xử lý" },
];

const subTabs = [
  { id: "upcoming", label: "Sắp diễn ra" },
  { id: "ended", label: "Đã kết thúc" },
];

export default function MyTicketPage() {
  const [mainTab, setMainTab] = useState("all");
  const [subTab, setSubTab] = useState("upcoming");

  return (
    <div className="min-h-[calc(100vh-120px)] bg-gray-50 text-gray-800 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold mb-8">Vé của tôi</h1>

        <div className="flex flex-wrap gap-3 border-b border-gray-200 pb-4">
          {mainTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setMainTab(tab.id)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all border ${
                mainTab === tab.id
                  ? "bg-green-500 text-white border-green-500 shadow-sm"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-6 border-b border-gray-200 pb-2">
          {subTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSubTab(tab.id)}
              className={`text-sm font-medium pb-2 border-b-2 transition-all ${
                subTab === tab.id
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Card className="mt-16 shadow-md border-gray-200">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="no tickets"
              className="w-36 h-36 mb-6 opacity-90"
            />
            <p className="text-gray-500 text-lg mb-6">Bạn chưa mua vé nào</p>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-5 text-base font-semibold rounded-lg"
              onClick={() => (window.location.href = "/")}
            >
              Mua vé ngay
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
