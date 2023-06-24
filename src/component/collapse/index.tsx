import React, { forwardRef, useImperativeHandle, useState } from "react";

import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export type Collapse = {
    title: string;
    contentChild?: Array<any>;
    className?: string;
    onClickChild?: (...args: any[]) => any;
    isCollapsedWhenClickChild?: boolean;
    noPadding?: boolean;
    isBackground?: boolean;
    smallSize?: boolean;
};
export const Collapse = forwardRef(
    (
        {
            title,
            contentChild = [],
            className,
            onClickChild = (...args: any[]) => {},
            isCollapsedWhenClickChild = false,
            noPadding = false,
            isBackground = false,
            smallSize = false,
        }: Collapse,
        ref
    ) => {
        const [isColapsed, setIsColapsed] = useState<boolean>(false);

        useImperativeHandle(ref, () => {
            return { setIsColapsed };
        });

        return (
            <div
                className={`collapse ${className} ${
                    isBackground === true ? "background" : ""
                }`}
            >
                <div
                    className={`
                    title 
                    ${noPadding === true ? "noPadding" : ""} 
                    ${isBackground === true ? "background" : ""}
                    ${isColapsed === true ? "collapsed" : ""}
                    ${smallSize === true ? "small" : ""}
                `}
                    onClick={() => {
                        setIsColapsed((prev) => (prev = !prev));
                    }}
                >
                    <span>{title}</span>
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`collapse-icon ${
                            isColapsed === true ? "hide" : ""
                        }`}
                    />
                    <FontAwesomeIcon
                        icon={faAngleUp}
                        className={`collapse-icon ${
                            isColapsed === false ? "hide" : ""
                        }`}
                    />
                </div>

                {contentChild.map((item) => (
                    <div
                        className={`
                        content 
                        ${isColapsed === true ? "collapsed" : ""} 
                        ${isBackground === true ? "background" : ""}
                        ${smallSize === true ? "small" : ""}
                    `}
                        onClick={() => {
                            onClickChild((prev: any) => (prev = item));
                            if (isCollapsedWhenClickChild === true) {
                                setIsColapsed((prev) => (prev = false));
                            }
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        );
    }
);
