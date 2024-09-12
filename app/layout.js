import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers";
import Head from "next/head";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Hanz Home-Solutions | Moving, Housekeeping, Lawn Care & Handyman Services",
  description:
    "Hanz offers all-in-one home services, including landscaping, handyman work, moving, and property cleaning. Book today for top-quality services tailored to your property needs at affordable rates.",
  icons: {
    icon: [
      { url: "https://i.ibb.co/NFj4cNV/logo.png" },
      new URL(
        "https://i.ibb.co/NFj4cNV/logo.png",
        "https://i.ibb.co/NFj4cNV/logo.png"
      ),
      {
        url: "https://i.ibb.co/NFj4cNV/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  keywords:
    "handyman, lawn care, moving services, housekeeping, home maintenance, home repairs, fall clean-up, gutter cleaning, leaf removal, snow shoveling, home winter prep, weather stripping, caulking, window sealing, local movers, property maintenance, seasonal cleaning, deep cleaning, residential cleaning, minor home repairs, painting, door repair, window repair, drywall patching, packing services, furniture moving, home organization, reliable movers, apartment cleaning, house cleaning, fall yard maintenance, pruning, residential handyman, property upkeep, home renovation, affordable handyman, professional movers, relocation services, move-in cleaning, move-out cleaning, fall landscaping, home care solutions, property services, house repairs",
  author: "Hanz Home-Solutions",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Indic+Siyaq+Numbers&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Znamenny+Musical+Notation&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap"
        />
        <link rel="icon" type="image/png" href="/hanzLogo.ico" sizes="any" />

        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Hanz Home Solutions | All-in-One Property Services"
        />
        <meta property="og:image" content="https://i.ibb.co/NFj4cNV/logo.png" />
        <meta
          property="og:description"
          content="Your one-stop solution for all property services including moving, landscaping, minor handyman repairs, and housekeeping. Reliable, professional, and affordable services to keep your property in top shape"
        />
        <meta
          name="keywords"
          content="lawn care, landscaping, handyman, moving services, housekeeping, home maintenance, property services"
        />
        <meta name="author" content="Hanz Home-Solutions" />
        <meta property="og:url" content="https://www.hanzhomesolutions.com" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hanz Home Solutions | Moving, Landscaping, Handyman, and Housekeeping"
        />
        <meta
          name="twitter:description"
          content="Reliable and professional property services for homeowners, tenants, and property managers. Book today!"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/NFj4cNV/logo.png"
        />
          
      </Head>

      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
        <Script
        id="facebook-pixel"
        strategy="afterInteractive"
      >
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=829980235980500&ev=PageView&noscript=1`}
        />
      </noscript>
      </body>
      <GoogleAnalytics gaId="G-G273KV5KZ1" />
    </html>
  );
}
