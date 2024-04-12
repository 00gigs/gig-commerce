import { Inter} from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hanz",
  description: "Property-services",
};

export default function RootLayout({ children , session }) {
  return (
    <html lang="en">
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Indic+Siyaq+Numbers&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Znamenny+Musical+Notation&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap" />
      </Head>
      <body className={inter.className}>
  
        <AuthProvider>
        {children}
        </AuthProvider>  
        </body>
    </html>
  );
}
