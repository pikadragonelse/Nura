import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faAngleRight,
    faAnglesLeft,
    faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./pagination.module.scss";

const cl = classNames.bind(styles);

export type Pagination = {
    totalPage: any;
    handleSetPage: any;
    className?: any;
    increaseCurrentPage: any;
    decreaseCurrentPage: any;
    currentPage: any;
    fastIncreaseCurrentPage: any;
    fastDecreaseCurrentPage: any;
};

export const Pagination = ({
    totalPage,
    handleSetPage,
    className,
    increaseCurrentPage,
    decreaseCurrentPage,
    currentPage,
    fastIncreaseCurrentPage,
    fastDecreaseCurrentPage,
}: Pagination) => {
    const numTwoSide = 1;
    let range = numTwoSide + 4;
    const rangeToTruncate = 2;

    const handlePagination = () => {
        let pageShow: Array<number> = [];

        if (totalPage >= 2 * range - 1) {
            for (let pos = 1; pos <= totalPage; pos++) {
                if (pos === currentPage) {
                    if (
                        pos - numTwoSide > rangeToTruncate &&
                        pos + numTwoSide < totalPage - rangeToTruncate + 1
                    ) {
                        pageShow = [
                            1,
                            0,
                            pos - numTwoSide,
                            pos,
                            pos + numTwoSide,
                            0,
                            totalPage,
                        ];
                    } else if (currentPage <= range) {
                        let tempArr = [];
                        for (let count = 1; count <= range; count++) {
                            tempArr.push(count);
                        }
                        pageShow = [...tempArr, 0, totalPage];
                    } else if (currentPage >= totalPage - range) {
                        let tempArr = [];
                        for (
                            let countPage = totalPage - range + 1;
                            countPage <= totalPage;
                            countPage++
                        ) {
                            tempArr.push(countPage);
                        }
                        pageShow = [1, 0, ...tempArr];
                    }
                }
            }
        } else {
            for (let count = 1; count < totalPage; count++) {
                pageShow.push(count);
            }
        }
        return pageShow;
    };

    return (
        <nav className={cl("paginationContainer", className)}>
            <ul className={cl("pagination")}>
                <li
                    onClick={() => fastDecreaseCurrentPage()}
                    className={cl("paginationPage", "paginationLeft")}
                >
                    <FontAwesomeIcon
                        className={cl(
                            "paginationIcon",
                            currentPage <= 3 ? "paginationDisableItem" : ""
                        )}
                        icon={faAnglesLeft}
                    />
                </li>

                <li
                    onClick={() => decreaseCurrentPage()}
                    className={cl("paginationPage", "paginationLeft")}
                >
                    <FontAwesomeIcon
                        className={cl(
                            "paginationIcon",
                            currentPage <= 1 ? "paginationDisableItem" : ""
                        )}
                        icon={faAngleLeft}
                    />
                </li>

                {handlePagination().map((number, index) => (
                    <li key={index} className={cl("paginationPage")}>
                        {number !== 0 ? (
                            <div
                                onClick={() => handleSetPage(number)}
                                className={cl(
                                    "paginationLink",
                                    currentPage === number
                                        ? "paginationActive"
                                        : ""
                                )}
                            >
                                {number}
                            </div>
                        ) : (
                            <div className={cl("paginationLink")}>...</div>
                        )}
                    </li>
                ))}

                <li
                    onClick={() => {
                        increaseCurrentPage();
                    }}
                    className={cl("paginationPage", "paginationRight")}
                >
                    <FontAwesomeIcon
                        className={cl(
                            "paginationIcon",
                            currentPage >= totalPage
                                ? "paginationDisableItem"
                                : ""
                        )}
                        icon={faAngleRight}
                    />
                </li>

                <li
                    onClick={() => {
                        fastIncreaseCurrentPage();
                    }}
                    className={cl("paginationPage", "paginationRight")}
                >
                    <FontAwesomeIcon
                        className={cl(
                            "paginationIcon",
                            currentPage >= totalPage - 3
                                ? "paginationDisableItem"
                                : ""
                        )}
                        icon={faAnglesRight}
                    />
                </li>
            </ul>
        </nav>
    );
};
