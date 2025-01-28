import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-cols-fr auto-rows-[6rem] md:auto-rows-[12rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    image,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    image: string;
}) => {
    return (
        <div
            className={cn(
                "relative w-full h-full overflow-hidden row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input md:p-4 border border-white justify-between flex flex-col space-y-4 hover:bg-black/30",
                className
            )}
        >
            <Image
                src={image}
                alt="Passions images"
                fill
                className="absolute object-cover object-center w-full h-full -z-10 rounded-xl opacity-80 group-hover/bento:opacity-45"
            />

            <div className="opacity-0 group-hover/bento:opacity-100 group-hover/bento:translate-x-2 transition duration-200 md:p-4 rounded-lg">
                <div className="font-sans font-bold text-teal-400 md:text-3xl">
                    <p>{title}</p>
                </div>
                <div className="font-light text-teal-100 text-sm">
                    {description}
                </div>
            </div>
        </div>


    );
};
