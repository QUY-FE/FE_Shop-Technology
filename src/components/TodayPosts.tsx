"use client";
import Image from "next/image";
import productURL from "#/assets/images/keyboard.jpg";
import { FaChevronLeft, FaStar, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import Button from "./Button";

const products = [
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 4,
    totalBuy: 36,
  },
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 4,
    totalBuy: 36,
  },
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 2,
    totalBuy: 36,
  },
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 1,
    totalBuy: 36,
  },
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 4,
    totalBuy: 36,
  },
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 4,
    totalBuy: 36,
  },
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 4,
    totalBuy: 36,
  },
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 4,
    totalBuy: 36,
  },
];

export default function TodayPosts() {
  return (
    <div className="w-full border-b-1 border-[#b3b3b3]">
      <p className="pl-4 mb-6 border-l-12 border-[#e34646] rounded-md font-semibold">
        Todays
      </p>
      <div className="flex items-center justify-between mb-8">
        <h1 className="w-2/6 text-4xl font-semibold">Flash Sales</h1>
        <div className="w-4/6 flex items-center justify-end gap-6 ">
          <h1>
            Ngày: <span>03</span>
          </h1>
          <h1>
            Giờ: <span>03</span>
          </h1>
          <h1>
            Phút: <span>03</span>
          </h1>
          <h1>
            Giây: <span>03</span>
          </h1>
        </div>
      </div>
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
          desktop: { breakpoint: { max: 3000, min: 1200 }, items: 4 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 3 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
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
        {products.map((product, index) => (
          <Link
            href="/"
            className="block sm:w-[180px] lg:w-[270px] h-[350px] hover:scale-105 transition md:mx-4 lg:mx-8"
            key={`product__${index}`}
          >
            <Image
              src={product?.url}
              alt="keybroad"
              className="relative w-full h-[250px] object-cover rounded-lg shadow-md"
            />
            <h1 className="w-full h-[40px] font-medium leading-[40px]">
              {product?.title}
            </h1>
            <div className="flex items-center gap-3">
              <p className="h-[30px] text-[#e34646] text-lg font-medium leading-[30px]">
                ${product?.newPrice}
              </p>
              <p className="h-[30px] leading-[30px] font-medium line-through text-black/60">
                ${product?.oldPrice}
              </p>
            </div>
            <div className="flex items-center h-[30px] leading-[30px]">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  color={i < product.star ? "#ffad33" : "gray"}
                />
              ))}
              <p className="px-4 text-black/70 font-medium">
                ({product?.totalBuy})
              </p>
            </div>
          </Link>
        ))}
      </Carousel>
        <div className="flex items-center justify-center mt-10">

          <Button text="Xem thêm sản phẩm" primary w={234} h={56} />
        </div>
    </div>
  );
}
