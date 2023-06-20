import classNames from "classnames/bind";

import { ErrorState } from "../../component/error-state";
import { ProductListOnPage } from "./product-list-on-page";
import styles from "./product-list.module.scss";

const cl = classNames.bind(styles);

export const ProductList = (props: {
    handleOpenModal?: any;
    totalPage: number;
    currentPage: number;
    error: boolean;
    amountProduct: number;
    loading: boolean;
    listProduct: any;
}) => {
    return (
        <>
            {props.error === true ? (
                <ErrorState />
            ) : (
                <section className={cl("productList")}>
                    <div className={cl("mainList")}>
                        {Number(props.amountProduct) === 1 ? (
                            <ProductListOnPage
                                amountProduct={props.amountProduct}
                                loading={props.loading}
                                handleOpenModal={props.handleOpenModal}
                                listProduct={props.listProduct.filter(
                                    (item: any) =>
                                        item.page1 === props.currentPage
                                )}
                            />
                        ) : (
                            <ProductListOnPage
                                amountProduct={props.amountProduct}
                                loading={props.loading}
                                handleOpenModal={props.handleOpenModal}
                                listProduct={props.listProduct.filter(
                                    (item: any) =>
                                        item.page3 === props.currentPage
                                )}
                            />
                        )}
                    </div>
                </section>
            )}
        </>
    );
};
