import classNames from "classnames/bind";

import { ErrorState } from "../../component/error-state";
import styles from "./product-list.module.scss";
import { Collapse } from "../collapse";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
    ProductListState,
    ProductType,
    setProduct,
} from "../../redux/product-list-reducer";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Pagination } from "../pagination";
import { ProductListItem } from "./product-list-item";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare,
    faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../button";
import { useViewport } from "../../hook/useViewport";

const cl = classNames.bind(styles);

export type ProductList = {};
export const ProductList = ({}) => {
    const [errorPage, setErrorPage] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [amountProduct, setAmountProduct] = useState(5);
    const [listShow, setListShow] = useState<ProductListState>([]);

    const listProduct = useAppSelector((state) => state.productList);
    const dispatch = useAppDispatch();

    const totalPage = Math.ceil(localStorage.totalProduct / amountProduct);

    const getData = (amountProduct: any) => {
        axios
            .get(
                `https://anything-three.vercel.app/listProduct?page${amountProduct}=${currentPage}&page${amountProduct}=${
                    currentPage - 1
                }&page${amountProduct}=${
                    currentPage + 1
                }&page${amountProduct}=${
                    currentPage + 2
                }&page${amountProduct}=${currentPage - 2}`
            )
            .then((res) => {
                dispatch(setProduct(res.data));
                setLoading(false);
            })
            .catch(() => {
                setErrorPage(true);
            });
    };

    const getDataShow = () => {
        const listTemp: ProductListState = [];
        listProduct.map((item) => {
            if (amountProduct === 5) {
                if (item.page5 === currentPage) {
                    listTemp.push(item);
                }
            }
            if (amountProduct === 10) {
                if (item.page10 === currentPage) {
                    listTemp.push(item);
                }
            }
        });
        setListShow(listTemp as any);
    };

    useEffect(() => {
        const checkCurrentPage = listProduct.some((item: ProductType) => {
            if (amountProduct === 5) {
                console.log(currentPage, item.page5);
                return item.page5 === currentPage;
            }
            if (amountProduct === 10) {
                return item.page10 === currentPage;
            }
        });

        if (checkCurrentPage === false) {
            getData(amountProduct);
        } else {
            getDataShow();
        }
    }, [currentPage, listProduct]);

    const handleChangePage = (number: any) => {
        if (number !== currentPage) {
            setCurrentPage(number);
            setLoading(true);
        }
    };

    const handleIncreaseCurrentPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage((prev: any) => ++prev);
            setLoading(true);
        }
    };

    const handleFastIncreaseCurrentPage = () => {
        if (currentPage < totalPage - 3) {
            setCurrentPage((prev: any) => prev + 3);
            setLoading(true);
        }
    };

    const handleDecreaseCurrentPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev: any) => --prev);
            setLoading(true);
        }
    };

    const handleFastDecreaseCurrentPage = () => {
        if (currentPage > 3) {
            setCurrentPage((prev: any) => prev - 3);
            setLoading(true);
        }
    };

    useEffect(() => {
        setCurrentPage(1);
        getData(amountProduct);
    }, [amountProduct]);

    const productCompare = useAppSelector((state) => state.compareProduct);

    const refCollapse1 = useRef<any>(null);
    const refCollapse2 = useRef<any>(null);
    const refCollapse3 = useRef<any>(null);

    const { width } = useViewport();

    return (
        <>
            {errorPage === true ? (
                <ErrorState />
            ) : (
                <section className={cl("productList")}>
                    <div className={cl("containerCategories")}>
                        <div className={cl("categories")}>
                            <h2 className={cl("categoriesHeading")}>
                                Categories
                                {width > 1023 ? (
                                    <FontAwesomeIcon
                                        icon={faSquareMinus}
                                        className={cl("categoriesIconCollapse")}
                                        onClick={() => {
                                            refCollapse1.current.setIsColapsed(
                                                false
                                            );
                                            refCollapse2.current.setIsColapsed(
                                                false
                                            );
                                            refCollapse3.current.setIsColapsed(
                                                false
                                            );
                                        }}
                                    />
                                ) : (
                                    ""
                                )}
                            </h2>

                            <ul className={cl("categoriesListItem")}>
                                <Collapse
                                    ref={refCollapse1}
                                    title="Nura True"
                                    contentChild={[
                                        "Official",
                                        "Accessory",
                                        "All",
                                    ]}
                                    className={cl("categoriesItem")}
                                    isBackground={width <= 1023 ? true : false}
                                    smallSize={width <= 1023 ? true : false}
                                    isContentHard={width > 1023 ? true : false}
                                />
                                <Collapse
                                    ref={refCollapse2}
                                    title="Nura Loop"
                                    contentChild={[
                                        "Official",
                                        "Accessory",
                                        "All",
                                    ]}
                                    className={cl("categoriesItem")}
                                    isBackground={width <= 1023 ? true : false}
                                    smallSize={width <= 1023 ? true : false}
                                    isContentHard={width > 1023 ? true : false}
                                />
                                <Collapse
                                    ref={refCollapse3}
                                    title="Nura Phone"
                                    contentChild={[
                                        "Official",
                                        "Accessory",
                                        "All",
                                    ]}
                                    className={cl("categoriesItem")}
                                    isBackground={width <= 1023 ? true : false}
                                    smallSize={width <= 1023 ? true : false}
                                    isContentHard={width > 1023 ? true : false}
                                />
                            </ul>
                            {width <= 1023 ? (
                                <FontAwesomeIcon
                                    icon={faSquareMinus}
                                    className={cl("categoriesIconCollapse")}
                                    onClick={() => {
                                        refCollapse1.current.setIsColapsed(
                                            false
                                        );
                                        refCollapse2.current.setIsColapsed(
                                            false
                                        );
                                        refCollapse3.current.setIsColapsed(
                                            false
                                        );
                                    }}
                                />
                            ) : (
                                ""
                            )}
                        </div>
                        <div
                            className={cl(
                                "selectCompare",
                                `${
                                    productCompare.name === "" ||
                                    productCompare.name == null
                                        ? "hide"
                                        : ""
                                }`
                            )}
                        >
                            <h3 className="titleSelect">Compare product</h3>
                            {/* <ProductListItem key={item.id} product={item} /> */}
                            <div className={cl("containerProductCompare")}>
                                <div className={cl("containerImg")}>
                                    <img
                                        src={productCompare.image}
                                        alt=""
                                        className={cl("productImg")}
                                    />
                                </div>

                                <div className={cl("productInfo")}>
                                    <h4 className={cl("productName")}>
                                        {productCompare.name}
                                    </h4>
                                    <p className={cl("productPrice")}>
                                        ${productCompare.price}
                                    </p>
                                    <Link
                                        to={`/detail-page/${productCompare.id}`}
                                        className={cl("linkProduct")}
                                    >
                                        <Button
                                            className={cl(
                                                "compareButton",
                                                "btnDetail"
                                            )}
                                        >
                                            Detail
                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                                className={cl("iconDetail")}
                                            />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cl("mainList")}>
                        <ul className={cl("listProductContainer")}>
                            {width <= 739
                                ? listShow.map((item) => (
                                      <Link
                                          to={`/detail-page/${item.id}`}
                                          className={cl("linkProduct")}
                                      >
                                          <ProductListItem
                                              key={item.id}
                                              product={item}
                                          />
                                      </Link>
                                  ))
                                : listShow.map((item) => (
                                      <ProductListItem
                                          key={item.id}
                                          product={item}
                                      />
                                  ))}
                            {listShow.length === 5 ? (
                                <div
                                    className={cl(
                                        "emptyProduct",
                                        `${width <= 739 ? "linkProduct" : ""}`
                                    )}
                                ></div>
                            ) : (
                                <>
                                    <div
                                        className={cl(
                                            "emptyProduct",
                                            `${
                                                width <= 739
                                                    ? "linkProduct"
                                                    : ""
                                            }`
                                        )}
                                    ></div>
                                    <div
                                        className={cl(
                                            "emptyProduct",
                                            `${
                                                width <= 739
                                                    ? "linkProduct"
                                                    : ""
                                            }`
                                        )}
                                    ></div>
                                </>
                            )}
                        </ul>
                        <div className={cl("footerList")}>
                            <div className={cl("paginationContainter")}>
                                <Pagination
                                    handleSetPage={handleChangePage}
                                    totalPage={totalPage}
                                    increaseCurrentPage={
                                        handleIncreaseCurrentPage
                                    }
                                    decreaseCurrentPage={
                                        handleDecreaseCurrentPage
                                    }
                                    currentPage={currentPage}
                                    fastIncreaseCurrentPage={
                                        handleFastIncreaseCurrentPage
                                    }
                                    fastDecreaseCurrentPage={
                                        handleFastDecreaseCurrentPage
                                    }
                                    className={cl("paginationContainterItem")}
                                />
                            </div>
                            <div className={cl("changeAmoutItemContainer")}>
                                <span className={cl("text")}>
                                    Amount product:
                                </span>
                                <Collapse
                                    title={`${amountProduct}`}
                                    contentChild={[5, 10]}
                                    className={cl(
                                        "changeAmoutItem",
                                        "paginationContainterItem"
                                    )}
                                    onClickChild={setAmountProduct}
                                    isCollapsedWhenClickChild={true}
                                    isBackground
                                    smallSize
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};
