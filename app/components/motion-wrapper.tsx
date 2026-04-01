"use client"

import {motion} from "framer-motion"


export const staggerContainer = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition : {
            staggerChildren: 0.15,
        },
    },
};

export const staggerItem = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0, transition: {duration: 0.5}},
};

export function FadeIn({children} : {children: React.ReactNode}) {
    return (
        <motion.div
            initial= {{opacity: 0, y:15}}
            animate= {{opacity: 1, y:0}}
            transition= {{duration:0.5, ease: "easeOut"}}
        >
            {children}
        </motion.div>
    );
} 