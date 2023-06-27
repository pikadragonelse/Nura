import classNames from "classnames/bind";

import styles from "./wrapper.module.scss";

const cl = classNames.bind(styles);

export type Wrapper = {
    children: any;
    type: any;
    className?: any;
    id?: string;
    onClick?: React.MouseEventHandler<any>;
};
export const Wrapper = ({
    children,
    type,
    className,
    id,
    onClick,
}: Wrapper) => {
    return (
        <div
            id={id}
            onClick={onClick}
            className={cl(`${type}`, `${className}`)}
        >
            {children}
        </div>
    );
};
