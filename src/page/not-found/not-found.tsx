import classNames from "classnames/bind";

import { Button } from "../../component/button";
import { Wrapper } from "../../component/wrapper";

import styles from "./not-found.module.scss";

const cl = classNames.bind(styles);

export const NotFound = () => {
    return (
        <Wrapper type="wrapperPage" className={cl("notFoundWrapper")}>
            <h1 className={cl("authorName")}>Dragon Pi</h1>
            <h1 className={cl("errorTitle", "errorItem")}>404</h1>
            <h3 className={cl("errorContent", "errorItem")}>Page not found</h3>
            <p className={cl("errorDesc", "errorItem")}>
                You can either return to the previous page or visit our
                homepage.
            </p>
            <Button className={cl("notFoundButton")} to="/Nura/">
                Back home
            </Button>
        </Wrapper>
    );
};
