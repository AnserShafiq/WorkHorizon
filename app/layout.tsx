import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/app/ui/header";
import Footer from '@/app/ui/footer'
import {Noto_Sans} from 'next/font/google'

const notosans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Work Horizon",
  description: "Driving Sale, Expanding Horizons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notosans.variable} antialiased`}>
        <MainHeader />
        <div className="bg-white">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
