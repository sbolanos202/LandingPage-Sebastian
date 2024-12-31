import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Urbanist as UrbanistFont } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Header from "@/components/header";

// Inicializar la fuente con un nombre distinto
const urbanist = UrbanistFont({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sebastian Bolanos 💻",
  description: "Portfolio page made by Sbolanos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
