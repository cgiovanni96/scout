import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Header } from "@/src/components/header";

const poppins = Poppins({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
});

// TODO: change metadata with correct info
export const metadata: Metadata = {
  title: "Scout",
  description: "Sito scout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} h-full font-main bg-primary-900`}>
        <Header />
        <main className="flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
