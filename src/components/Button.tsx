export default function Button({
  primary = false,
  text = "Thêm text",
  w = 225,
  h = 55,
  className = '',
}: {
  primary?: boolean;
  text?: string;
  w?: number | string; // hỗ trợ số hoặc "100%"
  h?: number | string;
  className?: string
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
          className={`${className}bg-[#e34646] text-white rounded my-4 shadow cursor-pointer hover:bg-[#fd5151] hover:shadow-xl transition`}
        >
          {text}
        </button>
      ) : (
        <button
          style={style}
          className={`${className}border-2 border-[#dbdbdb] shadow cursor-pointer hover:shadow-xl`}
        >
          {text}
        </button>
      )}
    </>
  );
}
