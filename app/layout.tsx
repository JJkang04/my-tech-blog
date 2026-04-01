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
  icons: {
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MY BLOG",
  },
};



export default function RootLayout({children}:{children: React.ReactNode}) 
{
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 
      transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="max-w-3xl mx-auto min-h-screen flex flex-col px-4">
          <header className="sticky top-0 z-50 py-6 border-b border-gray-200 dark:border-zinc-800 
          bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md flex justify-between items-center px-4 transition-all 
          duration-300">
            <ThemeToggle />
            
            <Link href="/" className= "text-xl font-black tracking-tighter text-zinc-900 dark:text-white transition-all duration-300">
              MY BLOG
            </Link>

            <nav className="space-x-4 text-sm font-medium">

              <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300">Home</Link>
              <Link href="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300">About</Link>
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