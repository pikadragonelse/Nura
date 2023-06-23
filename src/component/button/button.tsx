import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./button.module.scss";
import { MouseEventHandler } from "react";

const cl = classNames.bind(styles);

export const Button = (props: {
    href?: any;
    children?: any;
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
    to?: any;
    className?: any;
    primary?: boolean;
}) => {
    return props.href !== undefined ? (
        <a
            onClick={props.onClick}
            className={cl(
                "btn",
                `${props.className}`,
                `${props.primary === true ? "primary" : ""}`
            )}
            href={props.href}
        >
            {props.children}
        </a>
    ) : props.to !== undefined ? (
        <Link
            onClick={props.onClick}
            className={cl(
                "btn",
                `${props.className}`,
                `${props.primary === true ? "primary" : ""}`
            )}
            to={`${props.to}`}
        >
            {props.children}
        </Link>
    ) : (
        <button
            onClick={props.onClick}
            className={cl(
                "btn",
                `${props.className}`,
                `${props.primary === true ? "primary" : ""}`
            )}
        >
            {props.children}
        </button>
    );
};
