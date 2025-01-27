"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bentogrid";
import { cn } from "@/lib/utils";
import { passionsItems } from "@/data";

export function Passions() {
    return (
        <div className="h-screen mx-20">
            <h2 className="py-3 m-16 text-center text-5xl text-teal-400">My Hobbies</h2>
            <BentoGrid className="mx-auto">
                {passionsItems.map(({ id, title, description, image, itemClassName }) =>
                    <BentoGridItem
                        key={id}
                        title={title}
                        description={description}
                        image={image}
                        className={cn(itemClassName)}
                    >
                    </BentoGridItem>
                )}
            </BentoGrid>

        </div>
    );
}
