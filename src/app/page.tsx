'use client'
import Banner from "#/components/Banner";
import Categories from "#/components/Categories";
import FlashSales from "#/components/FlashSales";
import Interest from "#/components/Interest";
import ProductList from "#/components/ProductList";

import productURL from '#/assets/images/keyboard.jpg'

const products = [
  {
    url: productURL.src,
    title: "Bàn phím cơ Black shark v4",
    newPrice: 120,
    oldPrice: 190,
    star: 4,
    totalBuy: 36,
    totalSale: 20 
  },
  
];

export default function Home() {
  return (
    <>
      <Banner />
      <FlashSales products={products} />
      <Categories />
      <ProductList products={products} />
      <Interest />
    </>

  );
}
