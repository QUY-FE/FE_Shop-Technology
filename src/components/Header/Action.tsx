"use client";
import Link from "next/link";
import { useState } from "react";
// 1. Import thêm FaTimes
import {
  FaShoppingCart,
  FaSearch,
  FaShoppingBag,
  FaRegUserCircle,
  FaTimes,
} from "react-icons/fa";
import { IoMdSettings, IoMdExit } from "react-icons/io";

const userMenu = [
  {
    id: 1,
    text: "Setting",
    icon: <IoMdSettings />,
    href: "/settings",
  },
  {
    id: 2,
    text: "My Orders",
    icon: <FaShoppingBag />,
    href: "/MyOrders",
  },
];

// 2. Thêm dữ liệu mẫu cho đề xuất tìm kiếm
const suggestions = [
  { id: 1, name: "Sản phẩm gợi ý A" },
  { id: 2, name: "Sản phẩm gợi ý B" },
  { id: 3, name: "Tìm kiếm hot C" },
];

export default function Action({ currentUser }: { currentUser?: boolean }) {
  const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <section className="w-3/12 lg:w-5/12 h-full flex items-center justify-end gap-6">
      {/* === PHẦN CHỈNH SỬA TÌM KIẾM === */}
      {/* 3. Bọc div tìm kiếm bằng 'relative group' và điều chỉnh visibility */}
      <div className="relative hidden lg:block group">
        {/* Div chứa input và button tìm kiếm */}
        <div className="bg-[#f5f5f5] rounded-md flex items-center px-2 py-1">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-[244px] h-[38px] px-2 outline-none bg-[#f5f5f5]"
            // Không cần onFocus/onBlur, group-focus-within sẽ xử lý
          />

          <button className="w-10 h-10 text-black/70 px-2 hover:bg-black/10 rounded-full active:bg-black/15">
            <FaSearch className="mx-auto text-primary " size={20} />
          </button>
        </div>

        {/* 4. Box đề xuất tìm kiếm */}
        {/* - absolute: Định vị tuyệt đối so với 'relative group'
          - top-full: Ngay bên dưới 'relative group'
          - z-20: Nằm trên các nội dung khác (dưới dropdown user nếu cần)
          - hidden: Mặc định ẩn
          - group-focus-within:block: Khi bất kỳ phần tử con nào trong 'group' được focus (như input), 
            box này sẽ chuyển thành 'block' (hiện ra)
        */}
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-1 z-20 hidden group-focus-within:block">
          <ul className="py-1">
            {suggestions.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between p-3 hover:bg-gray-100 cursor-pointer"
              >
                {/* Tên sản phẩm và tag 'Hot' */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-800">{item.name}</span>
                  <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                    Hot
                  </span>
                </div>

                {/* Icon 'x' */}
                <button className="p-1 rounded-full hover:bg-gray-200">
                  <FaTimes
                    className="text-gray-400 hover:text-gray-700"
                    size={14}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* === KẾT THÚC PHẦN CHỈNH SỬA === */}

      <Link
        href={currentUser ? "/cart" : "/sign-in"}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10 active:bg-black/15"
      >
        <FaShoppingCart className="pb-1 transition mx-auto" size={25} />
      </Link>
      {currentUser ? (
        <Link
          href="/profile"
          className="flex items-center justify-center w-10 h-10 rounded-full  hover:bg-black/10 active:bg-black/5"
        >
          <FaRegUserCircle size={28} className="mx-auto" />
        </Link>
      ) : null}
    </section>
  );
}
