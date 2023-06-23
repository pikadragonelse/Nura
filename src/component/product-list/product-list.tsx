import classNames from "classnames/bind";

import { ErrorState } from "../../component/error-state";
import { ProductListOnPage } from "./product-list-on-page";
import styles from "./product-list.module.scss";
import { Collapse } from "../collapse";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    ProductListState,
    ProductType,
    setProduct,
} from "../../redux/product-list-reducer";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Pagination } from "../pagination";
import { ProductListItem } from "./product-list-item";

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

    return (
        <>
            {errorPage === true ? (
                <ErrorState />
            ) : (
                <section className={cl("productList")}>
                    <div className={cl("categories")}>
                        <h2 className={cl("categoriesHeading")}>Categories</h2>
                        <ul className={cl("categoriesListItem")}>
                            <Collapse
                                title="Nura True"
                                contentChild={["Official", "Accessory", "All"]}
                                className={cl("categoriesItem")}
                            />
                            <Collapse
                                title="Nura Loop"
                                contentChild={["Official", "Accessory", "All"]}
                                className={cl("categoriesItem")}
                            />
                            <Collapse
                                title="Nura Phone"
                                contentChild={["Official", "Accessory", "All"]}
                                className={cl("categoriesItem")}
                            />
                        </ul>
                    </div>
                    <div className={cl("mainList")}>
                        <ul className={cl("listProductContainer")}>
                            {listShow.map((item) => (
                                <ProductListItem key={item.id} product={item} />
                            ))}
                            {listShow.length === 5 ? (
                                <div className={cl("emptyProduct")}></div>
                            ) : (
                                <>
                                    <div className={cl("emptyProduct")}></div>
                                    <div className={cl("emptyProduct")}></div>
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
                                    isBackground={true}
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
