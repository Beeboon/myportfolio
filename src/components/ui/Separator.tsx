import React from "react";

interface SeparatorProps {
    orientation?: "horizontal" | "vertical";
    className?: string;
}

const Separator: React.FC<SeparatorProps> = ({
    orientation = "horizontal",
    className = "",
}) => {
    const baseStyles =
        "bg-gradient-to-r from-transparent via-teal-300 to-transparent ";
    const orientationStyles =
        orientation === "horizontal" ? "w-full h-[1px]" : "h-full w-[1px]";

    return (
        <div
            className={`${baseStyles} ${orientationStyles} ${className}`}
            role="separator"
        />
    );
};

export default Separator;
