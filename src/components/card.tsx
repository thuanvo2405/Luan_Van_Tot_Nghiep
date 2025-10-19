import Link from "next/link";
import Image from "next/image";
import img from "public/image.png";

export default function Card() {
  return (
    <Link href="/" className="rounded-xl overflow-hidden border-amber-950">
      <Image src={img} alt="" />
      <div className="p-3 border rounded-b-xl">
        <p className="font-semibold line-clamp-2 my-1">
          [CAT&MOUSE] CA SĨ HƯƠNG TRÀM - ĐÊM BALLAD TAN CHẢY TRÁI TIM
        </p>
        <p className="text-blue-600 my-2 font-semibold">Từ 499.999đ</p>
        <div className="flex items-center gap-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-calendar-icon lucide-calendar"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>
          31 tháng 10, 2025
        </div>
      </div>
    </Link>
  );
}
