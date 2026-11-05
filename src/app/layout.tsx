import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corporate Landing",
  description: "A corporate landingpage built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${font.className} antialiased`}>
      <body className="bg-[#1f242c]">{children}</body>
    </html>
  );
}
