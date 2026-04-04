import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Header from "./Header";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
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
        <div className="flex space-x-8 ml-10 mt-10">
          <pre className="mx-auto text-3xl text-slate-500">[coming soon]</pre>
        </div>
        <div className="flex space-x-8 ml-10 mt-10">
            <Link href="https://github.com/tabcodes" className="mx-auto text-5xl text-slate-500 hover:text-slate-700">
              <FaGithub />
            </Link>
        </div>
        {/* <div className="">
          {children}
        </div> */}
      </body>
    </html>
  );
}
