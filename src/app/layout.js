import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata = {
  title:
    "Kina Digital Studio | Newcastle-upon-Tyne | Web design and Web development",
  description:
    "Kina Digital Studio offers top-notch web design and development services in Newcastle-upon-Tyne, UK. Our expert team crafts bespoke websites tailored to your unique needs, ensuring stunning visuals, seamless functionality, and optimal user experience. With a focus on creativity, professionalism, and affordability, we bring your digital vision to life. Contact us today to elevate your online presence with cutting-edge web solutions.",
  icon: "/favicon",
  // ogImage:
  //   "https://i.ibb.co/sH2080c/Dark-Grey-Minimalist-Photo-Travel-You-Tube-Thumbnail.png",
  // ogTitle: "Kina Digital Studio",
  keywords:
    "Web design Newcastle, Web development Newcastle, Newcastle web design, Newcastle web developmentWeb design services Newcastle, Web development services Newcastle, Website design Newcastle, Website development Newcastle, Newcastle upon Tyne web design, Newcastle upon Tyne web development, Affordable web design Newcastle, Affordable web development Newcastle, Professional web design Newcastle, Professional web development Newcastle, Best web design company Newcastle, Best web development company Newcastle, Responsive web design Newcastle, SEO-friendly web design Newcastle, Custom web design Newcastle, Custom web development Newcastle",
  googleVerification: "icqMhhKujOX7gusIln6Rux14XdGhMWGvHuVvprmToa4",
  openGraph: {
    title: "Kina Digital Studio",
    description:
      "Kina Digital Studio offers top-notch web design and development services in Newcastle-upon-Tyne, UK. Our expert team crafts bespoke websites tailored to your unique needs, ensuring stunning visuals, seamless functionality, and optimal user experience. With a focus on creativity, professionalism, and affordability, we bring your digital vision to life. Contact us today to elevate your online presence with cutting-edge web solutions.",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
