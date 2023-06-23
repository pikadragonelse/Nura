import classNames from "classnames/bind";

import { Button } from "../../button";

import {
    setCompareProduct,
    initialState,
} from "../../../redux/compare-product-reducer";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

import styles from "./product-list-item.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare,
    faCircleMinus,
    faCodeCompare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ProductType } from "../../../redux/product-list-reducer";

const cl = classNames.bind(styles);

export type ProductListItem = { product: ProductType };
export const ProductListItem = ({ product }: ProductListItem) => {
    const dispatch = useAppDispatch();
    const productCompare = useAppSelector((state) => state.compareProduct);

    return (
        <li className={cl("product", "ourListItem ")}>
            <span
                className={cl(
                    "compareMark",
                    `${Number(product.id) === productCompare.id ? "mark" : ""}`
                )}
            >
                Ready to compare
            </span>
            <div className={cl("productImageWrapper")}>
                <img
                    className={cl("productImage")}
                    src={product.image}
                    alt="product"
                />
            </div>
            <h3 className={cl("productHeading")}>{product.name}</h3>
            <div
                className={cl("productInfo")}
                onClick={(e) => e.stopPropagation()}
            >
                <span className={cl("productPrice")}>
                    ${product.price}
                    {productCompare.id === product.id ? (
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(setCompareProduct(initialState));
                            }}
                            className={cl("containerButtonCompare")}
                        >
                            <Button
                                className={cl(
                                    "compareButton",
                                    "btnIcon",
                                    "btnClearCompare"
                                )}
                            >
                                <FontAwesomeIcon icon={faCircleMinus} />
                            </Button>
                        </div>
                    ) : (
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(setCompareProduct(product));
                            }}
                            className={cl("containerButtonCompare")}
                        >
                            <Button className={cl("compareButton", "btnIcon")}>
                                <FontAwesomeIcon icon={faCodeCompare} />
                            </Button>
                        </div>
                    )}
                </span>
                <p className={cl("productDesc")}>{product.desc}</p>

                <Link
                    to={`/detail-page/${product.id}`}
                    className={cl("linkProduct")}
                >
                    <Button className={cl("compareButton", "btnDetail")}>
                        Detail
                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className={cl("iconDetail")}
                        />
                    </Button>
                </Link>
            </div>
        </li>
    );
};
