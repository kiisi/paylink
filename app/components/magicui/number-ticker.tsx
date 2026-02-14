"use client";

import { useEffect, useRef } from "react";
// @ts-ignore - framer-motion works at runtime
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "~/lib/utils";

export function NumberTicker({
    value,
    direction = "up",
    delay = 0,
    className,
    decimalPlaces = 0,
    startValue = 0,
}: {
    value: number;
    direction?: "up" | "down";
    className?: string;
    delay?: number;
    decimalPlaces?: number;
    startValue?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? value : startValue);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                motionValue.set(direction === "down" ? startValue : value);
            }, delay * 1000);
        }
    }, [motionValue, isInView, delay, value, direction, startValue]);

    useEffect(
        () =>
            springValue.on("change", (latest: number) => {
                if (ref.current) {
                    ref.current.textContent = Intl.NumberFormat("en-US", {
                        minimumFractionDigits: decimalPlaces,
                        maximumFractionDigits: decimalPlaces,
                    }).format(Number(latest.toFixed(decimalPlaces)));
                }
            }),
        [springValue, decimalPlaces],
    );

    return (
        <span
            className={cn(
                "inline-block tabular-nums tracking-wider",
                className,
            )}
            ref={ref}
        />
    );
}
