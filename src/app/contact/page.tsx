'use client'
import Button from "#/components/Button/Button";
import { FaPhone } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";
export default function Contact() {
    return(
        <section className="h-screen flex  justify-center gap-6 mt-20">
            <div className="w-4/12 h-[500px] shadow-2xl rounded-2xl px-8 py-12">
                <div className="pb-8 border-b-2 border-[#b3b3b3]">
                    <h1 className="mb-4 leading-6 text-2xl font-semibold flex items-center gap-4">
                        <span className="w-10 h-10 flex items-center justify-center bg-[#e34646] rounded-full text-white"><FaPhone/></span>
                        Gọi cho chúng tôi
                    </h1>
                    <p  className="mb-2 leading-6 text-sm">Chúng tôi luôn nghe 24/7 và 7 ngày một tuần</p>
                    <p  className="mb-2  leading-6">Số điện thoại: +84366367588</p>
                </div>
                <div className="py-8 ">
                    <h1 className="mb-4 leading-6 text-2xl font-semibold flex items-center gap-4">
                        <span className="w-10 h-10 flex items-center justify-center bg-[#e34646] rounded-full text-white"><TbMail/></span>
                        Gửi tin nhắn
                    </h1>
                    <p  className="mb-2 leading-6 text-sm">Chúng tôi sẽ kiểm tra tin và phản hồi lại trong 24h</p>
                    <p  className="mb-2  leading-6">Email: helpme@gmail.com</p>
                    <span>or</span>
                    <p  className="mb-2  leading-6">Email: needtohelp@gmail.com</p>
                </div>
               
            </div>
            <div className="w-8/12 h-[500px] shadow-2xl rounded-2xl px-8 py-10">
                <h1 className="text-2xl mb-4 font-semibold text-black/90">Nhập thông tin của bạn</h1>
                <ul className="flex items-center justify-between gap-4">
                    <li className="w-[200px] h-[40px] bg-black/15 shadow-2xl rounded-lg">
                        <input type="text" placeholder="email" className="w-full h-full pl-3 font-semibold outline-none rounded-lg focus:bg-black/20"/>
                    </li>
                    <li className="w-[200px] h-[40px] bg-black/15 shadow-2xl rounded-lg">
                        <input type="text" placeholder="email" className="w-full h-full pl-3 font-semibold outline-none rounded-lg focus:bg-black/20"/>
                    </li>
                    <li className="w-[200px] h-[40px] bg-black/15 shadow-2xl rounded-lg">
                        <input type="text" placeholder="email" className="w-full h-full pl-3 font-semibold outline-none rounded-lg focus:bg-black/20"/>
                    </li>
                </ul>
                <div className="w-full h-[200px] my-6 bg-black/15 shadow rounded-lg">
                    <input type="text" placeholder="email"  className="w-full  p-3 outline-none" />
                </div>
                <div className="flex justify-end">
                    <Button primary w={215} h={56} text="Gửi" />
                </div>
            </div>
        </section>
    );
}