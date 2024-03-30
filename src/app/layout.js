import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import image from "../../thumbnail.png";
import Image from "next/image";

export const metadata = {
  title:
    "Kina Digital Studio | Newcastle-upon-Tyne | Web design and Web development",
  description:
    "Web design and web development from Newcastle-upon-Tyne, United Kingdom",
  icon: "/favicon",
  // ogImage:
  //   "https://i.ibb.co/sH2080c/Dark-Grey-Minimalist-Photo-Travel-You-Tube-Thumbnail.png",
  // ogTitle: "Kina Digital Studio",
  keywords: "Web design, Web development,Newcastle-upon-Tyne, United Kingdom",
  googleVerification: "icqMhhKujOX7gusIln6Rux14XdGhMWGvHuVvprmToa4",
  openGraph: {
    title: "Kina Digital Studio",
    description:
      "Web design and web development from Newcastle-upon-Tyne, United Kingdom",
    url: "https://kinadigitalstudio.com",
    siteName: "Kina Digital Studio",
    images: [
      {
        url: "https://i.ibb.co/sH2080c/Dark-Grey-Minimalist-Photo-Travel-You-Tube-Thumbnail.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://i.ibb.co/sH2080c/Dark-Grey-Minimalist-Photo-Travel-You-Tube-Thumbnail.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Kina Digital Studio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
  },
  verification: {
    google: "icqMhhKujOX7gusIln6Rux14XdGhMWGvHuVvprmToa4",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kina Digital Studio",
    description:
      "Web design and web development from Newcastle-upon-Tyne, United Kingdom",
    creator: "Kina Digital Studio",

    image:
      "https://i.ibb.co/sH2080c/Dark-Grey-Minimalist-Photo-Travel-You-Tube-Thumbnail.png",
    // Must be an absolute URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta
          name="google-site-verification"
          content={metadata.verification.google}
        />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href={metadata.icons.icon} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta
          property="og:image:url"
          content="https://i.ibb.co/sH2080c/Dark-Grey-Minimalist-Photo-Travel-You-Tube-Thumbnail.png"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kinadigitalstudio.com/" />

        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="twitter:card" content={metadata.twitter.card} />

        <meta name="twitter:creator" content={metadata.twitter.creator} />

        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
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
