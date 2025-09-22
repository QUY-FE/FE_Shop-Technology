import { Archivo } from "next/font/google";
import '../assets/css/globals.css';
import Header from "#/components/Header";
import Footer from "#/components/Footer/Footer";
import "react-multi-carousel/lib/styles.css";
const geistArchivo = Archivo({
  variable: "--font-geist-archivo",
  subsets: ["latin"],
  weight :["400","500","700"],
})



export default function RootLayout({children,}: Readonly<{children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistArchivo.variable}  antialiased`}
      >
        <Header />
         <div className="w-full min-h-screen">
          <main className="max-w-[1200px] mx-auto">
            {children}
          </main>
        </div>      
        <Footer />
      </body>
    </html>
  );
}
