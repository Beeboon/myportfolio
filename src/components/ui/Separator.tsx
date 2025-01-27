import React from "react";

interface SeparatorProps {
    orientation?: "horizontal" | "vertical";
    color?: string;
}

const Separator: React.FC<SeparatorProps> = ({
    orientation = "horizontal",
    color = "white",
}) => {
    const baseStyles =
        `bg-gradient-to-r from-transparent via-${color} to-transparent `;
    const orientationStyles =
        orientation === "horizontal" ? "w-full h-[1px]" : "h-full w-[1px]";

    return (
        <div
            className={`${baseStyles} ${orientationStyles}`}
            role="separator"
        />
    );
};

export default Separator;
