"use client";

import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TypingAnimationProps {
    text: string;
    duration?: number;
    className?: string;
    delay?: number;
}

export default function TypingAnimation({
    text,
    duration = 0.05,
    className,
    delay = 0,
}: TypingAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <span
            ref={ref}
            className={cn(
                "font-display tracking-[-0.02em] drop-shadow-sm inline-block",
                className,
            )}
        >
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: duration, delay: delay + i * duration }}
                    className={cn(
                        // Add a subtle width constraint to prevent layout shift if needed, 
                        // but usually minimal layout shift with this method.
                        "inline-block"
                    )}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}
