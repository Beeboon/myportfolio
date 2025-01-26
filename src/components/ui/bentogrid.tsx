import { cn } from "@/lib/utils";

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
                "grid md:auto-rows-[12rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
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
    // image,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    // image?: string;
}) => {
    // const renderImage = () => {
    //     if (image)
    //         return <Image src={image} fill alt="Passions images" />
    //     else
    //         return null
    // }

    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 border border-white justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: "linear-gradient(90deg, rgba(17, 94, 89, 0.5) 24%, rgba(13, 148, 136, 0.5) 75%)",
                backgroundColor: "rgb(17, 94, 89, 0.5)",
            }}

        >
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {/* {renderImage()} */}
                <div className="font-sans font-bold text-teal-400 text-3xl">
                    {title}
                </div>
                <div className="font-light text-teal-100 text-sm">
                    {description}
                </div>
            </div>
        </div>
    );
};
