"use client";

import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

export function BentoGrid({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
}

export function BentoCard({
    name,
    className,
    background,
    Icon,
    description,
    cta,
    href,
}: {
    name: string;
    className?: string;
    background?: ReactNode;
    Icon: React.FC<{ className?: string }>;
    description: string;
    cta?: string;
    href?: string;
}) {
    return (
        <div
            className={cn(
                "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl",
                "border border-white/[0.06] bg-white/[0.03]",
                "transform-gpu transition-all duration-500",
                "hover:border-white/[0.12] hover:bg-white/[0.05]",
                "md:col-span-1",
                className,
            )}
        >
            <div className="absolute inset-0 overflow-hidden">
                {background}
            </div>
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-2">
                <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-400 transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-white" />
                <h3 className="text-xl font-semibold text-neutral-200 mt-2">
                    {name}
                </h3>
                <p className="max-w-lg text-sm text-neutral-400 leading-relaxed">{description}</p>
            </div>
            {cta && (
                <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                        href={href || "#"}
                        className="pointer-events-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                        {cta} →
                    </a>
                </div>
            )}
        </div>
    );
}
