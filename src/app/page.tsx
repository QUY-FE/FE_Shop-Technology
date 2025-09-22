'use client'
import Banner from "#/components/Banner";
import Categories from "#/components/Categories";
import FlashSales from "#/components/FlashSales";
import Interest from "#/components/Interest";
import ProductList from "#/components/ProductList";



export default function Home() {
  return (
    <>
      <Banner />
      <FlashSales />
      <Categories />
      <ProductList />
      <Interest />
    </>

  );
}
