"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

type navItemProps = {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: navItemProps[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      if (Math.abs(current - lastScrollY) > 0.05) {
        const direction = current - lastScrollY;

        if (direction < 0) {
          setVisible(true); // Défilement vers le haut
        } else {
          setVisible(false); // Défilement vers le bas
        }

        // Mettre à jour la position de défilement précédente
        setLastScrollY(current);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        layout
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          "flex max-w-fit  fixed top-6 inset-x-0 mx-auto border border-slate-200 border-transparent/5 rounded-full bg-transparent/10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: navItemProps, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-teal-400 hover:text-teal-200"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span><a href="#contact">@Mail</a></span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
