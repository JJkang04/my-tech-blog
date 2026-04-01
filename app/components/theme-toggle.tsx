"use client"

import { useTheme } from "next-themes"
import { useEffect, useState} from "react"

export function ThemeToggle() {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])
    if(!mounted) {
        return <div className= "p-2 w-10 h-10" />
    }

    return (
        <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors
        flex items-center justify-center"
        aria-label = "Toggle Dark Mode">
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    )
}