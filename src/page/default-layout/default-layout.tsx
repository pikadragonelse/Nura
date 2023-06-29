import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "../../component/footer";
import { Header } from "../../component/header";
import { Sidebar } from "../../component/sidebar";
import { Wrapper } from "../../component/wrapper";
import { useState } from "react";
import {
    faCartShopping,
    faCircleQuestion,
    faCircleXmark,
    faHeadphones,
    faHeadset,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { NavInfoItem } from "../../component/header/nav-info-item";

import "./index.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setIsOpen } from "../../redux/drawer";

export type DefaultLayout = { children: any; className?: string };
export const DefaultLayout = ({ children, className }: DefaultLayout) => {
    const isOpenDrawer = useAppSelector((state) => state.openDrawer);
    const dispatch = useAppDispatch();
    return (
        <Wrapper id="container" type="wrapperPage">
            <Header />
            <div className={`drawer ${isOpenDrawer === true ? "open" : ""}`}>
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="close-drawer-icon"
                    onClick={() => dispatch(setIsOpen(false))}
                />
                <div className={"nav-info-mobile"}>
                    <Link to={"/Nura/"}>
                        <NavInfoItem
                            content="Home"
                            icon={
                                <FontAwesomeIcon
                                    icon={faHouse}
                                    className="icon-nav"
                                />
                            }
                            onClick={() => dispatch(setIsOpen(false))}
                        />
                    </Link>
                    <Link to={"/page-list"}>
                        <NavInfoItem
                            content="Product"
                            icon={
                                <FontAwesomeIcon
                                    icon={faHeadphones}
                                    className="icon-nav"
                                />
                            }
                            onClick={() => dispatch(setIsOpen(false))}
                        />
                    </Link>
                    <Link to={""}>
                        <NavInfoItem
                            content="Cart"
                            icon={
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                    className="icon-nav"
                                />
                            }
                            onClick={() => dispatch(setIsOpen(false))}
                        />
                    </Link>
                    <Link to={""}>
                        <NavInfoItem
                            content="Why Nura?"
                            icon={
                                <FontAwesomeIcon
                                    icon={faCircleQuestion}
                                    className="icon-nav"
                                />
                            }
                            onClick={() => dispatch(setIsOpen(false))}
                        />
                    </Link>
                    <Link to={""}>
                        <NavInfoItem
                            content="Support"
                            icon={
                                <FontAwesomeIcon
                                    icon={faHeadset}
                                    className="icon-nav"
                                />
                            }
                            onClick={() => dispatch(setIsOpen(false))}
                        />
                    </Link>
                </div>
            </div>
            <Wrapper
                type="wrapperMain"
                onClick={() => dispatch(setIsOpen(false))}
            >
                <Wrapper type={`wrapperContent`} className={className}>
                    {children}
                </Wrapper>
            </Wrapper>
            <Footer />
        </Wrapper>
    );
};
