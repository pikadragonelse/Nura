import classNames from "classnames/bind";

import styles from "./wrapper.module.scss";

const cl = classNames.bind(styles);

export type Wrapper = {
    children: any;
    type: any;
    className?: any;
    id?: string;
};
export const Wrapper = ({ children, type, className, id }: Wrapper) => {
    return (
        <div id={id} className={cl(`${type}`, `${className}`)}>
            {children}
        </div>
    );
};
