import { ThemeProvider } from "./components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeToggle } from "./components/theme-toggle";
import { WriteButton } from "./components/wirte-button";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata= {
  title: "기술 블로그",
  description: "컴공 학부생의 개발 기록",
};



export default function RootLayout({children}:{children: React.ReactNode}) 
{
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 
      transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="max-w-3xl mx-auto min-h-screen flex flex-col px-4">
          <header className="sticky top-0 z-50 py-6 border-b border-gray-200 dark:border-zinc-800 
          bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md flex justify-between items-center px-2">
            <ThemeToggle />
            <Link href="/" className= "text-xl font-black tracking-tighter">
              MY BLOG
            </Link>
            <nav className="space-x-4 text-sm font-medium">
              <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-blue-500 transition-colors">About</Link>
            </nav>
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <footer className="py-6 border-t border-gray-200 text-center text-sm text-gray-500">
             © 2026 My Tech Blog. All rights reserved.
          </footer>
          
        </div>
          <WriteButton/>
        </ThemeProvider>
      </body>
    </html>
  );
}