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
      <div className="bg-[#f5f5f5] hidden  rounded-md lg:flex items-center px-2 py-1">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-[244px] h-[38px] px-2 outline-none bg-[#f5f5f5]" 
        />

        <button className="w-10 h-10 text-black/70 px-2 hover:bg-black/10 rounded-full active:bg-black/15">
          <FaSearch className="mx-auto text-primary " size={20} />
        </button>
      </div>
      <Link href={currentUser ? '/cart' :'/sign-in'} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10 active:bg-black/15">
        <FaShoppingCart className={`${pathname === '/cart'? 'text-red-500': ''} pb-1 transition mx-auto`} size={22} />
      </Link>
      {
        currentUser ? (
        <button className="relative w-10 h-10 rounded-full  hover:bg-black/10 active:bg-black/5" onClick={() => setDropdown(!dropdown)}>
            <FaUser size={20} className="mx-auto"/>
            {dropdown && (
            <>
                {/* Overlay để đóng dropdown khi click ra ngoài */}
                <div
                className="fixed inset-0 z-10"
                onClick={() => setDropdown(false)}
                />
                {/* Dropdown menu */}
                <div className="w-screen lg:w-[180px] bg-white shadow-lg absolute top-[50px] lg:top-[45px] right-0 rounded-lg p-2 z-20 transition">
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
        </button>
        ) : 
        null
      }
    </section>
  );
}
