import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata= {
  title: "기술 블로그",
  description: "컴공 학부생의 개발 기록",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <div className="max-w-3xl mx-auto min-h-screen flex flex-col px-4">
          <header className="py-6 border-b border-gray-200 flex justify-between items-center">
            <Link href="/" className= "text-xl font-black tracking-tighter">
              MY BLOG
            </Link>
            <nav className="space-x-4 text-sm font-medium">
              <Link href="/" className="hover:text-blue-500">Home</Link>
              <Link href="about" className="hover:text-blue-500">About</Link>
            </nav>
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <footer className="py-6 border-t border-gray-200 text-center text-sm text-gray-500">
             © 2026 My Tech Blog. All rights reserved.
          </footer>

        </div>
      </body>
    </html>
  );
}