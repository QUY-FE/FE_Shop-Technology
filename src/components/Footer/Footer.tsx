'use client'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";



export default function Footer() {
    return(
        <footer className="w-full min-h-[300px] bg-black text-white  border-t-[2.5px] border-[#b3b3b3]">
            <div className="max-w-[1200px] h-full mx-auto pt-10 flex">
                <ul className="w-1/5 h-[300px] px-3 text-sm">
                    <h1 className="py-2 text-2xl font-semibold">Theo dõi</h1>
                    <li className="py-2">Giảm 15% cho đơn hàng đầu tiên</li>
                    <li className="w-full h-[50px] border-white border-2 rounded-lg">
                        <input 
                        type="text" 
                        placeholder="Nhập email của bạn" 
                        className="w-full h-full pl-2 outline-none"
                        />
                    </li>
                </ul>
                <ul className="w-1/5 h-[300px] px-3 text-sm">
                    <h1 className="py-2 text-2xl font-semibold">Hỗ trợ</h1>
                    <li className="py-2">Số 4,Phố Kim Đồng,Thị Xã Đồng Đăng,Thành Phố Lạng Sơn</li>
                    <li className="py-2">needhelp@gmail.com</li>
                    <li className="py-2">+84399789651</li>
                </ul>
                <ul className="w-1/5 h-[300px] px-3 text-sm">
                    <h1 className="py-2 text-2xl font-semibold">Tài khoản</h1>
                    <li className="py-2">Tài khoản của tôi</li>
                    <li className="py-2">Login / Register</li>
                    <li className="py-2">Giỏ hàng</li>
                    <li className="py-2">Wishlist</li>
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
                    <li className="py-2">
                        tiết kiệm đến $3 khi tải App
                    </li>
                    <li className="py-2">


                    </li>
                    <li className="py-2">
                        <ul className="flex items-center gap-3">
                            <li><FaInstagram size={22} /></li>
                            <li><FaFacebookSquare size={22}/></li>
                            <li><AiFillTikTok size={22}/></li>
                            <li><CiTwitter size={24}/></li>
                        </ul>

                    </li>
                </ul>


            </div>
            <p className="bg-black text-sm text-white/50 pt-2 text-center font-semibold border-t-[2.5px] border-[#b3b3b3]">&copy; 2025 - Make by Quý Nguyễn </p>
        </footer>
    );
}