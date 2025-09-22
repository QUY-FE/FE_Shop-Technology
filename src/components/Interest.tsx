import { FaHeadphonesAlt, FaShippingFast } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";

export default function Interest() {
  return (
    <section className="w-full max-h-[400px] flex gap-4">
      <article className="w-1/3 py-10 px-4 text-center">
        <p className="w-[60px] h-[60px] flex items-center justify-center bg-black/25 rounded-full mx-auto mb-4">
          <span className="w-[45px] h-[45px] flex items-center justify-center bg-black/90 text-white rounded-full">
            <FaHeadphonesAlt size={25} />
          </span>
        </p>
        <h1 className="h-[80px] text-3xl font-semibold mb-2">Tư vấn 24/7</h1>
        <p className="h-[60px] text-black/85">
          Chúng tôi luôn luôn lắng nghe và tư vấn khi bạn gọi
        </p>
      </article>
      <article className="w-1/3 py-10 px-4 text-center">
        <p className="w-[60px] h-[60px] flex items-center justify-center bg-black/25 rounded-full mx-auto mb-4">
          <span className="w-[45px] h-[45px] flex items-center justify-center bg-black/90 text-white rounded-full">
            <FaShippingFast size={25} />
          </span>
        </p>
        <h1 className="h-[80px] text-3xl font-semibold mb-2">
          Miễn phí và Giao hàng nhanh
        </h1>
        <p className="text-black/85">
          Đương nhiên là sẽ đàm bảo hàng đến tay bạn sẽ ko móm méo{" "}
        </p>
      </article>
      <article className="w-1/3 py-10 px-4 text-center">
        <p className="w-[60px] h-[60px] flex items-center justify-center bg-black/25 rounded-full mx-auto mb-4">
          <span className="w-[45px] h-[45px] flex items-center justify-center bg-black/90 text-white rounded-full">
            <GoShieldCheck size={25} />
          </span>
        </p>
        <h1 className="h-[80px] text-3xl font-semibold mb-2">
          Chính sách hoàn hàng
        </h1>
        <p className="h-[60px] text-black/85 ">
          Bạn có thể hoàn hàng trong vòng 30 ngày
        </p>
      </article>
    </section>
  );
}
