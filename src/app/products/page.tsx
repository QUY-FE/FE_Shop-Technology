"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaAngleLeft, FaAngleRight } from "react-icons/fa";

import Categories from "#/components/Categories";
import Button from "#/components/Button/Button";
import { useProducts } from "#/context/productsProvider"; // Your typed hook

const ITEMS_PER_PAGE = 8;

export default function Page() {
  const { data } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);

  // State for the selected category
  const [selectedCategory, setSelectedCategory] = useState("gaming"); // TS infers this as 'string'

  // Filter products based on selectedCategory
  const filteredProducts = data.filter(
    (product) =>
      product.category.toLowerCase() === selectedCategory.toLowerCase()
  ); // TS infers this as 'Product[]'

  // Calculate pagination based on filtered list
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  ); // TS infers this as 'Product[]'

  // Handle category change from child component
  // Add 'string' type to the parameter
  const handleCategoryChange = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
    setCurrentPage(1); // Reset to page 1
  };

  return (
    <section className="w-full pb-10 min-h-screen">
      {/* Pass state and handler down to Categories */}
      <Categories
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="my-8 border-t border-gray-200"></div>

      {/* === THAY ĐỔI BẮT ĐẦU TỪ ĐÂY === */}

      {/* Kiểm tra xem filteredProducts có phần tử nào không */}
      {filteredProducts.length > 0 ? (
        // Nếu CÓ, hiển thị lưới sản phẩm
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product, index) => (
            <Link
              href={`/products/${product?.slug}`}
              className="relative block w-full h-auto bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-xl duration-300 hover:-top-[3px]"
              key={`product__${product.slug}_${index}`}
            >
              {/* 1. Image Area */}
              <div className="relative group w-full h-[250px] bg-gray-100 overflow-hidden">
                <Image
                  src={product?.url}
                  alt={product?.title}
                  layout="fill"
                  objectFit="cover"
                  className="relative transition-transform duration-300 group-hover:scale-105"
                />

                <span className="absolute top-3 left-3 w-auto h-[27px] px-3 flex items-center justify-center bg-[#e34646] text-white rounded text-sm font-semibold">
                  -{product?.salePercent}%
                </span>
              </div>
              {/* 2. Text Area */}
              <div className="p-4">
                <h1
                  className="w-full font-medium text-lg truncate mb-2"
                  title={product?.title}
                >
                  {product?.title}
                </h1>
                <div className="flex items-baseline gap-2 mb-2">
                  <p className="text-[#e34646] text-lg font-semibold">
                    ${product?.newPrice}
                  </p>
                  <p className="font-medium text-sm italic line-through text-gray-500">
                    ${product?.oldPrice}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        color={i < product.star ? "#ffad33" : "#e0e0e0"}
                      />
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-gray-500 font-medium">
                    ({product?.countBuy})
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        // Nếu KHÔNG, hiển thị thông báo
        <div className="flex items-center justify-center min-h-[300px]">
          <p className="text-xl text-gray-500">Không tìm thấy sản phẩm nào.</p>
        </div>
      )}
      {/* === KẾT THÚC THAY ĐỔI LƯỚI SẢN PHẨM === */}

      {/* === THAY ĐỔI PHÂN TRANG === */}
      {/* Chỉ hiển thị phân trang nếu totalPages > 0 */}
      {totalPages > 0 && (
        <div className="flex justify-center mt-10 space-x-2">
          <button
            className={`px-3 py-2 rounded-md border bg-white hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <FaAngleLeft size={22} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md border transition-colors ${
                currentPage === page
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            className={`px-3 py-2 rounded-md border bg-white hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <FaAngleRight size={22} />
          </button>
        </div>
      )}
      {/* === KẾT THÚC THAY ĐỔI PHÂN TRANG === */}
    </section>
  );
}
