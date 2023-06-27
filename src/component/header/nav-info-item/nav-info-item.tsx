import classNames from "classnames/bind";

import styles from "./nav-info-item.module.scss";

const cl = classNames.bind(styles);
export type NavInfoItem = {
    content: any;
    href?: any;
    className?: string;
    icon?: any;
};
export const NavInfoItem = ({
    content,
    href,
    className,
    icon,
}: NavInfoItem) => {
    return (
        <a href={href} className={cl("navInfoItem", className)}>
            {icon}
            {content}
        </a>
    );
};
