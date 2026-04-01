"use client"

import Giscus from "@giscus/react"
import { useTheme } from "next-themes"

export default function Comments() {
    const {theme} = useTheme();

    return (
        <section className = "mt-10 border-t border-gray-200 dark:border-zinc-800 pt-10">
            <Giscus
                id="comments"
                repo="JJkang04/my-tech-blog"
                repoId="R_kgDORyU6ww"
                category="Announcements"
                categoryId="DIC_kwDORyU6w84C5oNc"
                mapping="pathname"
                term="Welcome to my blog!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme = {theme === "dark" ? "dark" : "light"}
                lang = "ko"
                loading = "lazy"
                />
        </section>
    )
}