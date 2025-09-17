"use client";
import Link from "next/link";
import { useState } from "react";
import { MdPhoneIphone } from "react-icons/md";
import { CiLaptop } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight, FaHeadphonesAlt } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { TbHorseToy } from "react-icons/tb";
import Carousel from "react-multi-carousel";

const categoriesList = [
  {
    href: "#",
    title: "Phones",
    icon: MdPhoneIphone,
  },
  {
    href: "#",
    title: "Laptops",
    icon: CiLaptop,
  },
  {
    href: "#",
    title: "headphones",
    icon: FaHeadphonesAlt,
  },
  {
    href: "#",
    title: "camera",
    icon: CiCamera,
  },
  {
    href: "#",
    title: "gaming",
    icon: IoGameControllerOutline,
  },
  {
    href: "#",
    title: "Computer",
    icon: FaComputer,
  },
  {
    href: "#",
    title: "toys",
    icon: TbHorseToy,
  },
  {
    href: "#",
    title: "headphones",
    icon: FaHeadphonesAlt,
  },
  {
    href: "#",
    title: "headphones",
    icon: FaHeadphonesAlt,
  },
];

export default function Categories() {
  const [isActive, setIsActive] = useState("Phones");
  return (
    <div className="mt-10">
      <p className="pl-4 mb-6 border-l-12 border-[#e34646] rounded-md font-semibold ">
        Categories
      </p>
      <div className="flex items-center justify-between mb-8">
        <h1 className="w-2/6 text-4xl font-semibold">Browse by category</h1>
      </div>
      <div className="w-full h-[280px] flex items-center gap-[30px] ">
        <Carousel
          arrows
          additionalTransfrom={0}
          centerMode={false}
          containerClass="container"
          draggable
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
          }}
          rewind
          slidesToSlide={1}
          swipeable
          customLeftArrow={
            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200">
              <FaChevronLeft className="text-red-500 text-xl" />
            </button>
          }
          customRightArrow={
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200">
              <FaChevronRight className="text-red-500 text-xl" />
            </button>
          }
        >
          {categoriesList.map((category, index) => (
            <div
              key={index}
              className={
                isActive === category.title
                  ? "categories_card_active"
                  : "categories_card_default"
              }
              onClick={() => setIsActive(category.title)}
            >
              <div className="w-full h-2/3 ">
                <category.icon
                  className="w-full h-full mx-auto pt-3"
                  size={80}
                />
              </div>
              <div className="w-full h-1/3">
                <h1 className="w-full h-full text-2xl font-semibold">
                  {category.title}
                </h1>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
