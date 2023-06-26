import React, { useEffect, useState } from "react";
import "./index.scss";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

export type DemonItem = {
    title: string;
    img: string;
    children: string;
    scrollYProgress?: MotionValue<number>;
};
export const DemonItem = ({
    title,
    img,
    children,
    scrollYProgress = new MotionValue<number>(),
}: DemonItem) => {
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1], {
        clamp: true,
    });

    return (
        <motion.div style={{ opacity }} className="demon-item">
            <h2 className="title">{title}</h2>
            <p className="desc">{children}</p>
            <div className="container-img">
                <img src={img} alt="" className="img" />
            </div>
        </motion.div>
    );
};
