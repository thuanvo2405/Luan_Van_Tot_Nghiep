import Link from "next/link";
import Image from "next/image";
import img from "public/image.png";

export default function Card() {
  return (
    <Link
      href="/"
      className="border rounded-xl overflow-hidden border-amber-950"
    >
      <Image src={img} alt="" />
      <p>Ten su kien</p>
      <p className="text-blue-600">Từ 499.999đ</p>
      <div className="flex">
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
          className="lucide lucide-calendar-icon lucide-calendar"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
        </svg>
        31 tháng 10, 2025
      </div>
    </Link>
  );
}
