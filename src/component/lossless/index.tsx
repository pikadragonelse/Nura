import React, { useEffect, useRef } from "react";
import AOS from "aos";

import "./index.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { LossLessChild } from "./lossless-child";

export const LossLess = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`start end`, `end start`],
    });

    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: ref,
        offset: [`start end`, `end start`],
    });

    const opacity = useTransform(scrollYProgress, [0.5, 0.5, 0.6], [1, 1, 0], {
        clamp: true,
    });

    const scale = useTransform(scrollYProgress1, [1, 0.5, 0], [1, 1, 0], {
        clamp: false,
    });

    const y = useTransform(scrollYProgress, [0, 0.3, 1], [0, 100, -500], {
        clamp: false,
    });

    const opacity1 = useTransform(scrollYProgress1, [0, 0.7, 0.7], [0, 1, 1], {
        clamp: false,
    });

    const scale1 = useTransform(scrollYProgress1, [0, 0.7, 0.6], [0, 1, 1], {
        clamp: false,
    });

    const y1 = useTransform(scrollYProgress1, [0, 0.3, 1], [0, 50, -100], {
        clamp: false,
    });

    const y2 = useTransform(scrollYProgress, [0.4, 0.7, 1], [0, 200, 300], {
        clamp: false,
    });

    return (
        <motion.section ref={ref} className="lossless-audio">
            <motion.p style={{ y: y2 }} className="title">
                Audio Craftsmanship
            </motion.p>
            <div className="container-content">
                <LossLessChild
                    style={{ opacity, scale, y }}
                    img={`${process.env.PUBLIC_URL}/media/lossless/song.svg`}
                >
                    Most audio files are severely compressed, resulting in data
                    loss and, consequently, poor sound quality. While it saves
                    space and speeds up wireless transmission,{" "}
                    <span>
                        Lossy audio is far from the peak audio quality you
                        should be enjoying.
                    </span>
                </LossLessChild>
                <LossLessChild
                    style={{ opacity: opacity1, scale: scale1, y: y1 }}
                    img={`${process.env.PUBLIC_URL}/media/lossless/tai.svg`}
                >
                    Before now, you couldn’t transmit{" "}
                    <span>true lossless audio</span> file formats to your
                    Bluetooth® devices. Now you can, with Qualcomm's Snapdragon
                    Sound technology onboard.
                </LossLessChild>
            </div>
        </motion.section>
    );
};
