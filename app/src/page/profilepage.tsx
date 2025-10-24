import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="bg-white min-h-[calc(100vh-100px)] px-10 py-10 rounded-2xl shadow-sm">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-800 border-b pb-4">
        Thông tin tài khoản
      </h1>

      {/* Avatar + description */}
      <div className="flex flex-col items-center mt-8">
        <div className="relative">
          <img
            src="https://api.dicebear.com/9.x/initials/svg?seed=Thuận+Võ"
            alt="avatar"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
          <Button
            size="icon"
            variant="secondary"
            className="absolute bottom-0 right-0 rounded-full p-1 shadow bg-white hover:bg-gray-100"
          >
            <Camera className="w-4 h-4 text-gray-600" />
          </Button>
        </div>

        <p className="text-sm text-gray-500 mt-4 text-center max-w-md">
          Cung cấp thông tin chính xác để hỗ trợ bạn trong quá trình mua vé hoặc
          khi cần xác thực vé.
        </p>
      </div>

      {/* Form */}
      <form className="max-w-xl mx-auto mt-10 space-y-6">
        {/* Họ và tên */}
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-gray-700 font-medium">
            Họ và tên
          </Label>
          <Input
            id="name"
            placeholder="Nhập họ và tên"
            defaultValue="Thuận Võ"
            className="h-11"
          />
        </div>

        {/* Số điện thoại */}
        <div className="grid gap-2">
          <Label htmlFor="phone" className="text-gray-700 font-medium">
            Số điện thoại
          </Label>
          <div className="flex gap-2">
            <select
              id="countryCode"
              className="border rounded-md px-3 text-sm text-gray-700 bg-white w-24"
              defaultValue="+84"
            >
              <option value="+84">+84</option>
              <option value="+1">+1</option>
              <option value="+81">+81</option>
            </select>
            <Input
              id="phone"
              placeholder="Nhập số điện thoại"
              className="h-11"
            />
          </div>
        </div>

        {/* Email */}
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-gray-700 font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            defaultValue="vothuan2405003@gmail.com"
            disabled
            className="bg-gray-100 h-11"
          />
        </div>

        {/* Nút hoàn thành */}
        <div className="pt-6">
          <Button
            type="submit"
            className="w-full h-11 bg-green-500 hover:bg-green-600 text-white text-base rounded-lg"
          >
            Hoàn thành
          </Button>
        </div>
      </form>
    </div>
  );
}
