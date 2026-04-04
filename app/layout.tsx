import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Header from "./Header";


import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Theodore Bellas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className}`}
      >
        <Header />
        <div className="">
          {children}

        </div>
      </body>
    </html>
  );
}
