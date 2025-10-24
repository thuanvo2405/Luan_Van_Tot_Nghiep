export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-[1280px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700">
        {/* Cột 1: Logo + mô tả */}
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-3">Eventify</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Nền tảng mua vé sự kiện hàng đầu giúp bạn dễ dàng tìm kiếm, đặt vé
            và tham gia những sự kiện yêu thích một cách nhanh chóng và an toàn.
          </p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Liên kết nhanh
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/"
                className="hover:text-green-600 transition-colors duration-200"
              >
                Trang chủ
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="hover:text-green-600 transition-colors duration-200"
              >
                Sự kiện
              </a>
            </li>
            <li>
              <a
                href="/my-tickets"
                className="hover:text-green-600 transition-colors duration-200"
              >
                Vé của tôi
              </a>
            </li>
            <li>
              <a
                href="/create-event"
                className="hover:text-green-600 transition-colors duration-200"
              >
                Tạo sự kiện
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 3: Hỗ trợ */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Hỗ trợ</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/help"
                className="hover:text-green-600 transition-colors duration-200"
              >
                Trung tâm trợ giúp
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-green-600 transition-colors duration-200"
              >
                Điều khoản & Chính sách
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-green-600 transition-colors duration-200"
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 4: Mạng xã hội */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Kết nối với chúng tôi
          </h3>
          <div className="flex gap-4">
            {[
              {
                href: "#",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z" />
                  </svg>
                ),
              },
              {
                href: "#",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.265.058-1.645.069-4.849.069s-3.584-.011-4.849-.069c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.337-2.633 1.312-3.608C4.52 2.57 5.787 2.295 7.153 2.233 8.418 2.175 8.798 2.163 12 2.163zm0 1.838c-3.155 0-3.517.012-4.747.069-1.013.047-1.562.213-1.927.36-.468.181-.803.396-1.155.748-.352.352-.567.687-.748 1.155-.147.365-.313.914-.36 1.927-.057 1.23-.069 1.592-.069 4.747s.012 3.517.069 4.747c.047 1.013.213 1.562.36 1.927.181.468.396.803.748 1.155.352.352.687.567 1.155.748.365.147.914.313 1.927.36 1.23.057 1.592.069 4.747.069s3.517-.012 4.747-.069c1.013-.047 1.562-.213 1.927-.36.468-.181.803-.396 1.155-.748.352-.352.567-.687.748-1.155.147-.365.313-.914.36-1.927.057-1.23.069-1.592.069-4.747s-.012-3.517-.069-4.747c-.047-1.013-.213-1.562-.36-1.927a3.422 3.422 0 0 0-.748-1.155 3.422 3.422 0 0 0-1.155-.748c-.365-.147-.914-.313-1.927-.36-1.23-.057-1.592-.069-4.747-.069zm0 3.743a5.091 5.091 0 1 1 0 10.182 5.091 5.091 0 0 1 0-10.182zm0 8.4a3.309 3.309 0 1 0 0-6.618 3.309 3.309 0 0 0 0 6.618zm6.406-9.845a1.188 1.188 0 1 1 0-2.376 1.188 1.188 0 0 1 0 2.376z" />
                  </svg>
                ),
              },
              {
                href: "#",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.924 2.206-4.924 4.924 0 .386.043.762.127 1.124C7.728 8.84 4.1 6.88 1.671 3.905a4.903 4.903 0 0 0-.666 2.475c0 1.708.87 3.216 2.19 4.099a4.903 4.903 0 0 1-2.229-.616v.06c0 2.385 1.693 4.374 3.946 4.826a4.936 4.936 0 0 1-2.224.084c.626 1.956 2.444 3.379 4.6 3.421A9.868 9.868 0 0 1 0 19.54 13.936 13.936 0 0 0 7.548 21.5c9.142 0 14.307-7.721 14.307-14.414 0-.22-.005-.439-.014-.657A10.243 10.243 0 0 0 24 4.557z" />
                  </svg>
                ),
              },
            ].map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                className="text-gray-500 hover:text-green-600 transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Eventify</span>. All rights reserved.
      </div>
    </footer>
  );
}
