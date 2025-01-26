import React, { useEffect } from "react";

// Définir un type pour le callback
type Callback = (event: MouseEvent | TouchEvent) => void;

export const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    callback: Callback
) => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            // Vérifier si le clic est à l'extérieur de l'élément référencé
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            callback(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};
