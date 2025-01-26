"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bentogrid";
import { cn } from "@/lib/utils";
import { passionsItems } from "@/data";

export function Passions() {
    return (
        <div className="h-screen mx-20">
            <h2 className="text-center text-5xl uppercase text-teal-400 p-20">- What I love -</h2>
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
