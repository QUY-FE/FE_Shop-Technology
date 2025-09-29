"use client";
import { useState } from "react";
import { toast } from 'react-toastify';

import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare,FaPhoneAlt } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import { GoPaperAirplane } from "react-icons/go";
import { MdMail } from "react-icons/md";
import Image from "next/image";

import qrAppURL from "#/assets/images/QR.jpg";
import nameAppURL from "#/assets/images/name.jpg";
import logoAppURL from "#/assets/images/logo.jpg";
import Link from "next/link";

export default function Footer() {
    const [email, setEmail] = useState<string>('');

    const igLink = '';
    const fbLink = '';
    const ttLink = '';
    const xLink = '';


    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        console.log({email});
        setEmail('');
        toast.success("Bạn đã nhận được voucher giảm 15%", {
            position: "top-right",
        });
        

    }
  return (
    <footer className="w-full min-h-[300px] bg-black text-white  border-t-[2.5px] border-[#b3b3b3]">
      <div className="max-w-[1200px] h-full mx-auto pt-10 flex">
        <ul className="w-1/5 h-[300px] px-3 text-sm">
          <h1 className="py-2 text-2xl font-semibold">Theo dõi</h1>
          <li className="py-2 my-2">Giảm 15% cho đơn hàng đầu tiên</li>
          <li className="w-full h-[50px] ">
            <form
              action=""
              method="post"
              className="w-full h-full shadow-lg rounded-lg flex items-center bg-white text-black"
              onSubmit={(e) => handleOnSubmit(e)}
            >
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Nhập Email"
                className="w-5/6 h-full pl-2 outline-none shadow-lg rounded-lg"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="w-1/6 h-full flex items-center justify-center  hover:bg-black/20"
              >
                <GoPaperAirplane size={22}  />
              </button>
            </form>
          </li>
        </ul>
        <ul className="w-1/5 h-[300px] px-3 text-sm">
          <h1 className="py-2 text-2xl font-semibold">Hỗ trợ</h1>
          <li className="py-2 flex gap-1">
            <span>
              <MdLocationPin size={20} />
            </span>
            <span className="font-semibold">
                Khu Dây Thép,Đồng Đăng,TP.Lạng Sơn
            </span>
            
          </li>
          <li className="py-2 flex items-center gap-1">
            <span>
              <MdMail size={18} />
            </span>
            
            <span className="font-semibold">
                hotrokhachhang@gmail.com
            </span>
          </li>
          <li className="py-2 flex items-center gap-1">
            <span>
              <FaPhoneAlt size={15} />
            </span>
            <span className="text-lg font-semibold">
                029453853239
            </span>
          </li>
        </ul>
        <ul className="w-1/5 h-[300px] px-3 text-sm">
          <h1 className="py-2 text-2xl font-semibold">Tài khoản</h1>
          <li className="py-2">Tài khoản của tôi</li>
          <li className="py-2">Chính sách bảo mật</li>
          <li className="py-2">Login / Register</li>
          <li className="py-2">Giỏ hàng</li>
          <li className="py-2">Shop</li>
        </ul>
        <ul className="w-1/5 h-[300px] px-3 text-sm">
          <h1 className="py-2 text-2xl font-semibold">Liên hệ nhanh</h1>
          <li className="py-2">null</li>
          <li className="py-2">null</li>
          <li className="py-2">null</li>
          <li className="py-2">null</li>
        </ul>
        <ul className="w-1/5 h-[300px] px-3 text-sm">
          <h1 className="py-2 text-2xl font-semibold">Cài đặt app</h1>
          <li className="py-2">{" Tiết kiệm đến $3 khi tải App :))))"}</li>
          <li className="py-2 flex items-center space-x-2">
            <Image src={qrAppURL} alt="ảnh QR" width={90} height={80} />
            <div className="flex-col space-y-1">
              <Image src={logoAppURL} alt="logo app" width={110} height={30} />
              <Image src={nameAppURL} alt="name app" width={110} height={30} />
            </div>
          </li>
          <li className="py-2">
            <ul className="flex items-center justify-center">
              <li >
                <Link href={igLink} className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-white/20 hover:scale-105   " >
                    <FaInstagram size={22} />
                </Link>
              </li>
              <li>
                <Link href={fbLink} className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-white/20 hover:scale-105   " >
                    <FaFacebookSquare size={22} />
                </Link>
              </li>
              <li>
                <Link href={ttLink} className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-white/20 hover:scale-105   " >
                    <AiFillTikTok size={22} />
                </Link>
              </li>
              <li>
                <Link href={xLink} className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-white/20 hover:scale-105   " >
                    <CiTwitter size={24} />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p className="bg-black text-sm text-white/50 pt-2 text-center font-semibold border-t-[2.5px] border-[#b3b3b3]">
        &copy; 2025 - Make with 🧠- by Quý Nguyễn,
      </p>
    </footer>
  );
}
