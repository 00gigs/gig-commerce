import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hanz",
  description: "Property-services",
};

export default function RootLayout({ children , session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
  
        <AuthProvider>
        {children}
        </AuthProvider>  
        </body>
    </html>
  );
}
