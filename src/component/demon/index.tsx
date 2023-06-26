import React, { useRef } from "react";
import "./index.scss";
import { DemonItem } from "./demon-item";
import { motion, useScroll, useTransform } from "framer-motion";

export type Demon = {};

const itemList = [
    {
        img: `${process.env.PUBLIC_URL}/media/demon/11.svg`,
        title: "Craftsmanship",
        content:
            "All Denon products are built to meticulous standards—fusing Japanese traditions with the cutting edge of sound.",
    },
    {
        img: `${process.env.PUBLIC_URL}/media/demon/human.svg`,
        title: "Technology",
        content:
            "Voice control. Premium drivers. Leading AV receivers. Denon sets the standard in what great audio technology should sound like.",
    },
    {
        img: `${process.env.PUBLIC_URL}/media/demon/setting.svg`,
        title: "Simplicity",
        content: "Denon audio products are simple to set up and easier to use.",
    },
    {
        img: `${process.env.PUBLIC_URL}/media/demon/wave.svg`,
        title: "Signature Sound",
        content:
            "Each product is tuned to deliver Denon’s signature vivid & spacious sound quality.",
    },
];

export const Demon = ({}: Demon) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`start end`, `end start`],
    });

    const y = useTransform(scrollYProgress, [0.4, 0.7, 1], [0, 200, 300], {
        clamp: false,
    });

    return (
        <motion.div ref={ref} className="demon">
            <motion.h1 style={{ y }} className="title-demon">
                DENON’S KEY FEATURES
            </motion.h1>
            <div className="content-container">
                {itemList.map((item) => (
                    <DemonItem
                        title={item.title}
                        img={item.img}
                        scrollYProgress={scrollYProgress}
                    >
                        {item.content}
                    </DemonItem>
                ))}
            </div>
        </motion.div>
    );
};
