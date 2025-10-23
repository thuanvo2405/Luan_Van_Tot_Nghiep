import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/services/axiosInstance";

export default function VerifyEmailPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setStatus("error");
      setMessage("Thiếu token xác thực.");
      return;
    }

    axiosInstance
      .get(`/verify-email?token=${token}`)
      .then((res) => {
        if (res.status === 200) {
          setStatus("success");
          setMessage(res.data?.message || "Xác thực email thành công!");
        } else {
          setStatus("error");
          setMessage(res.data?.message || "Xác thực thất bại!");
        }
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
        setMessage(
          "Xác thực thất bại! Liên kết có thể đã hết hạn hoặc không hợp lệ."
        );
      });
  }, []);

  if (status === "loading")
    return <div className="text-center mt-20">Đang xác thực...</div>;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-2xl p-8 shadow-md text-center">
        {status === "success" ? (
          <>
            <h1 className="text-green-500 text-3xl font-bold mb-2">
              ✅ Xác thực thành công!
            </h1>
            <p className="text-gray-600 mb-4">{message}</p>
            <Button onClick={() => navigate("/")}>Về trang chủ</Button>
          </>
        ) : (
          <>
            <h1 className="text-red-500 text-3xl font-bold mb-2">
              ❌ Xác thực thất bại!
            </h1>
            <p className="text-gray-600 mb-4">{message}</p>
            <Button onClick={() => window.location.reload()}>Thử lại</Button>
          </>
        )}
      </div>
    </div>
  );
}
