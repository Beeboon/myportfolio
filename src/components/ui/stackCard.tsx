"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

let interval: any;

type Card = {
    id: number;
    title: string;
    description: string;
    techs: React.ReactNode;
    itemClassName: string;
};

export const CardStack = ({
    items,
    offset,
    scaleFactor,
}: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);

    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards]; // create a copy of the array
                newArray.unshift(newArray.pop()!); // move the last element to the front
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className="relative h-screen w-full flex justify-center items-center border ">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className={cn(card.itemClassName, "absolute bg-teal-800 h-2/3 w-1/2 rounded-3xl p-4 shadow-xl border border-teal-200 order-white/[0.1]  shadow-black/[0.1] flex flex-col justify-between")}
                        style={{
                            transformOrigin: "top center",
                        }}
                        initial={{
                            opacity: 0, // Invisible au début
                            top: "50%", // Position de départ au centre verticalement
                            left: "50%", // Position de départ au centre horizontalement
                            x: "-50%", // Centre horizontalement (compense `left: 50%`)
                            y: "-50%", // Centre verticalement (compense `top: 50%`)
                        }}
                        animate={{
                            opacity: 1, // Rendre visible
                            top: `calc(50% + ${index * -CARD_OFFSET}px)`, // Décale verticalement chaque carte
                            scale: 1 - index * SCALE_FACTOR, // Réduit la taille des cartes empilées
                            zIndex: cards.length - index, // Réglage de l'ordre des cartes
                        }}
                        transition={{
                            duration: 0.5, // Durée de la transition
                            ease: "easeInOut",
                        }}
                    >
                        <div className="font-normal text-teal-700">
                            {card.techs}
                        </div>
                        <div>
                            <p className="text-teal-500 font-medium">
                                {card.title}
                            </p>
                            <p className="text-teal-400 font-normal">
                                {card.description}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
