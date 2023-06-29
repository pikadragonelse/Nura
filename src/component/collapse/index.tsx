import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from "react";

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
    styleTitle?: Record<string, string>;
    styleOption?: Record<string, string>;
    isContentHard?: boolean;
    onClick?: React.MouseEventHandler<any> | undefined;
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
            styleTitle = {},
            styleOption = {},
            isContentHard = false,
            onClick,
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
                onClick={onClick}
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
                    style={styleTitle}
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
                {isContentHard === true ? (
                    contentChild.map((item) => {
                        return (
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
                        );
                    })
                ) : (
                    <div
                        className={`content-container ${
                            isColapsed === true ? "collapsed" : ""
                        }  `}
                        style={styleOption}
                    >
                        {contentChild.map((item) => {
                            return (
                                <div
                                    className={`
                                content 
                                ${isColapsed === true ? "collapsed" : ""} 
                                ${isBackground === true ? "background" : ""}
                                ${smallSize === true ? "small" : ""}
                            `}
                                    onClick={() => {
                                        onClickChild(
                                            (prev: any) => (prev = item)
                                        );
                                        if (
                                            isCollapsedWhenClickChild === true
                                        ) {
                                            setIsColapsed(
                                                (prev) => (prev = false)
                                            );
                                        }
                                    }}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
);
