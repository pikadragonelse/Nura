import React, { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

export type Modal = { children: ReactNode; isShow?: boolean };

export const Modal = ({ children, isShow = false }: Modal) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(true);
    }, []);

    return isReady === true ? (
        ReactDOM.createPortal(
            <div id="modal-root" className={isShow === true ? "show" : "hide"}>
                <div className="overlay"></div>
                <div className="children-modal">{children}</div>
            </div>,
            document.querySelector("#container") as any
        )
    ) : (
        <></>
    );
};
