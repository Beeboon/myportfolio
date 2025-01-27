import React from "react";

interface SeparatorProps {
    orientation?: "horizontal" | "vertical";
}

const Separator: React.FC<SeparatorProps> = ({
    orientation = "horizontal",
}) => {
    const baseStyles =
        `bg-gradient-to-r from-transparent via-white to-transparent `;
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
