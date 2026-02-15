"use client";

import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "~/components/magicui/animated-beam";
import {
    MessageCircle,
    CreditCard,
    Building2,
    CheckCircle2,
    Zap,
    ArrowRight,
    Wallet
} from "lucide-react";
import { cn } from "~/lib/utils";

// Card Component with forwardRef
const Card = forwardRef<HTMLDivElement, { className?: string; title: string; icon: React.ReactNode; children: React.ReactNode }>(
    ({ className, title, icon, children }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "z-10 flex w-[150px] md:w-[200px] flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md",
                    className
                )}
            >
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
                        {icon}
                    </div>
                    <span className="text-xs font-bold text-gray-900 leading-tight">{title}</span>
                </div>
                <div className="text-[11px] text-gray-500 leading-relaxed font-medium">
                    {children}
                </div>
            </div>
        );
    }
);

Card.displayName = "Card";

export function PaymentWorkflowVisual() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className="relative flex w-full max-w-[1000px] items-center justify-center overflow-hidden rounded-lg bg-transparent p-4 md:p-10 md:h-[500px]"
            ref={containerRef}
        >
            <div className="flex w-full flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-20">

                {/* Step 1: Customer Activity */}
                <div className="flex flex-col justify-center">
                    <Card ref={div1Ref} title="Customer DMs" icon={<MessageCircle size={16} />}>
                        "How much for these shoes? I want to buy."
                    </Card>
                </div>

                {/* Step 2: Auto-Response */}
                <div className="flex flex-col justify-center">
                    <Card ref={div2Ref} title="Auto-Reply" icon={<Zap size={16} />} className="border-blue-200 bg-blue-50/50">
                        Sends your paylink.me/store link automatically.
                    </Card>
                </div>

                {/* Step 3: Payment Options (Split) */}
                <div className="flex flex-col justify-center gap-6">
                    <Card ref={div3Ref} title="Transfer" icon={<Building2 size={16} />}>
                        Pays via unique account number.
                    </Card>
                    <Card ref={div4Ref} title="Card Payment" icon={<CreditCard size={16} />}>
                        Pays via secure card checkout.
                    </Card>
                </div>

                {/* Step 4: Settlement */}
                <div className="flex flex-col justify-center">
                    <Card ref={div5Ref} title="Instant Alert" icon={<Wallet size={16} />} className="border-green-200 bg-green-50/50">
                        Money lands in your wallet instantly.
                    </Card>
                </div>
            </div>

            {/* Beams */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div2Ref}
                duration={3}
                pathColor="#e5e7eb"
                gradientStartColor="#3b82f6"
                gradientStopColor="#8b5cf6"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div3Ref}
                duration={3}
                curvature={30}
                pathColor="#e5e7eb"
                gradientStartColor="#3b82f6"
                gradientStopColor="#8b5cf6"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
                duration={3}
                curvature={-30}
                pathColor="#e5e7eb"
                gradientStartColor="#3b82f6"
                gradientStopColor="#8b5cf6"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div5Ref}
                duration={3}
                curvature={30}
                pathColor="#e5e7eb"
                gradientStartColor="#3b82f6"
                gradientStopColor="#22c55e"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div5Ref}
                duration={3}
                curvature={-30}
                pathColor="#e5e7eb"
                gradientStartColor="#3b82f6"
                gradientStopColor="#22c55e"
            />
        </div>
    );
}
