import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kina Digital Studio",
  description: "Web design and web development Newcastle-upon-Tyne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0B1215] font-Roboto">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
