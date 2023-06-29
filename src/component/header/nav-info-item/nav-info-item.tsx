import classNames from "classnames/bind";

import styles from "./nav-info-item.module.scss";

const cl = classNames.bind(styles);
export type NavInfoItem = {
    content: any;
    href?: any;
    className?: string;
    icon?: any;
    onClick?: React.MouseEventHandler<any>;
};
export const NavInfoItem = ({
    content,
    href,
    className,
    icon,
    onClick,
}: NavInfoItem) => {
    return (
        <a
            onClick={onClick}
            href={href}
            className={cl("navInfoItem", className)}
        >
            {icon}
            {content}
        </a>
    );
};
