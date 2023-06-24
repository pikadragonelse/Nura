import classNames from "classnames/bind";

import styles from "./product-sub-info.module.scss";

const cl = classNames.bind(styles);

export const ProductSubInfo = (props: {
    heading: any;
    content: any;
    linkContent: any;
}) => {
    return (
        <div className={cl("sectionOfProduct", "productSubInfo")}>
            <h4 className={cl("headingSubInfo")}>{props.heading}</h4>

            <span className={cl("shippingContent")}>
                {props.content}
                <a href="!#" className={cl("viewInfoLink")}>
                    {props.linkContent}
                </a>
            </span>
        </div>
    );
};
