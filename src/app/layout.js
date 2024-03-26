import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Kina Digital Studio",
  description: "Web design and web development Newcastle-upon-Tyne",
  icons: { icon: "/icons/favicon-16x16.png" },
  ogImage: "../public/thumbnail.png",
  ogTitle: "Kina Digital Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./icons/favicon.ico" />
        {/* <meta property="og:title" content="Kina Digital Studio" /> */}
        {/* <meta
          property="og:image"
          content="https://imgtr.ee/images/2024/03/26/64fcb933dfdd6d27b2c891e96676387f.md.png"
        /> */}

        <meta
          property="og:description"
          content="Web design and web development agency based in Newcastle-upon-Tyne, United Kingdom"
        />
        <meta property="og:type" content="article" />
      </Head>
      <body className="bg-[#0B1215] font-Roboto">
        <link rel="icon" href="/favicon-32x32.png" sizes="any" />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
