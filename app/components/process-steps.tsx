"use client";

import { motion } from "framer-motion";
import { Flag, Send, Wallet, ArrowRight } from "lucide-react";
import { cn } from "~/lib/utils";

const timelineData = [
    {
        icon: Flag,
        title: "Create Link",
        description: "Generate a custom payment link in seconds. Set a fixed amount or let users decide.",
        color: "text-blue-500",
        bgColor: "bg-blue-100",
    },
    {
        icon: Send,
        title: "Share Anywhere",
        description: "Send it via WhatsApp, Email, or Instagram. It works everywhere your customers are.",
        color: "text-purple-500",
        bgColor: "bg-purple-100",
    },
    {
        icon: Wallet,
        title: "Get Paid",
        description: "Receive funds instantly. No more manual reconciliation or chasing payments.",
        color: "text-green-500",
        bgColor: "bg-green-100",
    },
];

export default function ProcessSteps() {
    return (
        <div className="relative py-20 px-4 md:px-8 max-w-6xl mx-auto">
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Process</span>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2">How it works.</h2>
            </motion.div>

            {/* Desktop Timeline using CSS/SVG for the wave */}
            {/* Desktop Timeline using CSS/SVG for the wave */}
            <div className="hidden lg:block relative h-[400px]">
                {/* SVG Wave Line */}
                <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 1200 200" fill="none" preserveAspectRatio="none">
                        <motion.path
                            d="M 0 85 Q 600 -25 1200 85"
                            stroke="url(#process-gradient)"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        <defs>
                            <linearGradient id="process-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="50%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#10b981" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Steps */}
                {/* Steps */}
                <div className="relative z-10 grid grid-cols-3 h-full w-full gap-8">
                    {/* Step 1 - Left Aligned */}
                    <div className="flex flex-col items-center lg:items-start lg:pl-12 pt-32">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-blue-100/50 rounded-full blur-xl"></div>
                            <div className="w-20 h-20 bg-white rounded-[24px] shadow-xl border border-blue-100 flex items-center justify-center relative z-10 rotate-[-6deg] hover:rotate-0 transition-all duration-300">
                                <Flag size={32} className="text-blue-600" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="relative text-center lg:text-left mt-8 max-w-[280px]"
                        >
                            <div className="text-8xl font-bold text-gray-200 opacity-40 absolute -top-24 -left-4 select-none">1</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Create Link</h3>
                            <p className="text-gray-500 leading-relaxed font-medium">
                                Generate a customized payment link in seconds. Flexibly set amounts.
                            </p>
                        </motion.div>
                    </div>

                    {/* Step 2 - Center Aligned */}
                    <div className="flex flex-col items-center pt-4">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.0, type: "spring" }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-purple-100/50 rounded-full blur-xl"></div>
                            <div className="w-20 h-20 bg-white rounded-[24px] shadow-xl border border-purple-100 flex items-center justify-center relative z-10 rotate-[3deg] hover:rotate-0 transition-all duration-300">
                                <Send size={32} className="text-purple-600 ml-1" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2 }}
                            className="relative text-center mt-8 max-w-[280px]"
                        >
                            <div className="text-8xl font-bold text-gray-200 opacity-40 absolute -top-16 -right-8 select-none">2</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Share Anywhere</h3>
                            <p className="text-gray-500 leading-relaxed font-medium">
                                Send it via WhatsApp, Instagram, or Email. It works on any platform.
                            </p>
                        </motion.div>
                    </div>

                    {/* Step 3 - Right Aligned */}
                    <div className="flex flex-col items-center lg:items-end lg:pr-12 pt-32">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.5, type: "spring" }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-green-100/50 rounded-full blur-xl"></div>
                            <div className="w-20 h-20 bg-white rounded-[24px] shadow-xl border border-green-100 flex items-center justify-center relative z-10 rotate-[-3deg] hover:rotate-0 transition-all duration-300">
                                <Wallet size={32} className="text-green-600" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.7 }}
                            className="relative text-center lg:text-right mt-8 max-w-[280px]"
                        >
                            <div className="text-8xl font-bold text-gray-200 opacity-40 absolute -top-24 -left-4 select-none">3</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Paid</h3>
                            <p className="text-gray-500 leading-relaxed font-medium">
                                Receive funds instantly into your account. Automatic notifications included.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Mobile Timeline (Vertical) */}
            <div className="lg:hidden space-y-12 relative">
                <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gray-100"></div>

                {timelineData.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-24"
                    >
                        {/* Number/Icon */}
                        <div className={cn("absolute left-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white z-10", step.bgColor)}>
                            <step.icon size={24} className={step.color} />
                        </div>

                        <div className="pt-2">
                            <span className="text-6xl font-black text-gray-100 absolute -top-6 right-0 -z-10 select-none">{index + 1}</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
