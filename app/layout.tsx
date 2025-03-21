import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/app/ui/header";
import Footer from '@/app/ui/footer'
import {Noto_Sans} from 'next/font/google'
import AOSProvider from "./aosinitializer";
// import { SessionProvider } from "next-auth/react";

const notosans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets:['latin']
})
export const metadata: Metadata = {
  title: "Work Horizon - Driving Sale, Expanding Horizons",
  description: "We operate on a global scale, serving clients across multiple industries & regions, ensuring seamless business solutions worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <SessionProvider>
    <html lang="en">
      <body className={`${notosans.variable} antialiased`} cz-shortcut-listen='true'>
        <AOSProvider />
        <MainHeader />
        <div className="bg-white">
          {children}
        </div>
        <Footer />
      </body>
    </html>
    // </SessionProvider> 
  );
}
