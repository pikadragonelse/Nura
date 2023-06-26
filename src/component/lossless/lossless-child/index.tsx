import React, { useEffect, useRef } from "react";

import "./index.scss";
import {
    MotionValue,
    Variants,
    motion,
    useAnimation,
    useAnimationFrame,
    useInView,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    wrap,
} from "framer-motion";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.5 },
};

export type LossLessChild = {
    children?: any;
    img?: string;
    scrollYParent?: MotionValue<number>;
    style?: any;
    initial?: any;
    ref?: any;
};
export const LossLessChild = ({
    children,
    img,
    scrollYParent = new MotionValue<number>(),
    style,
    initial,
    ref,
}: LossLessChild) => {
    return (
        <motion.div ref={ref} style={style} className="lossless-audio-info">
            <p className="lossless-audio-desc">{children}</p>
        </motion.div>
    );
};
