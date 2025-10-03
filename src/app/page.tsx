'use client'
import Banner from "#/components/Banner";

import FlashSales from "#/components/FlashSales";
import Interest from "#/components/Interest";


import productURL from '#/assets/images/keyboard.jpg'

const products = [
  {
    slug: 'ban-phim-co-k550-v4',
    url: productURL.src,
    title: "Bàn phím cơ K550 v4",
    newPrice: 120,
    oldPrice: 190,
    star: 3,
    countBuy: 36,
    salePercent: 20 ,
  },
  {
    slug: 'ban-phim-co-black-shark-v2',
    url: productURL.src,
    title: "Bàn phím cơ Black shark v4",
    newPrice: 200,
    oldPrice: 490,
    star: 5,
    countBuy: 12,
    salePercent: 60 ,
  },
  
];

export default function Home() {
  return (
    <>
      <Banner />
      <FlashSales products={products} />
      <Interest />
    </>

  );
}
