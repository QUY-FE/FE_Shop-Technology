import { ToastContainer } from "react-toastify";
import { Archivo } from "next/font/google";
import "../assets/css/globals.css";
import Header from "#/components/Header";
import Footer from "#/components/Footer/Footer";
import "react-multi-carousel/lib/styles.css";
const geistArchivo = Archivo({
  variable: "--font-geist-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${geistArchivo.variable}  antialiased`}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Header />
        <div className="w-full min-h-screen">
          <main className="max-w-[1200px] mx-auto">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
