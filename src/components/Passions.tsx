"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bentogrid";
import { cn } from "@/lib/utils";
import { passionsItems } from "@/data";
import Separator from "./ui/Separator";

export function Passions() {
    return (
        <><Separator />
            <div className="h-screen mx-20 my-20 ">
                <div className="max-w-7xl mx-auto py-20 md:px-8 lg:px-10">
                    <h2 className="text-5xl font-bold text-tiger-300/80 md:text-4xl mb-4 max-w-4xl">
                        My Hobbies
                    </h2>
                    <p className="text-neutral-400 text-sm md:text-base max-w-xl">
                        A short summary of my hobbies and pastimes.
                    </p>
                </div>
                <BentoGrid>
                    {passionsItems.map(({ id, title, description, image, itemClassName }) => <BentoGridItem
                        key={id}
                        title={title}
                        description={description}
                        image={image}
                        className={cn(itemClassName)}
                    >
                    </BentoGridItem>
                    )}
                </BentoGrid>

            </div></>
    );
}
