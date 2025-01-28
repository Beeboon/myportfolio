"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration ? duration : 1,
                delay: stagger(0.2),
            }
        );
    });

    const classNameForTitle = (idx: number): string => {
        className = ""
        switch (idx) {
            case 0:
                className = "text-left -ml-10"
                break;
            case 1:
                className = "text-teal-200 text-right -mr-20 md:-mr-40"
                break;
            case 2:
                className = "text-left -ml-10 md:-ml-20"
                break;
            default:
                break;
        }
        return className
    }

    const renderWords = () => {
        return (
            <motion.div ref={scope} className="flex flex-col items-center ">
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className={classNameForTitle(idx)}
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="">
                <div className=" text-teal-400 text-4xl md:text-6xl ld:text-7xl tracking-wide" style={{ textShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}>
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
