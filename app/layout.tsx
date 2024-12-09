import type { Metadata } from "next";
import { Maitree } from 'next/font/google'
import "./globals.css";
import Link from "next/link";

const maitree = Maitree({
  weight: "400",
  subsets: ["latin", "thai"],
})

export const metadata: Metadata = {
  title: "Jinnapa Yana",
  description: "This is my e-portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${maitree.className} bg-[url('../public/images/library.webp')] w-full text-white`}
      >
        <div className="h-36 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center gap-2">
          <h1 className="text-white text-5xl text-center">Welcome to my world</h1>
          <div className="flex flex-row gap-16">
            <Link href="/" className="text-xl hover:text-amber-300 transition-colors duration-300">Home</Link>
            <Link href="/education" className="text-xl hover:text-amber-300 transition-colors duration-300">Education</Link>
            <Link href="/works" className="text-xl hover:text-amber-300 transition-colors duration-300">Works</Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
