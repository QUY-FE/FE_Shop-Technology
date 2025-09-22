'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaShoppingCart,FaSearch,FaUser,FaShoppingBag } from "react-icons/fa";
import { IoMdSettings,IoMdExit } from "react-icons/io";


const userMenu = [
    {
        id: 1,
        text: 'Setting',
        icon: <IoMdSettings />,
        href: '/settings'
    },
    {
        id: 2,
        text: 'My Orders',
        icon: <FaShoppingBag />,
        href: '/MyOrders'
    },
    {
        id: 3,
        text: 'Setting',
        icon: <IoMdSettings />,
        href: '/settings'
    },
    {
        id: 4,
        text: 'Logout',
        icon: <IoMdExit />,
        href: '/settings'
    },
]

export default function Action({currentUser = false}: {currentUser?: boolean}) {
    const [dropdown, setDropdown] = useState<boolean>(false);
    const pathname = usePathname();

  return (
    <section className="w-3/12 lg:w-5/12 h-full flex items-center justify-end gap-6">
      <div className="bg-[#f5f5f5] hidden  rounded-md lg:flex items-center px-2">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-[244px] h-[38px] px-2 outline-none"
        />

        <span className="text-black/70 px-2">
          <FaSearch />
        </span>
      </div>
      <Link href={currentUser ? '/my-cart' :'/sign-in'} className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-black/10">
        <FaShoppingCart className={`${pathname === '/my-cart'? 'text-red-500': ''} pb-1 transition`} size={28} />
      </Link>
      {
        currentUser ? (
        <span className="block text-black text-center leading-[40px] relative w-[40px]  " onClick={() => setDropdown(!dropdown)}>
            <FaUser size={22}/>
            {dropdown && (
            <>
                {/* Overlay để đóng dropdown khi click ra ngoài */}
                <div
                className="fixed inset-0 z-10"
                onClick={() => setDropdown(false)}
                />
                {/* Dropdown menu */}
                <div className="w-screen lg:w-[180px] bg-gray-50 shadow-md absolute top-[50px] lg:top-[30px] right-0 rounded-md p-2 z-20">
                <ul>
                    {userMenu.map(item => (
                    <li
                        className="p-2 text-lg font-bold cursor-pointer"
                        key={item.id}
                    >
                        <Link href={item.href} className="w-full h-full flex items-center gap-4">
                            <span>{item.icon}</span>
                            <p>{item.text}</p>
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>

            </>
            )}
        </span>
        ) : 
        null
      }
    </section>
  );
}
