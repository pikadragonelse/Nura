import React from "react";
import "./index.scss";

export type SliderImage = {
    src: string;
    className?: string;
    onClick?: () => void;
};
export const SliderImage = ({ src, className, onClick }: SliderImage) => {
    return (
        <div className={`slider-image ${className}`} onClick={onClick}>
            <img src={src} alt="" className="slider-image-img" />
        </div>
    );
};
