import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";

// Ganti konfigurasi font (baris 5-13)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bimbingan Skripsi", // Anda bisa sekalian ganti judulnya di sini
  description: "Aplikasi Monitoring Bimbingan Skripsi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}