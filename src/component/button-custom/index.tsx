import React from "react";
import "./index.scss";

export type ButtonCustom = { children: any; className?: string; onClick?: any };
export const ButtonCustom = ({
    children,
    className,
    onClick,
}: ButtonCustom) => {
    return (
        <button onClick={onClick} className={`btn-custom ${className}`}>
            {children}
        </button>
    );
};
