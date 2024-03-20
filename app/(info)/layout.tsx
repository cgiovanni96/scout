import "../globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Header } from "@/src/components/header";
import { PageHeader } from "./_components";
import { Footer } from "@/src/components/footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
});

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
      <body className={`${poppins.className} h-full font-main bg-green-50`}>
        <Header />

        <div className="flex min-h-screen flex-col">
          <PageHeader />

          <main className="flex-1 flex flex-col gap-4 w-3/4 mx-auto mt-8">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
