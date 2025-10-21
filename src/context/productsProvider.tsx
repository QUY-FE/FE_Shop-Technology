"use client";
// 1. Import thêm các type cần thiết
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import productURL from "#/assets/images/keyboard.jpg";

// 2. Định nghĩa interface cho một Product
interface Product {
  slug: string;
  url: string;
  title: string;
  newPrice: number;
  oldPrice: number;
  star: number;
  countBuy: number;
  salePercent: number;
  category: string;
}

// 3. Định nghĩa interface cho giá trị của Context
interface StoreContextType {
  data: Product[]; // data là một mảng các Product
  setData: Dispatch<SetStateAction<Product[]>>; // Hàm setData
}

// 4. Cung cấp type cho createContext
const ProductsContext = createContext<StoreContextType | undefined>(undefined);

// 5. Thêm type cho 'children'
export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const products: Product[] = [
    // Khai báo rõ products là một mảng Product[]
    {
      slug: "ban-phim-co-k550-v4",
      url: productURL.src,
      title: "Bàn phím cơ K550 v4",
      newPrice: 120,
      oldPrice: 190,
      star: 3,
      countBuy: 36,
      salePercent: 20,
      category: "gaming",
    },
    {
      slug: "ban-phim-co-k550-v4-2",
      url: productURL.src,
      title: "Bàn phím cơ K550 v4",
      newPrice: 120,
      oldPrice: 190,
      star: 3,
      countBuy: 36,
      salePercent: 20,
      category: "gaming",
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
      category: "gaming",
    },
    {
      slug: "ban-phim-co-k550-v4-2",
      url: productURL.src,
      title: "Bàn phím cơ K550 v4",
      newPrice: 120,
      oldPrice: 190,
      star: 3,
      countBuy: 36,
      salePercent: 20,
      category: "gaming",
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
      category: "gaming",
    },
    {
      slug: "ban-phim-co-k550-v4-2",
      url: productURL.src,
      title: "Bàn phím cơ K550 v4",
      newPrice: 120,
      oldPrice: 190,
      star: 3,
      countBuy: 36,
      salePercent: 20,
      category: "gaming",
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
      category: "gaming",
    },
    {
      slug: "ban-phim-co-k550-v4-2",
      url: productURL.src,
      title: "Bàn phím cơ K550 v4",
      newPrice: 120,
      oldPrice: 190,
      star: 3,
      countBuy: 36,
      salePercent: 20,
      category: "gaming",
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
      category: "gaming",
    },
    {
      slug: "ban-phim-co-k550-v4-2",
      url: productURL.src,
      title: "Bàn phím cơ K550 v4",
      newPrice: 120,
      oldPrice: 190,
      star: 3,
      countBuy: 36,
      salePercent: 20,
      category: "gaming",
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
      category: "gaming",
    },
    {
      slug: "ban-phim-co-k550-v4-2",
      url: productURL.src,
      title: "Bàn phím cơ K550 v4",
      newPrice: 120,
      oldPrice: 190,
      star: 3,
      countBuy: 36,
      salePercent: 20,
      category: "gaming",
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
      category: "gaming",
    },
    {
      slug: "ban-phim-co-k550-v4-2",
      url: productURL.src,
      title: "Bàn phím cơ K550 v4",
      newPrice: 120,
      oldPrice: 190,
      star: 3,
      countBuy: 36,
      salePercent: 20,
      category: "gaming",
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
      category: "gaming",
    },
    {
      slug: "ban-phim-co-k550-v4-2",
      url: productURL.src,
      title: "Bàn phím cơ K550 v4",
      newPrice: 120,
      oldPrice: 190,
      star: 3,
      countBuy: 36,
      salePercent: 20,
      category: "gaming",
    },
  ];

  // 6. Thêm type cho useState (tùy chọn nhưng nên làm)
  const [data, setData] = useState<Product[]>(products);

  return (
    // Giờ value đã khớp với StoreContextType
    <ProductsContext.Provider value={{ data, setData }}>
      {children}
    </ProductsContext.Provider>
  );
};

// export ra để sử dụng như 1 hook
export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error("useProducts phải được sử dụng trong ProductsProvider");

  // Hook bây giờ trả về đúng type StoreContextType
  return context;
};
