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

const cl = classNames.bind(styles);

export const Sidebar = () => {
    const arr = [];
    return (
        <div className={cl("sidebar", "sidebarHome")}>
            <ul className={cl("sidebarListContent")}>
                <SidebarListItem to="/Nura/">
                    <FontAwesomeIcon
                        className={cl("iconSidebar")}
                        icon={faHouse}
                    />
                </SidebarListItem>
                <SidebarListItem to="/page-list">
                    <FontAwesomeIcon
                        className={cl("iconSidebar")}
                        icon={faHeadphones}
                    />
                </SidebarListItem>
                <SidebarListItem to="/for-you" className={cl("")}>
                    <FontAwesomeIcon
                        className={cl("iconSidebar")}
                        icon={faUsersViewfinder}
                    />
                </SidebarListItem>
                <SidebarListItem to="/about-us" className={cl("")}>
                    <FontAwesomeIcon
                        className={cl("iconSidebar")}
                        icon={faCircleQuestion}
                    />
                </SidebarListItem>
            </ul>
        </div>
    );
};
