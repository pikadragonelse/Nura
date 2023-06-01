import classNames from "classnames/bind";

import styles from "./overlay.module.scss";

const cl = classNames.bind(styles);
export type Overlay = { onClick?: any };
export const Overlay = ({ onClick }: Overlay) => {
    return <div onClick={onClick} className={cl("overlay")}></div>;
};
