import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import image from "../../thumbnail.png";
import Image from "next/image";

export const metadata = {
  title: "Kina Digital Studio",
  description: "Web design and web development Newcastle-upon-Tyne",
  icon: "/favicon",
  ogImage: "https://i.ibb.co/B21cQ8M/Kina-Digital-Studio-Thumbnail.png",
  ogTitle: "Kina Digital Studio",
  keywords: "Web design, Web development,Newcastle-upon-Tyne",
  googleVerification: "icqMhhKujOX7gusIln6Rux14XdGhMWGvHuVvprmToa4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta
          name="google-site-verification"
          content="icqMhhKujOX7gusIln6Rux14XdGhMWGvHuVvprmToa4"
        />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:type" content="website" />

        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="twitter:title" content={metadata.ogTitle} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:description"
          content="Web design and web development agency based in Newcastle-upon-Tyne, United Kingdom"
        />
        <meta property="og:type" content="article" />
      </Head>
      <body className="bg-[#0B1215] font-Roboto">
        <Image
          src={image}
          width={500}
          height={500}
          alt="Kina Digital Studio Thumbnail"
          className="hidden"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
