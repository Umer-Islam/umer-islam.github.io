import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "umerislam.me",
  description: "Welcome to my portfolio showcasing fullstack web development expertise. Explore innovative projects and seamless user experiences. Let's collaborate and bring your ideas to life!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

<Providers>
    <Navbar/>
    {children}</Providers>

      </body>
    </html>
  );
}
