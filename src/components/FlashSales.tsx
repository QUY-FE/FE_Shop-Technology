"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import Button, { CustomLeftArrow, CustomRightArrow } from "./Button/Button"; // Giữ nguyên import Button của bạn
import { useProducts } from "#/context/productsProvider";

export default function FlashSales() {
  // Dữ liệu mẫu cho đồng hồ đếm ngược (bạn sẽ thay bằng state)
  const countdown = { days: "03", hours: "23", minutes: "19", secs: "56" };
  const { data } = useProducts();
  return (
    // Thêm padding dọc và border-b gọn gàng hơn
    <section className="w-full border-b border-gray-200 py-12">
      {/* === PHẦN HEADER === */}
      {/* 1. Thiết kế lại "Todays" */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-5 h-10 bg-[#e34646] rounded"></div>
        <p className="text-[#e34646] text-lg font-semibold">Todays</p>
      </div>

      {/* 2. Thiết kế lại "Flash Sales" và Đồng hồ đếm ngược */}
      <div className="flex flex-col lg:flex-row items-baseline justify-between mb-8 gap-6">
        <h1 className="text-4xl font-semibold flex-shrink-0">Flash Sales</h1>

        {/* Đồng hồ đếm ngược kiểu "Kard" */}
        <div className="flex items-end gap-3 lg:gap-5">
          {/* Days */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-gray-600">Days</span>
            <span className="font-bold text-3xl text-gray-900">
              {countdown.days}
            </span>
          </div>
          <span className="text-[#e34646] text-3xl font-bold pb-1">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-gray-600">Hours</span>
            <span className="font-bold text-3xl text-gray-900">
              {countdown.hours}
            </span>
          </div>
          <span className="text-[#e34646] text-3xl font-bold pb-1">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-gray-600">Minutes</span>
            <span className="font-bold text-3xl text-gray-900">
              {countdown.minutes}
            </span>
          </div>
          <span className="text-[#e34646] text-3xl font-bold pb-1">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-gray-600">Seconds</span>
            <span className="font-bold text-3xl text-gray-900">
              {countdown.secs}
            </span>
          </div>
        </div>
      </div>

      {/* === PHẦN CAROUSEL === */}
      <div className="w-full">
        <Carousel
          // autoPlay
          autoPlaySpeed={3000}
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
            desktop: { breakpoint: { max: 3000, min: 1200 }, items: 4 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          }}
          rewind
          slidesToSlide={1}
          swipeable
          itemClass="px-2" // Giữ nguyên khoảng cách
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {data.map((product, index) => (
            // === PHẦN CARD SẢN PHẨM ===
            // Bỏ w, h cố định, thêm shadow và transition
            <article
              className="block w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              key={`product__${index}`}
            >
              {/* 1. Phần hình ảnh (relative group) */}
              <div className="relative group w-full h-[250px] bg-gray-100 rounded-t-lg overflow-hidden">
                <Image
                  src={product?.url}
                  alt={product?.title}
                  layout="fill" // Dùng layout fill để lấp đầy div
                  objectFit="cover" // Đảm bảo ảnh cover đẹp
                  className="transition-transform duration-300 group-hover:scale-105" // Zoom nhẹ khi hover
                />

                {/* Sale Badge */}
                <span className="absolute top-4 left-4 w-auto px-3 h-[27px] bg-[#e34646] text-white rounded text-sm flex items-center justify-center font-semibold">
                  -{product?.salePercent}%
                </span>

                {/* 2. Nút bấm hover (thay thế Button component của bạn bằng Link) */}
                {/* Hiệu ứng: Trượt từ dưới lên và mờ dần (thay vì 2 nút to) */}
                <div className="absolute bottom-0 left-0 w-full p-2 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  <Link
                    href={`/cart`}
                    className="flex-1 bg-white text-black text-center py-2.5 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    Thêm vào giỏ
                  </Link>
                  <Link
                    href={`/product/${product?.slug}`}
                    className="flex-1 bg-[#e34646] text-white text-center py-2.5 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
                  >
                    Xem sản phẩm
                  </Link>
                </div>
              </div>

              {/* 3. Phần Text (Thêm padding) */}
              <div className="p-4 bg-white rounded-b-lg">
                {/* Bỏ h cố định, dùng truncate (cắt ngắn) */}
                <h1
                  className="font-medium text-lg truncate mb-2"
                  title={product?.title}
                >
                  {product?.title}
                </h1>

                {/* Bỏ h cố định, thêm mb-2 */}
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-[#e34646] text-lg font-semibold">
                    ${product?.newPrice}
                  </p>
                  <p className="font-medium text-sm italic line-through text-gray-500">
                    ${product?.oldPrice}
                  </p>
                </div>

                {/* Bỏ h cố định, chỉnh lại spacing */}
                <div className="flex items-center">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        color={i < product.star ? "#ffad33" : "#e0e0e0"} // Dùng màu xám nhạt cho sao rỗng
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-500 font-medium">
                    ({product?.countBuy})
                  </p>
                </div>
              </div>
            </article>
          ))}
        </Carousel>
      </div>

      {/* === PHẦN NÚT XEM THÊM === */}
      {/* Bỏ min-h, dùng padding py-10 */}
      <div className="w-full flex items-center justify-center py-10">
        <Link href="/products">
          {/* Giữ nguyên Button component của bạn ở đây */}
          <Button text="Xem thêm sản phẩm" primary w={234} h={56} />
        </Link>
      </div>
    </section>
  );
}
