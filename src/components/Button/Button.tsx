import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


// Nút carousel trái
export const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
  >
    <FaChevronLeft className="text-red-500 text-xl" />
  </button>
);
// Nút carousel phải
export const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
  >
    <FaChevronRight className="text-red-500 text-xl" />
  </button>
);


export default function Button({
  primary = false,
  text = "Thêm text",
  w = 225,
  h = 55,
  className = "",
}: {
  primary?: boolean;
  text?: string;
  w?: number | string; // hỗ trợ số hoặc "100%"
  h?: number | string;
  className?: string;
}) {
  const style = {
    width: typeof w === "number" ? `${w}px` : w,
    height: typeof h === "number" ? `${h}px` : h,
  };

  return (
    <>
      {primary ? (
        <button
          style={style}
          className={`${className}bg-primary text-white rounded my-4 shadow cursor-pointer hover:bg-[#fd5151] hover:shadow-xl transition`}
        >
          {text}
        </button>
      ) : (
        <button
          style={style}
          className={`${className}border-2 border-colorBorder shadow cursor-pointer hover:shadow-xl`}
        >
          {text}
        </button>
      )}
    </>
  );
}

