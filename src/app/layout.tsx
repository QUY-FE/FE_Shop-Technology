import { Archivo } from "next/font/google";
import '../assets/css/globals.css';
import Header from "#/components/Header";

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
         <div className="w-full">
          <div className="max-w-[1200px] h-screen mx-auto">
            {children}
          </div>
        </div>
   
      </body>
    </html>
  );
}
