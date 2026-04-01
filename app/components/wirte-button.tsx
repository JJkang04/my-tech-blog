"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {motion} from "framer-motion";

export function WriteButton() {
    const pathname = usePathname();

    if (pathname === "/admin/write") return null; //이미 작성 페이지에 있으면 버튼 숨기기

    return (
        <motion.div
            initial={{scale:0, opacity:0}}
            animate = {{scale:1, opacity:1 }}
            whileHover = {{scale: 1.1}}
            whileTap = {{scale: 0.9}}
            className = "fixed bottom-8 right-8 z-50"
        >
            <Link
                href="/admin/write"
                className= "flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/40 hover:bg-blue-700 transition-all"
                title = "새 글 작성"
            >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            >
            <path d="M12 20h9"/>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
        </Link>
        </motion.div>
    );
}

