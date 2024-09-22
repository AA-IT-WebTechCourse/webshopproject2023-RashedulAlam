import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { AuthenticationProvider } from "@/contexts/authenticationContext";
// import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebShop",
  description: "WebTech Course Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthenticationProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthenticationProvider>
      </body>
    </html>
  );
}
