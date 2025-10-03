"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import productURL from "#/assets/images/keyboard.jpg";

import { FaStar, FaAngleLeft, FaAngleRight } from "react-icons/fa";

import Categories from "#/components/Categories";

const products = [
  {
    slug: "ban-phim-co-k550-v4",
    url: productURL.src,
    title: "Bàn phím cơ K550 v4",
    newPrice: 120,
    oldPrice: 190,
    star: 3,
    countBuy: 36,
    salePercent: 20,
    category: 'gaming',
  },
  {
    slug: "ban-phim-co-k550-v4",
    url: productURL.src,
    title: "Bàn phím cơ K550 v4",
    newPrice: 120,
    oldPrice: 190,
    star: 3,
    countBuy: 36,
    salePercent: 20,
    category: 'gaming',
  },
  {
    slug: "ban-phim-co-k550-v4",
    url: productURL.src,
    title: "Bàn phím cơ K550 v4",
    newPrice: 120,
    oldPrice: 190,
    star: 3,
    countBuy: 36,
    salePercent: 20,
    category: 'gaming',
  },
  {
    slug: "ban-phim-co-k550-v4",
    url: productURL.src,
    title: "Bàn phím cơ K550 v4",
    newPrice: 120,
    oldPrice: 190,
    star: 3,
    countBuy: 36,
    salePercent: 20,
    category: 'gaming',
  },
];

const ITEMS_PER_PAGE = 8;
export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="w-full pb-10">
      <Categories />
      <div className="my-8 border-t-2 border-t-colorBorder "></div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:h-[800px]  sm:px-[2px]">
        {paginatedProducts.map((product, index) => (
          <article
            className="relative group block w-[205px] h-[300px] md:w-[260px] md:h-[320px] lg:w-[270px] lg:h-[370px] transition"
            key={`product__${index}`} 
          >
            <Link
              href={`/product/${product?.slug}`}
              className="absolute inset-0 bg-black/15 text-white text-2xl font-semibold  hidden rounded-lg group-hover:flex items-center justify-center z-50"
            >
              Xem Sản phẩm
            </Link>
            <Image
              src={product?.url}
              alt={product?.title}
              width={270}
              height={250}
              className="relative object-cover rounded-lg shadow-md"
            />
            <span className="absolute top-4 left-3 w-[55px] h-[27px] bg-[#e34646] text-white rounded text-md text-center font-semibold">
              -{product?.salePercent}%
            </span>
            <h1 className="w-full h-[40px] font-medium leading-[40px]">
              {product?.title}
            </h1>
            <div className="flex items-center gap-3">
              <p className="h-[30px] text-[#e34646] text-lg font-medium leading-[30px]">
                ${product?.newPrice}
              </p>
              <p className="h-[30px] leading-[30px] font-medium text-sm italic line-through text-black/60 ">
                ${product?.oldPrice}
              </p>
            </div>
            <div className="flex items-center h-[30px] leading-[30px]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < product.star ? "#ffad33" : "gray"} />
              ))}
              <p className="px-4 text-black/70 font-medium">
                ({product?.countBuy})
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
        <button
          className={`${currentPage === 1 ? ' hidden ' : ' block '} px-3 py-2 rounded-md border`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <FaAngleLeft size={22} />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded-md border ${
              currentPage === page
                ? "bg-red-500 text-white border-red-500"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          className={`${currentPage === 1 ? ' hidden ' : ' block '} px-3 py-2 rounded-md border`}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <FaAngleRight size={22} />
        </button>
      </div>
    </section>
  );
}
