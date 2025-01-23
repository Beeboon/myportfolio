"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function FloatingNavBar() {
    const navItems = [
        {
            name: "Home",
            link: "#home",
            icon: <IconHome className="h-4 w-4 text-teal-50" />,
        },
        {
            name: "About",
            link: "#passions",
            icon: <IconUser className="h-4 w-4 text-teal-50" />,
        },
        {
            name: "Contact",
            link: "#contact",
            icon: (
                <IconMessage className="h-4 w-4 text-teal-50" />
            ),
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}
