'use client'
import Carousel from 'react-multi-carousel';

import meetingImg from '#/assets/images/meeting.jpg'
import womenAvatar from '#/assets/images/women_avatar.png'
import menAvatar from '#/assets/images/men_avatar.jpg'

import { FaInstagram } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight, FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";


import Image from 'next/image';
import Interest from '#/components/Interest';

const staffList = [
  {
    url: womenAvatar,
    name: 'Hoàng Thị Ngọc Thư',
    position: 'Trưởng Phòng Thiết Kế'
  },
  {
    url: womenAvatar,
    name: 'Nông Thị Ngọc Như',
    position: 'Trưởng Phòng Kinh Doanh'
  },
  {
    url: menAvatar,
    name: 'Nguyễn Bỉnh Quý',
    position: 'FE Developer'
  },
  {
    url: womenAvatar,
    name: 'Hứu Ngọc Nhu',
    position: 'Phó Giám Đốc & đồng sáng lập công ty'
  },
  {
    url: womenAvatar,
    name: 'Hứu Minh Châu',
    position: 'Tổng Giám Đốc & đồng sáng lập công ty'
  },
];

export default function About() {
  return (
    <section>
      {/* Intro section */}
      <div className="mt-20 max-h-[600px] flex">
        <div className="w-1/2 max-h-[330px] pr-12">
          <h1 className="text-4xl font-semibold mb-4">Câu truyện về chúng tôi</h1>
          <p className="leading-8 text-black/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
            nihil harum. Tempora itaque distinctio dicta rerum commodi, pariatur
            officiis laudantium expedita nemo corrupti, excepturi consequatur
            accusantium nostrum, debitis quia ullam.
          </p>
        </div>
        <div className="w-1/2 max-h-[330px] relative">
          <Image
            src={meetingImg}
            alt="ảnh minh hoạ"
            className="rounded-2xl shadow object-cover"
          />
          <div className="absolute rounded-2xl inset-0 w-full h-full bg-black/40"></div>
        </div>
      </div>

      {/* Staff carousel */}
      <div className="w-full h-[600px] mt-20 relative">
        <Carousel
          arrows
          additionalTransfrom={0}
          centerMode={false}
          containerClass="carousel-container"
          draggable
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1200 }, items: 3 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          }}
          rewind
          slidesToSlide={1}
          swipeable
          itemClass="px-4"
          customLeftArrow={
            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200 z-10">
              <FaChevronLeft className="text-red-500 text-xl" />
            </button>
          }
          customRightArrow={
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200 z-10">
              <FaChevronRight className="text-red-500 text-xl" />
            </button>
          }
        >
          {staffList.map((item, index) => (
            <article
              className="max-w-sm h-[450px] mx-auto text-center bg-white shadow rounded-xl"
              key={index}
            >
              <Image
                src={item.url}
                alt="avatar"
                width={300}
                height={350}
                className="mx-auto rounded-full object-cover py-6"
              />
              <h1 className="text-2xl font-semibold leading-[35px]">{item.name}</h1>
              <p className="text-sm text-black/70 leading-[35px]">{item.position}</p>
              <ul className="flex items-center justify-center gap-3 text-black/80 leading-[35px]">
                <li><AiFillTikTok size={30} /></li>
                <li><FaInstagram size={30} /></li>
                <li><FaFacebookSquare size={30} /></li>
                <li><CiTwitter size={30} /></li>
              </ul>
            </article>
          ))}
        </Carousel>
      </div>
        {/* interest */}
      <Interest />
    </section>
  );
}
