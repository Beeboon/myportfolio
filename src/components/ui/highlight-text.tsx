import { cn } from "@/lib/utils";

export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "group-hover:bg-tiger/80 transition-all duration-300 ease-in-out font-bold bg-emerald-100 bg-teal-400/[0.2] text-teal-200 px-1 py-0.5 rounded-md",
                className
            )}
        >
            {children}
        </span>
    );
};

export default Highlight;