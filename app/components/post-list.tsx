
"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "./motion-wrapper";

export function PostList({ posts }: { posts: any[] }) {
  return (
    <motion.ul 
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      {posts.map(({ id, title, date, description }) => (
        <motion.li 
          key={id} 
          variants={staggerItem}
          className="border border-gray-400 dark:border-zinc-600 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-zinc-900/50"
        >
          <Link href={`/posts/${id}`} className="block">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              {title}
            </h3>
            <small className="text-gray-500">{date}</small>
            <p className="mt-2 text-gray-700 dark:text-zinc-400">{description}</p>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}