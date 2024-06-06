import { Inter} from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hanz",
  description: "Property-services",
  icons: {
    icon: [
      { url: 'https://i.ibb.co/NFj4cNV/logo.png' },
      new URL('https://i.ibb.co/NFj4cNV/logo.png', 'https://i.ibb.co/NFj4cNV/logo.png'),
      { url: 'https://i.ibb.co/NFj4cNV/logo.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

export default function RootLayout({ children , session }) {
  return (
    <html lang="en">
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Indic+Siyaq+Numbers&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Znamenny+Musical+Notation&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap" />
        <meta property="og:locale" content="en_US" />
        <meta property='og:title' content='Hanz Home solutions'/>
<meta property='og:image' content='https://i.ibb.co/NFj4cNV/logo.png'/>
<meta property='og:description' content='Your one-stop solution for all property services including moving, landscaping, minor handyman repairs, and housekeeping. Reliable, professional, and affordable services to keep your property in top shape'/>
<meta property='og:url' content='https://www.hanzhomesolutions.com'/>
<meta property='og:image:width' content='1200' />
<meta property='og:image:height' content='627' />
<meta property="og:type" content="website" />
<link rel="icon" href="https://i.ibb.co/NFj4cNV/logo.png" />

<link rel="icon" type="image/png" sizes="32x32" href="https://i.ibb.co/NFj4cNV/logo.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="https://i.ibb.co/NFj4cNV/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://i.ibb.co/NFj4cNV/logo.png" />
      </Head>
      <body className={inter.className}>
  
        <AuthProvider>
        {children}
        </AuthProvider>  
        </body>
    </html>
  );
}
