
"use client";

import { useState } from "react";
import Image from "next/image";
import productURL from "#/assets/images/keyboard.jpg";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const products = [
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 4,
    totalBuy: 36,
    totalSale: 20 
  },
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 4,
    totalBuy: 36,
    totalSale: 24 
  },
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 2,
    totalBuy: 36,
    totalSale: 21 
  },
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 1,
    totalBuy: 36,
    totalSale: 31
  },
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 4,
    totalBuy: 36,
    totalSale: 13
  },
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 4,
    totalBuy: 36,
    totalSale: 29
  },
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 4,
    totalBuy: 36,
    totalSale: 27 
  },
  {
    url: productURL,
    title: "Bàn phím cơ K550-v4",
    newPrice: 120,
    oldPrice: 190,
    star: 4,
    totalBuy: 36,
    totalSale: 25
  },
];
const ITEMS_PER_PAGE = 8;

export default function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="w-full pb-10">
      <div className="mb-10">
        <p className="pl-4 mb-6 border-l-12 border-[#e34646] text-2xl rounded-md font-semibold">
        Our Products
        </p>
        <h1 className="text-3xl font-semibold">Explore Our Products</h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product,index) => (
          <article
              className="relative group block  lg:w-[270px] h-[350px] transition"
              key={`product__${index}`}
            >
              <Link
                href="/" 
                className="absolute inset-0 bg-black/35 text-white text-2xl font-semibold  hidden rounded-lg group-hover:flex items-center justify-center z-50"
                >
                Xem Sản phẩm
              </Link>
              <Image
                src={product?.url}
                alt={product?.title}
                className="relative w-full h-[250px] object-cover rounded-lg shadow-md"
              />
              <span className="absolute top-4 left-3 w-[55px] h-[27px] bg-[#e34646] text-white rounded text-md text-center font-semibold">-{product?.totalSale}%</span>
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
            </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
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
      </div>
    </section>
  );
}
