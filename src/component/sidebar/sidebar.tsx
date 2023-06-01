import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faHeadphones,
    faHouse,
    faUsersViewfinder,
} from "@fortawesome/free-solid-svg-icons";

import { SidebarListItem } from "./sidebar-list-item";
import styles from "./sidebar.module.scss";
import { useLocation } from "react-router-dom";

const cl = classNames.bind(styles);

export const Sidebar = () => {
    const { pathname } = useLocation();
    const detailURL = pathname.split("/")[1];
    return (
        <div className={cl("sidebar", "sidebarHome")}>
            <ul className={cl("sidebarListContent")}>
                <SidebarListItem to="/Nura/">
                    <FontAwesomeIcon
                        className={cl(
                            "iconSidebar",
                            pathname === "/Nura/" ? "active" : ""
                        )}
                        icon={faHouse}
                    />
                </SidebarListItem>
                <SidebarListItem to="/page-list">
                    <FontAwesomeIcon
                        className={cl(
                            "iconSidebar",
                            pathname === "/page-list" ||
                                detailURL === "detail-page"
                                ? "active"
                                : ""
                        )}
                        icon={faHeadphones}
                    />
                </SidebarListItem>
                <SidebarListItem to="/for-you" className={cl("")}>
                    <FontAwesomeIcon
                        className={cl(
                            "iconSidebar",
                            pathname === "/for-you" ? "active" : ""
                        )}
                        icon={faUsersViewfinder}
                    />
                </SidebarListItem>
                <SidebarListItem to="/about-us" className={cl("")}>
                    <FontAwesomeIcon
                        className={cl(
                            "iconSidebar",
                            pathname === "/about-us" ? "active" : ""
                        )}
                        icon={faCircleQuestion}
                    />
                </SidebarListItem>
            </ul>
        </div>
    );
};
